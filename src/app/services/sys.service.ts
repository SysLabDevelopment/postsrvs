// Здравый код, растущий рядом с какахами
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from '@ionic-native/device/ngx';

@Injectable({
  providedIn: 'root'
})
export class SysService {
  public ordersIds: Array<string>;


  constructor(
    private http: HttpClient,
    private device: Device
  ) {
  }

  //Получение списка заказов по idшникам
  public getOrders(ids: Array<string>): Observable<any> {
    const url = "https://mobile.postsrvs.ru/mobile/orders";
    let data = {
      'uuid': this.device.uuid,
      'action': 'getOrders',
      'orders_id': ids
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }

    return this.http.post(url, data, httpOptions)
  }

}
