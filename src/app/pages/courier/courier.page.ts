import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { IntroJsService } from '@esfaenza/ngx-introjs';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { PopoverController } from '@ionic/angular';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Order } from 'src/app/interfaces/order';
import { SysCourierService } from 'src/app/services/sys/courier.service';
import { MapService } from 'src/app/services/sys/map.service';
import { HelpComponent } from '../../components/help/help.component';
import { NoteComponent } from '../../components/note/note.component';
import { ScanPVZResponse } from '../../interfaces/scan-pvzresponse';
import { AuthService } from '../../services/auth.service';
import { CourierService } from '../../services/courier.service';
import { SettingsService } from '../../services/settings.service';
import { StateService } from '../../services/state.service';
import { SysService } from '../../services/sys.service';
import { DataService } from '../../services/sys/data.service';
import { OrderService } from '../../services/sys/order.service';

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

  public orders: Order[] | null = null;
  public statuses: any = null;
  public selectedTab = 1;
  public ordersInit = false;
  public loader = false;
  public local_stop$: Subject<any> = new Subject();
  public localcheck = false;
  public g_done = 0;
  public g_process = 0;
  public g_fail = 0;
  public lvl_ind = { width: '0%' };
  public btn_go = false;
  public subBtnCond = true;
  public scanView = false;
  public scanInput: string;
  public scan_process = false;
  public find_order = false;
  public isWorkEnded = false;
  public searchString = '';
  public orders_c: Observable<Order[]>;
  public slicer: number = this.howSlice();
  public callWindow = false;
  public selectedPhone: string;
  public orderPhones: string[];
  public order: Order;
  public noDrag = false;
  private segment: number[] = [1];
  public IntroItems = {
    Group: '2',
    1: 'Сканирование штрихкода заказа, поиск по штрихкоду',
    2: 'Текстовый поиск заказов по адресу, ФИО и компании',
    3: 'Показать быстрые действия',
    4: 'Сканировать QR-код на складе, чтобы отметиться'
  };
  public wayRequested = false;

  constructor(
    public courier: CourierService,
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
    private CL: CallNumber,
    private network: Network,
    private http: HttpClient,
    private firebase: FirebaseX,
    public introService: IntroJsService,
    public orderService: OrderService,
    private sysCourier: SysCourierService

  ) {
    const self = this;

    this.initContent();
    if (this.state$.position.getValue() != null) {
      this.startRoute(false);
    }


    this.state$.state.pipe(takeUntil(this.local_stop$)).subscribe((state) => {
      const a = state;
      if (state == 'orders_init') {
        self.initContent();
      }
    });
    this.initConditions();
    this.data.orders.asObservable();
    this.orders_c = this.data.orders;
    this.prepareOrdersList();

  }

  public initConditions() {
    const app_mode = this.auth.getMode();
    switch (app_mode) {
      case 'fullAuto':
        if (!this.state$.confirmed) { this.subBtnCond = true; }
        break;
      case 'auto':
        this.subBtnCond = false;
        break;
      case 'fullHand':
        if (!this.state$.confirmed) { this.subBtnCond = true; }
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
      });
    });
  }

  ngOnInit() {
    this.settings.checkout = !!(Number(this.settings.rules.storeCheckMode));
    if (!this.settings.checkout) {
      this.auth.checkState = 'checkedOut';
    } else {
      this.auth.checkState = `checked${localStorage.check}`;
    }
    if (this.settings.rules.appMode == 'hand') {
      this.state$.manual_route = true;
    }
    if (this.settings.rules.appMode.toLowerCase().includes('auto')) {
      this.noDrag = true;
    }
    this.data.orders.subscribe((orders) => {
      this.courier.count_orders(orders);
    });
    this.firebase.setScreenName('courier');
  }

  public scanInputStart() {
    const self = this;
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
      });
    } else {
      self.loader = false;
    }
    this.scan_process = false;
  }

  public scanInputChange() {
    console.log('inputData', this.scanInput);
    const self = this;
    if (this.scan_process) { return false; }
    this.scan_process = true;
    if (this.find_order) {
      setTimeout(function () {
        self.scanSearch();
      }, 1500);
    } else {
      setTimeout(function () {
        self.scanInputStart();
      }, 1500);
    }
  }

  public submitOrder() {
    const self = this;
    console.log('SUBMIT_ORDER_CALL');
    if (this.auth.getScanMode() == 'scan') {
      this.scanView = !this.scanView;
      setTimeout(function () {
        self.sInput.nativeElement.focus();
      }, 500);
      return false;
    }
    this.bs.scan().then((data) => {
      if (data.text != '') {
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
        });
      } else {
        self.loader = false;
      }
    });
  }

  public ordersListChanged(orders: Order[]) {
    this.orders = orders;
    const way: any[] = new Array();
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


  public initContent() {
    const self = this;
    this.data.orders.subscribe((orders: Order[]) => {
      this.orders = orders;
      console.log('sys::initСontent orders', this.orders);
      this.statuses = [{ id: 4, status: 'Не доставлено' }, { id: 5, status: 'Доставлено' }, { id: 6, status: 'Частично доставлено' }];
      this.ordersInit = true;
      self.count_orders();
    });
  }


  public getStatus(order: Order) {
    return this.courier.getStatus(order);
  }

  public selectOrder(id: string) {

    this.router.navigate(['order', id]);
  }

  public tabSelect(tab: number) {
    this.selectedTab = tab;
  }

  trackFn(index: number, el: any): number {
    return el.id;
  }


  public getCondition(status: number) {
    switch (this.selectedTab) {
      case 1:
        if (status == 1) { return true; }
        break;
      case 2:
        if (status == 5 || status == 6) { return true; }
        break;
      case 3:
        if (status == 4) { return true; }
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
    this.loader = true;
    const self = this;
    this.auth.checkAuth().subscribe((data) => {
      if (data.success == 'true') {
        self.sendStartRoute(data.sync_id, start, stop).then(() => {
          this.loader = false;
        });
      } else {
        this.loader = false
      }
    });
  }

  public stopRoute() {
    this.startRoute(false, true);
  }


  public async sendStartRoute(cid: number, start: boolean, stop: boolean) {
    const url = 'geo/route_start.php';
    const currentLocation = await this.map.getMyLocation();
    const data = {
      cid,
      lt: currentLocation.latLng.lat,
      lg: currentLocation.latLng.lng,
      start: '',
      stop: ''
    };
    if (start) {
      data.start = '1';
    }
    if (stop) {
      data.stop = '1';
    }
    const self = this;
    this.auth.sendPost(url, data).subscribe((data) => {
      if (data.success == true) {
        self.btn_go = true;
        this.wayRequested = true;
        this.map.getWay({ lt: currentLocation.latLng.lat, lg: currentLocation.latLng.lng }).subscribe((response) => {
          this.wayRequested = false;
          this.data.orders.next(response.orders)
        })
        if (data.result == 'stop') {
          self.btn_go = false;
        }
      }
    });
  }

  public scanSearch() {
    const self = this;
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
      });
    } else {
      self.loader = false;
    }
    this.scan_process = false;
    this.find_order = false;
  }

  public findOrder() {
    const self = this;
    if (this.auth.getScanMode() == 'scan') {
      this.scanView = !this.scanView;
      this.find_order = true;
      setTimeout(function () {
        self.sInput.nativeElement.focus();
      }, 500);
      return false;
    }

    this.bs.scan().then((data) => {
      self.courier.findOrder(data.text).subscribe((res) => {
        if (res.success == 'true') {
          self.selectOrder(res.order_id);
        } else {
          self.auth.showError(2);
        }
      });
    });
  }

  // Завершение рабочего дня курьера
  public endWork() {
    this.courier.endWork().subscribe((data: { success: boolean }) => {
      if (data.success) {
        this.isWorkEnded = true;
        this.sys.presentToast('Рабочий день завершен',
          'success');
      }
    },
      error => {
        this.sys.presentToast(`Ошибка: ${error.message}`, 'danger');
      });

  }
  doRefresh() {
    this.data.getApiData();

  }

  public segmentChanged(event: any) {
    const ids = [Number(event.target.value)];
    if (event.target.value == '5') {
      ids.push(6);
    }
    this.segment = ids;
    this.prepareOrdersList(ids);
  }

  public onSearchChange(event: any) {
    this.searchString = event.target.value;
    this.prepareOrdersList(this.segment);

  }
  public prepareOrdersList(ids = this.segment) {
    this.orders_c = this.orders_c.pipe(
      map(
        orders => orders && orders.filter(order => ids.includes(Number(order.status_id)))
          .filter(
            order => order.client_address.toLowerCase().includes(this.searchString.toLowerCase()) || order.client_fio.toLowerCase().includes(this.searchString.toLowerCase()) ||
              (order.client_id as string).toLowerCase().includes(this.searchString.toLowerCase())
          )
          .slice(this.slicer)
      ),
      map(
        (orders) => { orders.forEach((order) => { order.show = false; }); this.orders = orders; return orders; }
      )
    );

  }
  public howSlice(): number {
    return (this.settings.rules.typeRoute === 'standart' ? 0 : 1);
  }

  async popoverHelp(ev: any) {
    const popover = await this.popoverController.create({
      component: HelpComponent,
      event: ev,
      translucent: true,
      cssClass: 'help'
    });
    return popover;
  }

  public showHelp() {
    this.introService.intro
      .setOption('prevLabel', 'Назад')
      .setOption('nextLabel', 'Далее')
      .setOption('skipLabel', 'Пропустить')
      .setOption('doneLabel', 'Завершить');
    this.introService.start(null, '2');

  }

  public showRoute(order: Order) {
    this.map.showRoute(order);
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
        orderId
      }
    });
    return popover;
  }

  public async note(ev: any, orderId: string) {
    const popover = await this.popoverNote(ev, orderId);
    popover.present();
  }

  // Звонок получателю заказа
  public phoneClick(action: string, order: Order) {
    this.order = order;
    this.orderPhones = this.parsePhone(order.client_phone);
    const courierPhone = this.parsePhone(order.courier_phone)[0];
    if (this.orderPhones.length == 1) {
      this.selectedPhone = this.orderPhones[0];
    }

    switch (action) {
      case 'init':
        this.callWindow = !this.callWindow;
        break;
      case 'phone':
        this.CL.callNumber(this.selectedPhone, false).then(() => { });
        this.callWindow = false;
        this.order = undefined;
        break;
      case 'operator':
        if (this.network.type == 'none') {
          this.phoneClick('phone', order);
          return false;
        }
        if (this.selectedPhone && courierPhone) {
          const url = 'orders';
          const data = {
            action: 'send_phone',
            client_number: this.selectedPhone,
            cur_number: courierPhone,
          };
          this.auth.sendPost(url, data).subscribe((resp) => {
            console.log('call_subs', resp);
          });
          this.auth.showError(9);
          this.callWindow = false;
        }
        this.order = undefined;
        break;
    }
  }

  // Парсинг номера телефона из строки с лишним мусором
  public parsePhone(phone: string): Array<string> {
    return this.orderService.parsePhone(phone)
  }

  // Жонглирование '8' / '+7'
  private normalizePhoneNumber(phone: string): string {
    if (phone[0] !== '8' && phone[0] !== '7' && phone.length !== 11) {
      phone = `8${phone}`;
    }
    if (phone.length == 7 || phone.length == 10) {
      phone = `8${phone}`;
    }
    if (phone[0] !== '8' && phone.length == 11) {
      phone = `8${phone.slice(1)}`;
    }
    return phone;
  }


  public vibr($event?: any) {
    this.vbr.vibrate(10);
    console.log('sys:: *Вибирация*');
  }

  public getScanData() {
    this.bs.scan().then((data) => {
      console.log(`sys:: данные штрихкода: ${data.text}`);
      const url = `${this.sys.proxy}https://mobile.postsrvs.ru/getScanPVZ.php`;
      const reqData = {
        type: 'scanOrder',
        uuid: this.auth.getUuid(),
        courieriId: this.auth.getUserId(),
        clientId: data.text
      };
      this.http.post(url, reqData).subscribe((resp: ScanPVZResponse) => {
        let color = 'success';
        if (!resp.success) {
          color = 'danger';
        }
        this.sys.presentToast(resp.dateTime, 'success', resp.message);
      });

    });
  }

  // Возвращает заметку к заказу
  // @orderId - ид заказа
  public orderNote(orderId: string) {
    return localStorage.getItem(orderId);
  }

  //Проверяет, наступил ли дедлайн (час до таргетного времени)
  public isWarnTime(order: Order): boolean {
    let warnTime: boolean;
    if (order.datetime_to !== null) {
      const hour = 3600000;
      const deadline = new Date(order.datetime_to);
      const now = new Date();
      warnTime = (new Date(deadline.getTime() - hour) <= now);
    } else {
      warnTime = false;
    }
    return warnTime && (order.status_id == 1);
  }

  //проверяет необходимость подсветки заказа красным
  public isOverdueTime(order: Order) {
    const isOverTime: boolean = (new Date(order.datetime_to).getTime() < new Date().getTime());
    return ((order.overdue == '1' || order.required == true || isOverTime) && order.status_id == 1)
  }
}
