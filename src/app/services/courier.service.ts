import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService}  from '../services/auth.service';
import { forkJoin, interval, BehaviorSubject, Subject, Observable } from 'rxjs';
import { takeUntil, merge } from 'rxjs/operators';


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

private interval_3m = interval(180000);

public  $stop:Subject<any> = new Subject();



constructor(private http:HttpClient,
            private auth:AuthService,
            private router:Router
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

  this.http.post(url, data).subscribe((data:any) => {
    if (data.success == 'false' && data.reason == "not_auth"){
      self.$stop.next();
      self.$stop.complete();
      self.auth.auth_state.next('not_login');
      self.router.navigate(['login']);
    } else {
      resp.next(data);
    }
  });

  return resp.asObservable();
}

//Собираем необходимую инфу по заказам 
public initOrders(){
  var self = this;
  //Запускаем инициализацию

  this.getStatuses().subscribe((data) => {
    if (data.success = 'true'){
      self.statuses.next(data.statuses);
      self.s_state.next('status_init');
    }
  })

  this.state.pipe(takeUntil(this.$stop)).subscribe((state) => {

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
          console.log('way_get_data',data);
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
  this.state.subscribe((state) => {
  })
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
  this.interval_3m.pipe(takeUntil(this.$stop)).subscribe(() => {
    self.state.next('init');
  });
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

public getBalance(){
  var url   = "https://terminal.vestovoy.ru/info/stat.php?cid=3431";
  
  return this.http.get(url);
}

public getReasons(){
  var url   = "orders";
  var data  = { 'action' : 'getReasons'};

  return this.sendPost(url, data);
}


}
