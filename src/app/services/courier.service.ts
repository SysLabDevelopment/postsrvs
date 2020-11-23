import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Network } from '@ionic-native/network/ngx';
import { CacheService } from 'ionic-cache';
import { EMPTY, from, Observable, Subject } from 'rxjs';
import { catchError, retry, takeUntil, tap } from 'rxjs/operators';
import { Order } from '../interfaces/order';
import { PostData } from '../interfaces/post-data';
import { Response } from '../interfaces/response';
import { AuthService } from '../services/auth.service';
import { StateService } from '../services/state.service';
import { SysService } from '../services/sys.service';
import { SettingsService } from './settings.service';
import { SysCourierService } from './sys/courier.service';
import { DataService } from './sys/data.service';
import { LoggerService } from './sys/logger.service';
import { MapService } from './sys/map.service';
declare let ymaps: any;
@Injectable({
  providedIn: 'root'
})
export class CourierService {
  public ordersInfo: Array<any> = [];
  public ordersShortData: Subject<any> = new Subject();
  public sortOrders = {
    g_done: 0,
    g_process: 0,
    g_fail: 0,
    all: 0
  };

  constructor(
    private http: HttpClient,
    private state$: StateService,
    private auth: AuthService,
    private settings: SettingsService,
    public sys: SysService,
    private cache: CacheService,
    private firebase: FirebaseX,
    private sysCourier: SysCourierService,
    private logger: LoggerService,
    private map: MapService,
    private data: DataService,
    private network: Network,
  ) {
    // при выходе из приложения возвращаем начальное состояние
    var self = this;
    this.state$.interval_1ss.pipe(takeUntil(this.state$.stop$)).subscribe(() => {
      const old_val = self.state$.load_lvl.getValue();
      self.state$.load_lvl.next(old_val + 1.7);
    });

    var self = this;
    // обновляем заказы по запросу
    this.state$.updateWayInfo.pipe(takeUntil(this.state$.stop$)).subscribe(() => {
      self.updateOrders();
    });

    this.state$.g_state.subscribe((state) => {
      if (state == 'login') {
        self.initOrders();
        self.updateOrders();
      }
    });

    this.state$.init_params_state.subscribe((state) => {
      if (state == 'init_geo_done') {
        self.initOrders();
      }
    });

    this.state$.status_changed.pipe(takeUntil(this.state$.stop$)).subscribe(() => {
      self.state$.state.next('init');
    });
  }

  public updateOrders() {
    this.state$.state.next('init');
  }

  ngOnDestroy() {

  }

  ngOnInit() {

  }


  // Собираем необходимую инфу по заказам
  public initOrders() {
    const self = this;
    // проверяем наличие координат перед запуском
    if (this.state$.position.getValue() == null) {
      return false;
    }
    // Запускаем инициализацию
    // Костыль для мгновенного отображения листина в обход ожидания статусов по апи
    this.initStatuses();
    if (!this.state$.courier_init) {
      this.state$.state.pipe(takeUntil(this.state$.stop$)).subscribe((state) => {
        console.log('sys:: state', JSON.stringify(state));
        switch (state) {
          case 'init':
            if (this.auth.getDefaultRouteBuilding() == '1') {
              console.log('sys:: дефолтное построение маршрута ', this.auth.getDefaultRouteBuilding());
              self.getWay();
            } else {
              self.state$.state.next('way_init');
            }

            break;
          case 'way_init':
            self.getOrders().subscribe((data: Response) => {
              console.log('sys:: Данные о заказах', data);
              if ((data.success == 'true') && (data.reason !== 'нет заказов')) {
                self.state$.orders.next(data.orders);
                self.state$.orders_data = data.orders;
                self.state$.state.next('orders_init');
                this.state$.confirmed = true;
                data.orders.forEach((order) => {
                  if (order.confirm == '0') {
                    self.state$.confirmed = false;
                  }
                });
              } else if (data.reason == 'empty' || data.reason == 'нет заказов') {
                console.log('Массив данных о заказах пуст');
                const rmpt: [] = [];
                self.state$.orders.next(rmpt);
                self.state$.orders_data = rmpt;
                self.state$.state.next('orders_init');
                this.state$.confirmed = true;
              }
            },
              (error) => {
                console.error('sys:: Ошибка получения данных о заказах!');
              });
            break;
        }
      });
      this.state$.courier_init = true;
    }

    this.state$.state.next('init');
    this.checkWay();
  }

  // следит за изменениями заказов
  public checkWay() {
    const self = this;
    if (!this.state$.check_state) {
      this.state$.interval_3.pipe(takeUntil(this.state$.stop$)).subscribe(() => {
        self.state$.load_lvl.next(0);
        self.state$.state.next('init');
      });
      this.state$.check_state = true;
    }
  }


  /* Запрос списка заказов курьера
    В зависимости от режима либо запоминаем данные в сервисе,
    либо сравниваем с маршрутом созданным курьером(manualWay)
  */
  public getWay() {
    console.log('sys::getWay()');
    const routingMode = this.auth.getRoutingMode();
    let mode: string;
    if (routingMode !== 'standart') {
      mode = '1';
    } else {
      mode = '0';
    }
    const url = 'orders',
      data = {
        action: 'getWay',
        lt: this.state$.position.getValue().lt,
        lg: this.state$.position.getValue().lg,
        auto: mode,
        mode: ''
      },
      app_mode = this.auth.getMode();
    if ((app_mode == 'fullHand' || app_mode == 'hand') || this.state$.manual_route) {
      data.mode = 'manual';
    } else {
      data.mode = 'auto';
    }
    const resp: Subject<any> = new Subject(),
      self = this;

    this.auth.sendPost(url, data).subscribe((orders: any) => {
      if (orders.success == 'true') {
        self.state$.manual_route = orders.mode == 'manual';
        self.state$.way.next(orders.orders);
        self.state$.state.next('way_init');
      } else if (orders.reason == 'empty') {
        self.state$.manual_route = false;
        const emt: [] = [];
        self.state$.way.next(emt);
        self.state$.state.next('way_init');
      }
    });
  }


  public getOrders(): Observable<any> {
    const url = 'orders';
    let ids = [],
      way = this.ordersInfo;
    this.ordersShortData.subscribe((data) => {
      way = data;
    });

    if (way !== undefined) {
      for (let i = 0; i < way.length; i++) {
        ids.push(way[i].id);
      }
    } else {
      ids = [];
    }

    const routingAuto = this.auth.getRoutingMode();
    let auto: string;
    if (routingAuto !== 'standart') {
      auto = '1';
    } else {
      auto = '0';
    }


    const data = {
      action: 'getOrders',
      orders_id: ids
    };

    return this.auth.sendPost(url, data);
  }


  // Запрос основных данных курьера
  // @sync_id - ид курьера
  // @more - флаг необходимости доп данных (краткая инфа о заказах для листинга)
  // @CL - код филлиала
  public getBalance(sync_id: number, more = 0) {
    this.firebase.setUserId(String(sync_id));
    const CL = this.settings.get('cl'),
      url = `${this.sys.proxy}https://terminal.vestovoy.ru/info/stat.php?cid=${sync_id}&more=${more}&CL=${CL}`;
    return this.http.get(url);
  }

  public getStatus(order: Order) {
    if (order.status_id == 1) {
      return 'Доставляется';
    }
    const statuses = this.state$.statuses.getValue();
    for (let i = 0; i < statuses.length; i++) {
      const status = statuses[i];
      if (status.id == order.status_id) {
        return status.status;
      }
    }
  }


  public changeStatus(status = '', id = '', comment = '', reason = '', goods = '', payment = '', new_plan_date = '', check = '', recognizedCheckData: string = null, cardNums?: string, waitingMinutes?: number) {
    const url = 'orders',
      draw = localStorage.getItem('drawImg');
    const data = {
      action: 'changedStatus',
      status,
      id,
      comment,
      reason,
      goods,
      payment,
      new_plam_date: new_plan_date,
      check,
      recognizedCheckData,
      sign: '',
      cardNums,
      waitingMinutes
    };
    if (draw) data.sign = draw;
    if (this.network.type === 'none') {
      this.cache.getItem<Array<{ url: string, data: PostData }>>('syncRequests').then((req) => {
        const requests = req ?? [];
        requests.push({ url, data });
        this.cache.saveItem('syncRequests', requests, 'delayedCalls');
      });
      return from([{ success: 'true' }]);
    }
    const iD = Number(this.auth.getUserId());
    if (this.settings.rules.appMode.includes('auto')) {
      this.sysCourier.sendStartRoute(iD, '1').then((req) => {
        req.subscribe((resp) => {
          if (resp.success) {
            this.logger.debug('Стукнуто на start_route');
            this.map.getMyLocation().then((location) => {
              resp.success && this.map.getWay({ lt: location.latLng.lat, lg: location.latLng.lng }).subscribe((orders) => {
                this.data.orders.next(orders);
              });
            });
          } else {
            this.sys.presentToast('Попробуйте еще раз', 'danger', 'Ошибка');
          }
        });
      });
    }
    return this.auth.sendPost(url, data).pipe(retry(5), tap((resp) => {
      if (!resp.success) {
        this.sys.presentToast('Попробуйте еще раз', 'danger', 'Ошибка');
      }
    }), catchError(() => EMPTY));
  }


  /**
   * Ищет заказ в милевском(через 4 круга ада)
   * Возвращает adress_code
   * проверяем, если заказ есть в списке заказов курьера - возыращаем его
   * если нет - false
   * @param code //штрих-код
   */
  public findOrder(code: string) {
    const url = 'orders',
      data = {
        action: 'findOrder',
        code
      },
      resp: Subject<any> = new Subject(),
      orders = this.state$.orders_data;

    this.auth.sendPost(url, data).subscribe((od) => {
      if (od.success == 'true') {
        let n_f = true;
        const orderId = od.order_id;

        for (let i = 0; i < orders.length; i++) {
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

  public sumbitOrder(orderId: string) {
    const url = 'orders',
      data = {
        action: 'submitOrder',
        orderId
      };
    console.log('submit_order_data', data);
    const self = this,
      ret: Subject<any> = new Subject<any>();

    this.auth.sendPost(url, data).subscribe((resp: any) => {
      console.log('submit_order_response', resp);
      if (resp.success == 'true') {
        self.state$.updateWayInfo.next(null);
        ret.next(true);
      } else {
        self.auth.showError(6);
        ret.next(false);
      }
    });

    return ret;
  }


  public count_orders(orders: Order[]) {
    this.logger.log('Подсчет заказов по статусам');
    let g_done = 0,
      g_process = 0,
      g_fail = 0;
    const all = orders.length;
    for (let i = 0; i < orders.length; i += 1) {
      switch (String(orders[i].status_id)) {
        case '4':
          g_fail += 1;
          break;
        case '5':
          g_done += 1;
          break;
        case '6':
          g_done += 1;
          break;
        case '1':
          g_process += 1;
          break;
      }
    }
    this.sortOrders = {
      g_done,
      g_process,
      g_fail,
      all
    };
  }
  public initStatuses() {
    const statuses = [{ id: 4, status: 'Не доставлено' }, { id: 5, status: 'Доставлено' }, { id: 6, status: 'Частично доставлено' }];
    this.state$.statuses.next(statuses);
    this.state$.s_state.next('status_init');
  }

  // Завершение рабочего дня курьера
  public endWork() {
    const url = `${this.sys.proxy}https://mobile.postsrvs.ru/admin/ajax/end_work.php`,
      headers = new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
      }),
      data = {
        token: 'l;sdfjkhglsoapl[',
        cId: this.auth.getUserId()
      };

    return this.http.post(url, data, { headers });
  }
}
