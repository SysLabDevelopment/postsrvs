import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebIntent } from '@ionic-native/web-intent/ngx';
import { BehaviorSubject, interval, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Order } from '../interfaces/order';
import { Response } from '../interfaces/response';
import { SysService } from './sys.service';

@Injectable({
  providedIn: 'root'
})

export class StateService {

  // переменные состояний

  //GLOBAL
  public login_state: BehaviorSubject<any> = new BehaviorSubject('not_login');
  public stop$: Subject<any> = new Subject(); // останаливает все подписки;
  /* Режим работы с маршрутом
      auto    - маршрут с бека
      manual  - курьер рисует сам
  */
  public manual_route: boolean = false;
  public old_way: any = null;
  public confirmed: boolean = false;
  public scan_mode: boolean = false;
  //INTERVALS
  public interval_1ss: Observable<any> = interval(1000);
  public interval_1s: Observable<any> = interval(2000);
  public interval_1: Observable<any> = interval(3000);
  public interval_3m: Observable<any> = interval(3000);
  public interval_3: Observable<any> = interval(4000);
  public interval_2s: Observable<any> = interval(15000);
  public interval_30: Observable<any> = interval(30000);
  public interval_1m: Observable<any> = interval(60000);

  //MAP

  public position: BehaviorSubject<any> = new BehaviorSubject(null);
  public points: BehaviorSubject<any> = new BehaviorSubject(null);
  public l_route: unknown | null;
  public map_state: BehaviorSubject<any> = new BehaviorSubject(null);
  public route_state: BehaviorSubject<any> = new BehaviorSubject('not_init');
  public change_state: BehaviorSubject<any> = new BehaviorSubject('not_init');
  public map_event: BehaviorSubject<any> = new BehaviorSubject(null);
  public point_check: BehaviorSubject<any> = new BehaviorSubject('not_init');
  public geo_check: BehaviorSubject<any> = new BehaviorSubject('not_init');
  public init_params_state: BehaviorSubject<any> = new BehaviorSubject('not_init');
  public init_map_state: boolean = false;
  public check_changes_state: BehaviorSubject<any> = new BehaviorSubject('not_init');
  public linkPoints: BehaviorSubject<any> = new BehaviorSubject('not_init');
  public link_init: boolean = false;
  public map_state_watch: boolean = false;
  public disLink: boolean = true;

  //COURIER

  public orders: BehaviorSubject<any> = new BehaviorSubject(null);
  public statuses: BehaviorSubject<any> = new BehaviorSubject(null);
  public way: BehaviorSubject<any> = new BehaviorSubject(null);


  public o_status: BehaviorSubject<any> = new BehaviorSubject(null);
  public state: BehaviorSubject<any> = new BehaviorSubject(null);
  public s_state: BehaviorSubject<any> = new BehaviorSubject(null);

  public $stop: Subject<any> = new Subject();

  public check_state: boolean = false;

  public g_state: BehaviorSubject<any> = new BehaviorSubject('unLogin');

  public courier_init: boolean = false;

  public orders_page_check: boolean = false;

  public status_changed: Subject<any> = new Subject();

  public sc_flag: boolean = false;

  public page_orders_check: boolean = false;

  public client_states: BehaviorSubject<any> = new BehaviorSubject(null);
  //STATUS-BAR
  public load_lvl: BehaviorSubject<any> = new BehaviorSubject(0);

  public c_update_content_f: boolean = false;

  //BALANCE
  public balance_check: boolean = false;
  // BROADCAST
  //обновляем все данные с сервера
  public updateWayInfo: Subject<any> = new Subject();
  // DATA
  public orders_data: Order[] = null;
  public statuses_data: unknown = null;
  public coords: any;
  public filial: string = '';
  public orderCoordinates(): Observable<any> {
    return this.coords;
  };


  constructor(
    private wi: WebIntent,
    private http: HttpClient,
    private sys: SysService
  ) {
    var self = this;
    /* Подписываемся на все сабжекты поставляющие данные и запоминаем в переменных
        для отрисовки на страницах (дабы убрать подписки со страниц)
    */

    this.orders.pipe(takeUntil(this.stop$)).subscribe((od) => {
      if (od != null) {
        self.orders_data = od;
      }
    });
    this.statuses.pipe(takeUntil(this.stop$)).subscribe((st) => {
      if (st != null) {
        self.statuses_data = st;
      }
    });
  }

  //при выходе возвращаем приложение в иходное состояние
  public logout() {
    this.stop$.next();
    // map
    this.position.next(null);
    this.points.next(null);
    this.l_route = null;
    this.map_state.next(null);
    this.route_state.next('not_init');
    this.change_state.next('not_init');
    this.map_event.next('not_init');
    this.point_check.next('not_init');
    this.geo_check.next('not_init');
    this.init_params_state.next('not_init');
    this.check_changes_state.next('not_init');
    this.linkPoints.next('not_init');
    this.link_init = false;
    this.map_state_watch = false;
    this.init_map_state = false;

    //courier
    this.orders.next(null);
    this.orders_data = null;
    this.statuses.next(null);
    this.way.next(null);

    this.o_status.next(null);
    this.state.next(null);
    this.s_state.next(null);
    this.check_state = false;
    this.courier_init = false;
    this.orders_page_check = false;
    this.sc_flag = false;
    this.page_orders_check = false;
    this.balance_check = false;
    this.c_update_content_f = false;
    this.load_lvl.next(0);
    this.old_way = null;
  }

  //Открыть маршрут в навигаторе
  public intentStart(coordinates: string[]) {
    console.log('sys:: coordinates', coordinates);
    const options = {
      action: this.wi.ACTION_VIEW,
      url: 'yandexnavi://build_route_on_map?lat_to=' + coordinates[0] + '&lon_to=' + coordinates[1] + '&client=241',
      package: 'ru.yandex.yandexnavi'
    }
    this.sys.getYandexnaviSignature(coordinates[0], coordinates[1]).subscribe((resp: Response) => {
      const signature = resp.signature;
      options.url += `&signature=${signature}`;
      this.wi.startActivity(options).then((data) => {
        console.log('sys:: yandexnavi запущен', data);
      });
    })
  }

  //adress - строка с адресом
  getCoordinates(adress: string) {

    return this.http.get('https://geocode-maps.yandex.ru/1.x/?apikey=4949ca72-35d9-48b0-892d-72d307850c87&format=json&geocode=' + adress)

  }




}
