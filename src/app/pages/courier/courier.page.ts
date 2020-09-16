import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { PopoverController } from "@ionic/angular";
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Order } from 'src/app/interfaces/order';
import { MapService } from 'src/app/services/sys/map.service';
import { OrderService } from 'src/app/services/sys/order.service';
import { HelpComponent } from '../../components/help/help.component';
import { NoteComponent } from '../../components/note/note.component';
import { AuthService } from '../../services/auth.service';
import { CourierService } from '../../services/courier.service';
import { SettingsService } from '../../services/settings.service';
import { StateService } from '../../services/state.service';
import { SysService } from '../../services/sys.service';
import { DataService } from '../../services/sys/data.service';


@Component({
  selector: 'app-courier',
  templateUrl: './courier.page.html',
  styleUrls: ['./courier.page.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: 'auto',
      })),
      state('closed', style({
        height: 'max-content',
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ])
  ]
})
export class CourierPage implements OnInit {
  @ViewChild('sInput') public sInput: ElementRef;
  @ViewChild(CdkDropList, { static: false })
  Drop_L: CdkDropList;
  @ViewChildren(CdkDrag)
  DragItems: QueryList<CdkDrag>;

  public orders: any = null;
  public statuses: any = null;
  public selectedTab = 1;
  public ordersInit: boolean = false;
  public loader: boolean = false;
  public local_stop$: Subject<any> = new Subject();
  public localcheck: boolean = false;
  public g_done = 0;
  public g_process = 0;
  public g_fail = 0;
  public lvl_ind = { width: '0%' };
  public btn_go: boolean = false;
  public subBtnCond: boolean = true;
  public scanView: boolean = false;
  public scanInput: string;
  public scan_process = false;
  public find_order: boolean = false;
  public isWorkEnded: boolean = false;
  public searchString = '';
  private ord: Observable<any[]>;
  public orders_c: Observable<any>;
  public slicer: number = this.howSlice();
  public callWindow: boolean = false;
  public selectedPhone: string;
  public orderPhones: string[];
  public order: Order;
  public noDrag = false;
  private segment: number[] = [1];

  constructor(public courier: CourierService,
    private router: Router,
    public state$: StateService,
    public auth: AuthService,
    private bs: BarcodeScanner,
    public vbr: Vibration,
    public settings: SettingsService,
    private sys: SysService,
    private data: DataService,
    public popoverController: PopoverController,
    private map: MapService,
    private orderService: OrderService,
    private CL: CallNumber,
    private network: Network

  ) {
    let self = this;

    this.initContent();
    if (this.state$.position.getValue() != null) {
      this.startRoute(false);
    }


    this.state$.state.pipe(takeUntil(this.local_stop$)).subscribe((state) => {
      const a = state;
      if (state == 'orders_init') {
        self.initContent();
      }
    })
    this.initConditions();
    this.ord = this.data.orders.asObservable();
    this.prepareOrdersList();

  }

  public initConditions() {
    let app_mode = this.auth.getMode();
    switch (app_mode) {
      case 'fullAuto':
        if (!this.state$.confirmed) this.subBtnCond = true;;
        break;
      case 'auto':
        this.subBtnCond = false;
        break;
      case 'fullHand':
        if (!this.state$.confirmed) this.subBtnCond = true;
        break;
      case 'hand':
        this.subBtnCond = false;
        break;
    }
  }

  ngAfterViewChecked() {
    this.Drop_L.autoScrollDisabled = false;
    this.DragItems.changes.subscribe((r) => {
      this.DragItems.forEach(DragItem => {
        DragItem.dragStartDelay = {
          touch: 500,
          mouse: 100
        };
      })
    });
  }

  ngOnInit() {
    this.settings.checkout = !!(this.settings.rules.storeCheckMode - 0);
    if (!this.settings.checkout) {
      this.auth.checkState = 'checkedOut'
    } else {
      this.auth.checkState = 'checked' + localStorage.check
    }
    if (this.settings.rules.appMode == 'hand') {
      this.state$.manual_route = true
    }
    if (this.settings.rules.appMode.toLowerCase().includes('auto')) {
      this.noDrag = true;
    }
    this.data.orders.subscribe((orders) => {
      this.courier.count_orders(orders)
    })
  }

  public scanInputStart() {
    let self = this;
    this.scanView = !this.scanView;
    this.loader = true;
    if (this.auth.getScanMode() == 'scan') {
      self.courier.findOrder(this.scanInput).subscribe((res) => {
        self.scanInput = null;
        if (res.success == 'true') {
          self.courier.sumbitOrder(res.order_id).subscribe((re_s) => {
            console.log('courier_page sbo resp', re_s);
            if (re_s) {
              self.submitOrder();
            } else {
              self.scanView = false;
            }
            self.loader = false;
          });
        } else {
          self.auth.showError(2);
          self.loader = false;
          self.scanView = false;
        }
        self.state$.confirmed = true;
        self.orders.forEach((order: any) => {
          if (order.confirm == '0') {
            self.state$.confirmed = false;
          }
        });
      })
    } else {
      self.loader = false;
    }
    this.scan_process = false;
  }

  public scanInputChange() {
    console.log('inputData', this.scanInput);
    let self = this;
    if (this.scan_process) return false;
    this.scan_process = true;
    if (this.find_order) {
      setTimeout(function () {
        self.scanSearch();
      }, 1500)
    } else {
      setTimeout(function () {
        self.scanInputStart();
      }, 1500)
    }
  }

  public submitOrder() {
    var self = this;
    console.log('SUBMIT_ORDER_CALL');
    if (this.auth.getScanMode() == 'scan') {
      this.scanView = !this.scanView;
      setTimeout(function () {
        self.sInput.nativeElement.focus();
      }, 500);
      return false
    }
    this.bs.scan().then((data) => {
      console.log('SCAN_RETURN_DATA', data);
      if (data.text != "") {
        self.loader = true;
        self.courier.findOrder(data.text).subscribe((res) => {
          if (res.success == 'true') {
            self.courier.sumbitOrder(res.order_id).subscribe((re_s) => {
              if (re_s) {
                self.submitOrder();
              }
              self.loader = false;
            });
          } else {
            self.auth.showError(2);
            self.loader = false;
          }
          self.state$.confirmed = true;
          self.orders.forEach((order: any) => {
            if (order.confirm == '0') {
              self.state$.confirmed = false;
            }
          });
        })
      } else {
        self.loader = false;
      }
    });
  }

  public ordersListChanged(orders: Order[]) {
    this.orders = orders;
    let way: any[] = new Array();
    orders.forEach(order => {
      if (Number(order.status_id) == 1) {
        way.push(order.id);
      }
    });
    this.state$.old_way = way;
  }

  ngOnDestroy() {
    this.local_stop$.next(null);
    this.state$.orders_page_check = false;
  }

  public manualRoute() {
    if (this.state$.manual_route) {
      this.courier.changeRouteMode('auto');
    } else {
      this.courier.changeRouteMode('fullHand');
    }
    this.vbr.vibrate(300);
  }


  public initContent() {
    var self = this;
    this.state$.orders.subscribe(() => {
      this.orders = this.state$.orders_data;
      console.log('sys::initСontent orders', this.orders);
      this.statuses = [{ "id": 4, "status": "Не доставлено" }, { "id": 5, "status": "Доставлено" }, { "id": 6, "status": "Частично доставлено" }];
      this.ordersInit = true;
      self.count_orders();
    })
  }


  public getStatus(order: Order) {
    return this.courier.getStatus(order);
  }

  public selectOrder(id: string) {

    this.router.navigate(['/order', id]);
  }

  public tabSelect(tab: number) {
    this.selectedTab = tab;
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  public getCondition(status: number) {
    switch (this.selectedTab) {
      case 1:
        if (status == 1) return true;
        break;
      case 2:
        if (status == 5 || status == 6) return true;
        break;
      case 3:
        if (status == 4) return true;
        break;
    }
    return false;
  }

  public count_orders(orders = this.courier.ordersInfo) {
    let g_done = 0;
    let g_process = 0;
    let g_fail = 0;

    for (let i = 0; i < orders.length; i++) {
      switch (String(orders[i].status_id)) {
        case '4':
          g_fail++;
          break;
        case '5':
          g_done++;
          break;
        case '6':
          g_done++;
          break;
        case '1':
          g_process++;
          break;
      }
    }
    this.g_done = g_done;
    this.g_process = g_process;
    this.g_fail = g_fail;
  }

  public startRoute(start = true, stop = false) {
    let self = this;
    this.auth.checkAuth().subscribe((data) => {
      if (data.success == 'true') {
        self.sendStartRoute(data.sync_id, start, stop);
      }
    })
  }

  public stopRoute() {
    this.startRoute(false, true);
  }


  public sendStartRoute(cid: number, start: boolean, stop: boolean) {
    const url = "geo/route_start.php";
    let data = {
      'cid': cid,
      'lt': this.state$.position.getValue().lt,
      'lg': this.state$.position.getValue().lg,
      'start': '',
      'stop': ''
    };
    if (start) {
      data['start'] = '1';
    }
    if (stop) {
      data['stop'] = '1';
    }
    let self = this;
    this.auth.sendPost(url, data).subscribe((data) => {
      if (data.success == true) {
        self.btn_go = true;
        if (data.result == 'stop') {
          self.btn_go = false;
        }
      }
    });
  }

  public scanSearch() {
    let self = this;
    this.scanView = !this.scanView;
    this.loader = true;
    if (this.auth.getScanMode() == 'scan') {
      self.courier.findOrder(this.scanInput).subscribe((res) => {
        self.scanInput = null;
        if (res.success == 'true') {
          self.selectOrder(res.order_id);
        } else {
          self.auth.showError(2);
        }
        self.loader = false;
        self.scanView = false;
      })
    } else {
      self.loader = false;
    }
    this.scan_process = false;
    this.find_order = false;
  }

  public findOrder() {
    let self = this;
    if (this.auth.getScanMode() == 'scan') {
      this.scanView = !this.scanView;
      this.find_order = true;
      setTimeout(function () {
        self.sInput.nativeElement.focus();
      }, 500);
      return false
    }

    this.bs.scan().then((data) => {
      self.courier.findOrder(data.text).subscribe((res) => {
        if (res.success == 'true') {
          self.selectOrder(res.order_id);
        } else {
          self.auth.showError(2);
        }
      })
    });
  }

  //Завершение рабочего дня курьера
  public endWork() {
    this.courier.endWork().subscribe((data: { success: boolean }) => {
      if (data.success) {
        this.isWorkEnded = true;
        this.sys.presentToast('Рабочий день завершен',
          'success')
      }
    },
      error => {
        this.sys.presentToast('Ошибка: ' + error.message, 'danger')
      })

  }
  doRefresh() {
    this.data.getApiData();

  }

  public segmentChanged(event: any) {
    let ids = [Number(event.target.value)];
    if (event.target.value == '5') {
      ids.push(6)
    }
    this.segment = ids;
    this.prepareOrdersList(ids)
  }

  public onSearchChange(event: any) {
    this.searchString = event.target.value;
    this.prepareOrdersList(this.segment)

  }
  public prepareOrdersList(ids = this.segment) {

    this.orders_c = this.ord.pipe(
      map(
        orders => orders && orders.filter(order => ids.includes(Number(order.status_id)))
          .filter(
            order => order.client_address.toLowerCase().includes(this.searchString.toLowerCase()) || order.client_fio.toLowerCase().includes(this.searchString.toLowerCase()) ||
              order.client_id.toLowerCase().includes(this.searchString.toLowerCase())
          )
          .slice(this.slicer)
      ),
      map(
        (orders) => { orders.forEach((order) => { order.show = false }); this.orders = orders; return orders }
      )
    );

  }
  public howSlice(): number {
    return (this.settings.rules.typeRoute === 'standart' ? 0 : 1)
  }

  async popoverHelp(ev: any) {
    const popover = await this.popoverController.create({
      component: HelpComponent,
      event: ev,
      translucent: true,
      cssClass: 'help'
    });
    return popover
  }

  async showHelp(ev: any) {
    let popover = await this.popoverHelp(ev);
    popover.present();

  }

  public showRoute(order: Order) {
    this.map.showRoute(order)
  }

  public drop(event: CdkDragDrop<any[]>) {

    moveItemInArray(this.orders, event.previousIndex, event.currentIndex);
    this.data.rewriteOrders(this.orders);
    console.log('sys:: массив заказов после перетаскивания: ', this.orders);
  }

  async popoverNote(ev: any, orderId: string) {
    const popover = await this.popoverController.create({
      component: NoteComponent,
      event: ev,
      translucent: true,
      cssClass: 'help',
      componentProps: {
        "orderId": orderId
      }
    });
    return popover
  }

  public async note(ev: any, orderId: string) {
    let popover = await this.popoverNote(ev, orderId);
    popover.present();
  }

  //Звонок получателю заказа
  public phoneClick(action: string, order: Order) {
    this.order = order;
    this.orderPhones = this.parsePhone(order.client_phone);
    let courierPhone = this.parsePhone(order.courier_phone)[0];
    if (this.orderPhones.length == 1) {
      this.selectedPhone = this.orderPhones[0];
    }

    switch (action) {
      case "init":
        this.callWindow = !this.callWindow;
        break;
      case "phone":
        this.CL.callNumber(this.selectedPhone, false).then(() => { });
        this.callWindow = false;
        this.order = undefined;
        break;
      case "operator":
        if (this.network.type == 'none') {
          this.phoneClick('phone', order);
          return false;
        }
        if (this.selectedPhone && courierPhone) {
          let url = "orders";
          let data = {
            action: "send_phone",
            client_number: this.selectedPhone,
            cur_number: courierPhone,
          };
          this.auth.sendPost(url, data).subscribe((resp) => {
            console.log("call_subs", resp);
          });
          this.auth.showError(9);
          this.callWindow = false;
        }
        this.order = undefined;
        break;
    }
  }

  //Парсинг номера телефона из строки с лишним мусором
  public parsePhone(phone: string): Array<string> {
    let phones: Array<string> = [];
    phone = phone.replace(/\D+/g, "");

    while (phone.length > 7) {
      phone = this.normalizePhoneNumber(phone);
      phones.push(phone.slice(null, 11));
      phone = phone.slice(11);
    }
    return phones;
  }

  //Жонглирование '8' / '+7'
  private normalizePhoneNumber(phone: string): string {
    if (phone[0] !== "8" && phone[0] !== "7" && phone.length !== 11) {
      phone = "8" + phone;
    }
    if (phone.length == 7 || phone.length == 10) {
      phone = "8" + phone;
    }
    if (phone[0] !== "8" && phone.length == 11) {
      phone = "8" + phone.slice(1);
    }
    return phone;
  }


  public vibr($event?: any) {
    this.vbr.vibrate(10);
    console.log('sys:: *Вибирация*');
  }

}
