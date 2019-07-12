import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { StateService}  from '../services/state.service';
import { forkJoin, interval, BehaviorSubject, Subject, Observable } from 'rxjs';
import { takeUntil, merge, take } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CourierService {

constructor(private http:HttpClient,
            private router:Router,
            private plt:Platform,
            private state$:StateService,
            private auth:AuthService
            ) {
              //при выходе из приложения возвращаем начальное состояние
              var self = this;
              this.state$.interval_1ss.pipe(takeUntil(this.state$.stop$)).subscribe(() => {
                let old_val = self.state$.load_lvl.getValue();
                self.state$.load_lvl.next(old_val + 1.7);
              });

              var self  = this;
              this.state$.stop$.subscribe(() => {
                console.log('STOP$_COURIER');
                self.logout();
              });

              this.state$.g_state.subscribe((state) => {
                if (state == 'login'){
                  self.initOrders();
                }
              })

              this.state$.status_changed.pipe(takeUntil(this.state$.stop$)).subscribe(() => {
                self.state$.state.next('init');
              })
            }

ngOnDestroy(){
  console.log('COURIER_ON_DESTROY');
}

ngOnInit(){
  console.log('COURIER_ON_INIT');
}


//Собираем необходимую инфу по заказам 
public initOrders(){
  var self = this;

  //Запускаем инициализацию
  this.getReasons().subscribe((data:any) => {
    if (data.success = 'true'){
      self.state$.reasons = data.reasons;
      console.log('get_reasons', this.state$.reasons);
    }
  });

  this.getStatuses().subscribe((data) => {
    console.log('GET_STATUSES_DATA', data);
    if (data.success == 'true'){
      self.state$.statuses.next(data.statuses);
      console.log('statuses_val', self.state$.statuses.getValue());
      self.state$.s_state.next('status_init');
    }
  });

if (!this.state$.courier_init){
  this.state$.state.pipe(takeUntil(this.state$.stop$)).subscribe((state) => {
    console.log('COURIER_STAET_STATE', state);
    switch ( state ){
      case 'init':
          self.getWay().subscribe((data:any) => {
            console.log('get_way_response', data);
            if (data.success == 'true'){
              self.state$.way.next(data.orders);
              self.state$.state.next('way_init');
            }
          });
        break;
      case 'way_init':
        self.getOrders().subscribe((data:any) => {
          if (data.success == 'true'){
            self.state$.orders.next(data.orders);
            self.state$.state.next('orders_init');
          }
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
public checkWay(){
  var self = this;
  if (!this.state$.check_state){
    console.log('checkWay_start');
    console.log('this.state$.check_state', this.state$.check_state);
    this.state$.interval_1m.pipe(takeUntil(this.state$.stop$)).subscribe(() => {
      console.log('interval 1m done');
      self.state$.load_lvl.next(0);
      self.state$.state.next('init');
    });
    this.state$.check_state = true;
  } 
}

// запрос списка заказов курьера
public getWay(){
  var url = 'orders';
  var data = {
    'action' : 'getWay',
  }

  return this.auth.sendPost( url, data);
}

public getOrders():Observable<any>{
  var url   = "orders";

  var ids = [];
  var way = this.state$.way.getValue();
  console.log('get_orders_way', way);
  for (let i=0; i < way.length; i++ ){
    ids.push(way[i].id);
    console.log('get_orders_iter',i,way[i].id);
  }

  var data  = {
                'action' : 'getOrders',
                'orders_id' : ids
              }

  return this.auth.sendPost(url, data);
}

public getStatuses():Observable<any>{
  var url   = "orders";
  var data  = {'action' : 'getStatuses'};

  return this.auth.sendPost(url, data);
}

public getBalance(sync_id){
  var id = localStorage.getItem('cId'); 
  var url   = "https://terminal.vestovoy.ru/info/stat.php?cid=" + sync_id;
  
  return this.http.get(url);
}

public getReasons(){
  var url   = "orders";
  var data  = { 'action' : 'getReasons'};

  return this.auth.sendPost(url, data);
}

public getStatus(order){

      if (order.status_id == 1) {
        return 'Доставляется';
      } else {
        var statuses = this.state$.statuses.getValue();

        for (var i = 0; i < statuses.length; i++ ){
          var status = statuses[i];

          if (status.id == order.status_id) {
            return  status.status;
          }
        }
      }
}


public changeStatus(status = '', id = '', comment = '', reason = '', goods = '', payment = '' ){
  var url = 'orders';
  var data = {
    'action' : 'changedStatus',
    'status' : status,
    'id'     : id,
    'comment' : comment,
    'reason' : reason,
    'goods'  : goods,
    'payment'  : payment
  };

  return this.auth.sendPost(url, data);
}

public logout(){

}

//отправляет запрос на оплату
public sendPay(order,isDone = true, quants = null){
  if (isDone){
    
  }  
}

}
