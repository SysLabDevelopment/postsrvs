// Здравый код, растущий рядом с какахами
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from '@ionic-native/device/ngx';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SysService {
  public ordersIds: Array<string>;
  public proxy: string = 'http://mobile.postsrvs.ru:8080/';

  constructor(
    private http: HttpClient,
    private device: Device,
    public toastController: ToastController
  ) {
  }

  //Получение списка заказов по idшникам
  public getOrders(ids: Array<string>): Observable<any> {
    const url = this.proxy + "https://mobile.postsrvs.ru/mobile/orders";
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

  //Тост
  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: 'middle'
    });
    toast.present();
  }

}
