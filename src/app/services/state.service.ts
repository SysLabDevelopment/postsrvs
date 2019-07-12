import { Injectable } from '@angular/core';
import { Subject, Observable, interval, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StateService {
// переменные состояний 

//GLOBAL

  public stop$:Subject<any> = new Subject(); // останаливает все подписки;

//INTERVALS

  public interval_3:Observable<any>  = interval(4000);
  public interval_1:Observable<any>  = interval(3000);
  public interval_30:Observable<any> = interval(30000);
  public interval_1s:Observable<any> = interval(2000);
  public interval_2s:Observable<any> = interval(2000);
  public interval_3m:Observable<any> = interval(3000);
  public interval_1m:Observable<any> = interval(60000);
  public interval_1ss:Observable<any> = interval(1000);

//MAP

  public position:BehaviorSubject<any> = new BehaviorSubject(null);
  public points:BehaviorSubject<any> = new BehaviorSubject(null);
  public l_route;
  public l_map;
  public duration;
  public map_state:BehaviorSubject<any> = new BehaviorSubject(null);
  public route_state:BehaviorSubject<any> = new BehaviorSubject('not_init');
  public change_state:BehaviorSubject<any> = new BehaviorSubject('not_init');
  public map_event:BehaviorSubject<any> = new BehaviorSubject(null);
  public point_check:BehaviorSubject<any> = new BehaviorSubject('not_init');
  public geo_check:BehaviorSubject<any> = new BehaviorSubject('not_init');
  public init_params_state:BehaviorSubject<any> = new BehaviorSubject('not_init');
  public init_map_state:boolean = false;
  public check_changes_state:BehaviorSubject<any> = new BehaviorSubject('not_init');
  public linkPoints:BehaviorSubject<any> = new BehaviorSubject('not_init');
  public link_init:boolean = false;
  public map_state_watch:boolean = false;
  public link;
  public disLink:boolean = true;

//COURIER

  public orders:BehaviorSubject<any> = new BehaviorSubject(null);
  public statuses:BehaviorSubject<any> = new BehaviorSubject(null);
  public way:BehaviorSubject<any> = new BehaviorSubject(null);

  public reasons:any = null;

  public o_status:BehaviorSubject<any> = new BehaviorSubject(null);
  public state:BehaviorSubject<any> = new BehaviorSubject(null);
  public s_state:BehaviorSubject<any> = new BehaviorSubject(null);
 
  public  $stop:Subject<any> = new Subject();

  public check_state:boolean = false;

  public g_state:BehaviorSubject<any> = new BehaviorSubject('unLogin');
  
  public courier_init:boolean = false;

  public orders_page_check:boolean = false;
  
  public status_changed:Subject<any> = new Subject();

  public sc_flag:boolean = false;

  public page_orders_check:boolean = false;
  
  public client_states:BehaviorSubject<any> = new BehaviorSubject(null);
  //STATUS-BAR
  public load_lvl:BehaviorSubject<any> = new BehaviorSubject(0);

  
  
  constructor() { 

  }

  //BALANCE
  public balance_check:boolean = false;
  
  //при выходе возвращаем приложение в иходное состояние
  public logout(){
    this.stop$.next();
    // map
    this.position.next(null);
    this.points.next(null);
    this.l_route = null ;
    this.l_map = null;
    this.duration = null;
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
    this.statuses.next(null);
    this.way.next(null);
    this.reasons = null;
      
    this.o_status.next(null);
    this.state.next(null);
    this.s_state.next(null);
    this.check_state = false;
    this.courier_init = false;
    this.orders_page_check = false;
    this.sc_flag = false;
    this.page_orders_check = false;
    this.balance_check = false;
  
    this.load_lvl.next(0);
  }


}
