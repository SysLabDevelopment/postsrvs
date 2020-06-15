// Здравый код, растущий рядом с какахами
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from '@ionic-native/device/ngx';
import { ToastController } from '@ionic/angular';
import { Response } from '../interfaces/response';
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
  async presentToast(message: string, color: string, header: string = '') {
    const toast = await this.toastController.create({
      header: header,
      message: message,
      duration: 3000,
      color: color,
      position: 'bottom'
    });
    toast.present();
  }

  public goToWork(dates: Array<any>) {
    const url = this.proxy + "https://mobile.postsrvs.ru/sheduleData.php";
    let data = {
      "type": "goToWork",
      "dates": dates,
      "courieriId": localStorage.user,
      "uuid": this.device.uuid
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.http.post(url, data, httpOptions)
  }

  public getNotWorkRules() {
    const url = this.proxy + "https://mobile.postsrvs.ru/sheduleData.php";
    let data = {
      "type": "rules",
      "courieriId": localStorage.user,
      "uuid": this.device.uuid
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.http.post(url, data, httpOptions)

  }

  //Отправка данных о нерабочих днях и причинах
  public stopWork(dates) {
    const url = this.proxy + "https://mobile.postsrvs.ru/sheduleData.php";
    let data = {
      "type": "stopWork",
      "dates": dates,
      "courieriId": localStorage.user,
      "uuid": this.device.uuid
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.http.post(url, data, httpOptions)

  }

  //Возвращает сигнатуру, кодированную ключем яндекс.навигатора
  //@lat - широта
  //@lon - долгота
  public getYandexnaviSignature(lat: number, lon: number): Observable<Response> {
    const url = `${this.proxy}https://areg-p.flexcore.ru/admin/accessKeySignature/index.php?LAT=${lat}&LON=${lon}`;
    return this.http.get<Response>(url);

  }

  async SW() {
    const registration = await navigator.serviceWorker.ready;

    try {
      await registration.sync.register('syncer').then(() => {
        console.log();
      })
    } catch {
      console.log('Periodic Sync could not be registered!');
    }
  }
}
