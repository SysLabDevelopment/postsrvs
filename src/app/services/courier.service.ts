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

public o_status:BehaviorSubject<any> = new BehaviorSubject(null);

private interval_3m = interval(180000);

public  $stop:Subject<any> = new Subject();



constructor(private http:HttpClient,
            private auth:AuthService) {
              console.log('courier_service_construct');
              this.initOrders();
            }

ngOnDestroy(){
  this.$stop.next();
  
}

//Собираем необходимую инфу по заказам для вывода н страницу
public initOrders(){
  var self = this;

  forkJoin(this.getOrders(), this.getStatuses()).subscribe(([res_o, res_s]) => {
    console.log('initOrders',res_o);
    console.log('initStatuses',res_s);

    if (res_o.success == 'true' && res_s.success == 'true' ){
      self.orders.next(res_o.orders);
      self.statuses.next(res_s.statuses);

      self.o_status.next('init'); 
    }
  });
}

public sendPost(url, data){
  var host = "https://postsrvs.ru/mobile/";
  url = host+url;
  data = JSON.stringify(data);

  const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'
    })
  };

  return this.http.post(url, data);
}

//следит за изменениями заказов
public checkOrders(){
  var self = this;
  this.interval_3m.pipe(takeUntil(this.$stop)).subscribe(() => {
    self.getOrders().subscribe((orders:any) => {
      console.log('orders_data', orders);
      if (orders.success = "true"){
        self.orders.next(orders.orders);
      }
    })
  });
}

public getOrders():Observable<any>{
  var url   = "orders";
  var data  = {
                'action' : 'getOrders',
                'sync_id' : this.auth.getUserId()
              }
  console.log('get_data', data);
  return this.sendPost(url, data);
}

public getStatuses():Observable<any>{
  var url   = "orders";
  var data  = {'action' : 'getStatuses'};

  return this.sendPost(url, data);
}

public getOrderInfo(id){
  var url   = 'orders';
  var data  = {'action' : 'getOrderInfo', 'order_id' : id}
  
  return this.sendPost(url, data);
}

public getBalance(){
  var url   = "https://terminal.vestovoy.ru/info/stat.php?cid=3431";
  
  return this.http.get(url);
}


}
