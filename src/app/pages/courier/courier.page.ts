import { Component, OnInit, Injectable, ViewChildren, ViewChild, QueryList, ElementRef, Renderer2 } from '@angular/core';
import { CourierService } from '../../services/courier.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { StateService } from '../../services/state.service';
import { Subject } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { moveItemInArray, CdkDragDrop, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { OTTabPipePipe } from '../../pipes/o-t-tab-pipe.pipe';
import { Vibration } from '@ionic-native/vibration/ngx';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { SettingsService } from '../../services/settings.service';
import { SysService } from '../../services/sys.service';

@Component({
  selector: 'app-courier',
  templateUrl: './courier.page.html',
  styleUrls: ['./courier.page.scss'],
})
export class CourierPage implements OnInit {
  @ViewChildren(CdkDrag) DragItems: QueryList<CdkDrag>;
  @ViewChild(CdkDropList) Drop_L: CdkDropList;
  @ViewChild('sInput') public sInput: ElementRef;

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
  public notification = null;
  public dragStarted: boolean = false;
  public subBtnCond: boolean = true;
  public scanView: boolean = false;
  public scanInput;
  public scan_process = false;
  public find_order: boolean = false;
  public isWorkEnded: boolean = false;

  constructor(public courier: CourierService,
    private router: Router,
    public state$: StateService,
    public auth: AuthService,
    private bs: BarcodeScanner,
    private vbr: Vibration,
    private settings: SettingsService,
    private sys: SysService
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
        if (!this.state$.confirmed) this.subBtnCond = true;;
        break;
      case 'hand':
        this.subBtnCond = false;
        break;
    }
  }

  ngAfterViewChecked() { }

  ngOnInit() {
    this.settings.checkout = !!(this.settings.rules.storeCheckMode - 0);
    if (!this.settings.checkout) {
      this.auth.checkState = 'checkedOut'
    } else {
      this.auth.checkState = 'checked' + localStorage.check
    }
    if (this.settings.rules.appMode == 'fullHand') {
      this.state$.manual_route = true
    }
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
        self.orders.forEach(order => {
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
          self.orders.forEach(order => {
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

  public ordersListChanged(orders) {
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
    this.local_stop$.next();
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


  public getStatus(order) {
    return this.courier.getStatus(order);
  }

  public selectOrder(id) {
    if (this.orders == null) {
      this.courier.getOrders().subscribe((data) => {
        this.orders = data.orders;
        for (var i = 0; i < this.orders.length; i++) {
          if (this.orders[i].id == id) {
            if (this.orders[i].confirm == '0' && this.subBtnCond) {
              return false;
            }
          }
        }
      })
    } else {


      for (var i = 0; i < this.orders.length; i++) {
        if (this.orders[i].id == id) {
          if (this.orders[i].confirm == '0' && this.subBtnCond) {
            return false;
          }
        }
      }
    }
    this.router.navigate(['/order', id]);
  }

  public tabSelect(tab) {
    this.selectedTab = tab;
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  public getCondition(status) {
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

  public count_orders() {
    let g_done = 0;
    let g_process = 0;
    let g_fail = 0;

    for (let i = 0; i < this.courier.ordersInfo.length; i++) {
      switch (String(this.courier.ordersInfo[i].status_id)) {
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


  public sendStartRoute(cid, start, stop) {
    const url = "geo/route_start.php";
    let data = {
      'cid': cid,
      'lt': this.state$.position.getValue().lt,
      'lg': this.state$.position.getValue().lg
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
    var self = this;
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

}
