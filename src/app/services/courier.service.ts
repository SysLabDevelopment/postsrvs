import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { StateService } from '../services/state.service';
import { forkJoin, interval, BehaviorSubject, Subject, Observable } from 'rxjs';
import { takeUntil, merge, take } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { OrderPage } from '../pages/order/order.page';
import { MapService } from '../services/map.service';

declare var ymaps: any;
@Injectable({
  providedIn: 'root'
})
export class CourierService {
  barcodeScannerOptions: BarcodeScannerOptions;
  public ordersInfo: any;
  public ordersShortData: Subject<any> = new Subject();

  constructor(private http: HttpClient,
    private router: Router,
    private plt: Platform,
    private state$: StateService,
    private auth: AuthService,
    private bs: BarcodeScanner, private map: MapService,
  ) {
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
    //при выходе из приложения возвращаем начальное состояние
    var self = this;
    this.state$.interval_1ss.pipe(takeUntil(this.state$.stop$)).subscribe(() => {
      let old_val = self.state$.load_lvl.getValue();
      self.state$.load_lvl.next(old_val + 1.7);
    });

    var self = this;
    this.state$.stop$.subscribe(() => {

      self.logout();
    });
    //обновляем заказы по запросу
    this.state$.updateWayInfo.pipe(takeUntil(this.state$.stop$)).subscribe(() => {
      self.updateOrders();
    });

    this.state$.g_state.subscribe((state) => {
      if (state == 'login') {
        self.initOrders();
        self.updateOrders();
      }
    })

    var check_state$ = this.state$.init_params_state.subscribe((state) => {
      if (state == 'init_geo_done') {

        self.initOrders();
      }
    })

    this.state$.status_changed.pipe(takeUntil(this.state$.stop$)).subscribe(() => {
      self.state$.state.next('init');
    })
  }
  /**
   * Меняем на серере режим маршрута
   */
  public changeRouteMode(mode) {
    if (this.state$.way.getValue() !== null) {
      let url = 'orders';
      const routeId = this.state$.way.getValue()[0].route;



      let data = { 'action': 'changeRouteMode', 'routeId': this.state$.way.getValue()[0].route };

      if (mode == 'auto' || mode == 'manual') {
        data['mode'] = mode;
      } else {
        this.auth.showError(5);
        return false;
      }

      let self = this;
      this.auth.sendPost(url, data).subscribe((resp) => {
        if (resp.success == 'true') {
          self.state$.manual_route = resp.mode == 'manual' ? true : false;
          self.state$.updateWayInfo.next();
        } else {
          self.auth.showError(5);
        }
      });
    }

  }

  public updateOrders() {

    this.state$.state.next('init');
  }

  ngOnDestroy() {

  }

  ngOnInit() {

  }


  //Собираем необходимую инфу по заказам
  public initOrders() {
    var self = this;

    //проверяем наличие координат перед запуском
    if (this.state$.position.getValue() == null) {

      return false;
    }

    //Запускаем инициализацию
    this.getReasons().subscribe((data: any) => {
      if (data.success == 'true') {
        self.state$.reasons = data.reasons;

      }
    });

    //Костыль для мгновенного отображения листина в обход ожидания статусов по апи
    const statuses = [{ "id": 4, "status": "Не доставлено" }, { "id": 5, "status": "Доставлено" }, { "id": 6, "status": "Частично доставлено" }];
    self.state$.statuses.next(statuses);
    self.state$.s_state.next('status_init');



    if (!this.state$.courier_init) {
      this.state$.state.pipe(takeUntil(this.state$.stop$)).subscribe((state) => {
        console.log('sys:: state', JSON.stringify(state));
        switch (state) {
          case 'init':
            if (this.auth.getDefaultRouteBuilding() == 'true') {
              console.log('sys:: дефолтное построение маршрута ', this.auth.getDefaultRouteBuilding());
              self.getWay();
            } else {
              self.state$.state.next('way_init');
            }

            break;
          case 'way_init':
            self.getOrders().subscribe((data: any) => {
              console.log('sys:: Данные о заказах', data);
              if ((data.success == 'true') && (data.reason !== 'нет заказов')) {
                self.state$.orders.next(data.orders);
                self.state$.orders_data = data.orders;
                if (this.auth.getDefaultRouteBuilding() !== 'true') {
                  self.map.pointsRender();
                }
                self.state$.state.next('orders_init');
                this.state$.confirmed = true;
                data.orders.forEach(order => {
                  if (order.confirm == '0') {
                    self.state$.confirmed = false;
                  }
                });
              } else if (data.reason == 'empty' || data.reason == 'нет заказов') {
                console.log('Массив данных о заказах пуст');
                let rmpt = [];
                self.state$.orders.next(rmpt);
                self.state$.orders_data = rmpt;
                self.state$.state.next('orders_init');
                this.state$.confirmed = true;
              }
            },
              (error) => {
                console.error('sys:: Ошибка получения данных о заказах!')
              });
            break;
        }
      });
      this.state$.courier_init = true;
    }

    this.state$.state.next('init');
    this.checkWay();
  }

  //следит за изменениями заказов
  public checkWay() {
    var self = this;
    if (!this.state$.check_state) {


      this.state$.interval_1m.pipe(takeUntil(this.state$.stop$)).subscribe(() => {

        self.state$.load_lvl.next(0);
        self.state$.state.next('init');
      });
      this.state$.check_state = true;
    }
  }


  /*Запрос списка заказов курьера
    В зависимости от режима либо запоминаем данные в сервисе,
    либо сравниваем с маршрутом созданным курьером(manualWay)
  */
  public getWay() {
    console.log('sys::getWay()');
    let mode = this.auth.getRoutingMode();
    if (mode) {
      mode = '1';
    } else {
      mode = '0'
    }
    let url = 'orders';
    let data = {
      'action': 'getWay',
      'lt': this.state$.position.getValue().lt,
      'lg': this.state$.position.getValue().lg,
      'auto': mode
    }
    let app_mode = this.auth.getMode();
    if ((app_mode == 'manual' || app_mode == 'manual_wo') || this.state$.manual_route) {
      data['mode'] = "manual";
    } else {
      data['mode'] = "auto";
    }
    let resp: Subject<any> = new Subject();
    let self = this;

    this.auth.sendPost(url, data).subscribe((orders: any) => {
      if (orders.success == 'true') {
        self.state$.manual_route = orders.mode == "manual" ? true : false;
        self.state$.way.next(orders.orders);
        self.state$.state.next('way_init');
      } else if (orders.reason == 'empty') {
        self.state$.manual_route = false;
        let emt = [];
        self.state$.way.next(emt);
        self.state$.state.next('way_init');
      }
    });
  }



  public getOrders(): Observable<any> {
    const url = "orders";

    let ids = [];



    let way = this.ordersInfo;
    this.ordersShortData.subscribe((data) => {
      way = data;
    })

    if (way !== undefined) {
      for (let i = 0; i < way.length; i++) {
        ids.push(way[i].id);

      }
    } else {
      ids = [];
    }




    let data = {
      'action': 'getOrders',
      'orders_id': ids
    }

    return this.auth.sendPost(url, data);
  }

  public getStatuses(): Observable<any> {
    var url = "orders";
    var data = { 'action': 'getStatuses' };

    return this.auth.sendPost(url, data);
  }

  public getBalance(sync_id) {
    var id = localStorage.getItem('cId');
    var url = "https://terminal.vestovoy.ru/info/stat.php?cid=" + sync_id + '&more=1';

    return this.http.get(url);
  }

  public getReasons() {
    var url = "orders";
    var data = { 'action': 'getReasons' };

    return this.auth.sendPost(url, data);
  }

  public getStatus(order) {

    if (order.status_id == 1) {
      return 'Доставляется';
    } else {
      var statuses = this.state$.statuses.getValue();

      for (var i = 0; i < statuses.length; i++) {
        var status = statuses[i];

        if (status.id == order.status_id) {
          return status.status;
        }
      }
    }
  }


  public changeStatus(status = '', id = '', comment = '', reason = '', goods = '', payment = '') {
    var url = 'orders';
    var draw = localStorage.getItem('drawImg');
    var data = {
      'action': 'changedStatus',
      'status': status,
      'id': id,
      'comment': comment,
      'reason': reason,
      'goods': goods,
      'payment': payment
    };
    if (draw) data['sign'] = draw;

    return this.auth.sendPost(url, data);
  }

  public logout() {

  }

  //отправляет запрос на оплату
  public sendPay(order, isDone = true, quants = null) {
    if (isDone) {

    }
  }

  /**
   * Ищет заказ в милевском(через 4 круга ада)
   * Возвращает adress_code
   * проверяем, если заказ есть в списке заказов курьера - возыращаем его
   * если нет - false
   * @param code //штрих-код
   */
  public findOrder(code) {
    let self = this;
    var url = 'orders';
    var data = {
      'action': 'findOrder',
      'code': code
    }
    let resp: Subject<any> = new Subject();
    let orders = this.state$.orders_data;

    this.auth.sendPost(url, data).subscribe((od) => {
      if (od.success == 'true') {
        let n_f = true;
        let orderId = od.order_id;

        for (var i = 0; i < orders.length; i++) {
          if (orders[i].id == orderId) {
            n_f = false;
          }
        }
        if (n_f) {
          resp.next(false);
        } else {
          resp.next(od);
        }
      } else {
        resp.next(od);
      }
    });
    return resp;
  }

  public sumbitOrder(orderId) {
    let url = 'orders';
    let data = {
      'action': 'submitOrder',
      'orderId': orderId
    }
    console.log('submit_order_data', data);
    let self = this;
    let ret: Subject<any> = new Subject<any>();

    this.auth.sendPost(url, data).subscribe((resp: any) => {
      console.log('submit_order_response', resp);
      if (resp.success == 'true') {
        self.state$.updateWayInfo.next();
        ret.next(true);
      } else {
        self.auth.showError(6);
        ret.next(false);
      }
    });

    return ret;
  }


}