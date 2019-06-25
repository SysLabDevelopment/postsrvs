import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService}  from '../services/auth.service';
import { forkJoin, interval, BehaviorSubject, Subject, Observable } from 'rxjs';
import { takeUntil, merge } from 'rxjs/operators';
import { Platform } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class CourierService {
public orders:BehaviorSubject<any> = new BehaviorSubject(null);
public statuses:BehaviorSubject<any> = new BehaviorSubject(null);
public way:BehaviorSubject<any> = new BehaviorSubject(null);

public reasons:any = null;

public o_status:BehaviorSubject<any> = new BehaviorSubject(null);
public state:BehaviorSubject<any> = new BehaviorSubject(null);
public s_state:BehaviorSubject<any> = new BehaviorSubject(null);

private interval_3m = interval(5000);

public  $stop:Subject<any> = new Subject();

private check_state:boolean = false;


constructor(private http:HttpClient,
            private auth:AuthService,
            private router:Router,
            private plt:Platform
            ) {
              this.initOrders();
              var self  = this;

              this.getReasons().subscribe((data:any) => {
                if (data.success = 'true'){
                  self.reasons = data.reasons;
                  console.log('get_reasons', this.reasons);
                }
              })
            }

ngOnDestroy(){
  this.$stop.next();
  this.$stop.complete();
}

ngOnInit(){
  
}


//запрос к backend
public sendPost(url, data){
  var host = "https://postsrvs.ru/mobile/";
  url = host+url;
  data['uuid'] = this.auth.getUuid();
  data = JSON.stringify(data);
  
  console.log('courier_sendPost', data);

  const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'
    })
  };
  var self = this;
  var resp = new Subject<any>();
  
  this.plt.ready().then(() => {
    self.http.post(url, data).subscribe((data:any) => {
    
      console.log('respTest_data', data);
      console.log('data.success', data.success );
      console.log('data.reason', data.reason );
      if (data.success == 'false' && data.reason == "not_auth"){
        console.log('unsuccess');
        self.$stop.next();
        self.$stop.complete();
        self.auth.auth_state.next('not_login');
        self.router.navigate(['login']);
      } else {
        resp.next(data);
      }
    });
  });

  return resp.asObservable();
}

//Собираем необходимую инфу по заказам 
public initOrders(){
  var self = this;
  //Запускаем инициализацию

  this.getStatuses().subscribe((data) => {
    if (data.success == 'true'){
      self.statuses.next(data.statuses);
      self.s_state.next('status_init');
    }
  })

  this.state.pipe(takeUntil(this.$stop)).subscribe((state) => {
    console.log('courier_state', state);

    switch ( state ){
      case 'init':
          self.getWay().subscribe((data:any) => {
            console.log('way_get_data',data);
            if (data.success == 'true'){
              self.way.next(data.orders);
              self.state.next('way_init');
            }
          });
        break;
      case 'way_init':
        self.getOrders().subscribe((data:any) => {
          console.log('orders_get_data',data);
          if (data.success == 'true'){
            self.orders.next(data.orders);
            self.state.next('orders_init');
          }
        });
        break;
    }
  });
  this.state.next('init');
  this.checkWay();
}

// запрос списка заказов курьера
public getWay(){
  var url = 'orders';
  var data = {
    'action' : 'getWay',
  }

  return this.sendPost( url, data);
}

//следит за изменениями заказов
public checkWay(){
  var self = this;
  if (this.check_state){
    this.interval_3m.pipe(takeUntil(this.$stop)).subscribe(() => {
      self.state.next('init');
    });
    this.check_state = true;
  } 
}

public getOrders():Observable<any>{
  var url   = "orders";

  var ids = [];
  var way = this.way.getValue();

  for (var i=0; i < way.length; i++ ){
    ids.push(way[i].id);
  }

  var data  = {
                'action' : 'getOrders',
                'orders_id' : ids
              }

  return this.sendPost(url, data);
}

public getStatuses():Observable<any>{
  var url   = "orders";
  var data  = {'action' : 'getStatuses'};

  return this.sendPost(url, data);
}

public getBalance(sync_id){
  var id = localStorage.getItem('cId'); 
  var url   = "https://terminal.vestovoy.ru/info/stat.php?cid=" + sync_id;
  
  return this.http.get(url);
}

public getReasons(){
  var url   = "orders";
  var data  = { 'action' : 'getReasons'};

  return this.sendPost(url, data);
}

public getStatus(order){

      if (order.status_id == 0) {
        return 'Доставляется';
      } else {
        var statuses = this.statuses.getValue();

        for (var i = 0; i < statuses.length; i++ ){
          var status = statuses[i];

          if (status.id == order.status_id) {
            return  status.status;
          }
        }
      }
}

public changeStatus(status = '', id = '', comment = '', reason = '', goods = ''){
  var url = 'orders';
  var data = {
    'action' : 'changedStatus',
    'status' : status,
    'id'     : id,
    'comment' : comment,
    'reason' : reason,
    'goods'  : goods
  };
  console.log('change_data', data);

  return this.sendPost(url, data);
}
}
