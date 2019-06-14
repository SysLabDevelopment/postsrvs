import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService}  from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CourierService {
private orders:any = null;

constructor(private http:HttpClient,
            private router:Router,
            private auth:AuthService) {}


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
public getOrders(){
  var url   = "orders";
  var data  = {
                'action' : 'getOrders',
                'sync_id' : this.auth.getUserId()
              }
  console.log('get_data', data);
  return this.sendPost(url, data);
}

public getStatuses(){
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
