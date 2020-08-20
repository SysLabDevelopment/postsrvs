// Здравый код, растущий рядом с какахами
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Device } from '@ionic-native/device/ngx';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Order } from '../interfaces/order';
import { Response } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class SysService {
  public ordersIds: Array<string>;
  public proxy: string = 'http://mobile.postsrvs.ru:8080/';
  public orders: Array<Order>

  constructor(
    private http: HttpClient,
    private device: Device,
    public toastController: ToastController,
    private camera: Camera
  ) {

  }
  //Распознавание текста
  async doOCR(base64Image: string, noSkip = true) {
    //  if(noSkip){
    // const worker = createWorker({
    //   logger: m => console.log(m),
    // });
    // await worker.load();
    // await worker.loadLanguage('rus');
    // await worker.initialize('rus');
    // const {data:{text}} = await worker.recognize(base64Image);
    // console.log('sys:: распознанные данные с чека: ', text);
    // await worker.terminate();
    // return text;
    //  }else{
    return ''
    //  }


  }
  //Получение списка заказов по idшникам
  public getOrders(ids: Array<string>): Observable<Response> {

    const url = this.proxy + "https://mobile.postsrvs.ru/mobile/orders";
    let data = {
      'uuid': this.device.uuid,
      'action': 'getOrders',
      'orders_id': ids
    }
    if (localStorage.debug == 'true') {
      data['uuid'] = '6b356755575fce31';
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

  //Проверка на авторизованность
  //@appVersion - версия приложения
  public checkAuth(appVersion = '') {
    const url = `${this.proxy}https://mobile.postsrvs.ru/mobile/orders`;
    let data = {
      "action": "checkAuth",
      "uuid": this.device.uuid,
      'appVersion': appVersion
    }
    if (localStorage.debug == 'true') {
      data['uuid'] = '6b356755575fce31';
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
    };
    return this.http.post(url, data, httpOptions)
  }

  public checkPhoto() {
    const options: CameraOptions = {
      quality: 25,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    return this.camera.getPicture(options)

  }
}
