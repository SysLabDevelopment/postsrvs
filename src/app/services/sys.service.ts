// Здравый код, растущий рядом с какахами
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Device } from '@ionic-native/device/ngx';
import { WebIntent } from '@ionic-native/web-intent/ngx';
import { AlertController, Platform, ToastController } from '@ionic/angular';
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
    private camera: Camera,
    private wi: WebIntent,
    private platform: Platform,
    private alert: AlertController,

  ) {

    if (!(this.platform.is('android') && this.platform.is('ios'))) {
      this.proxy == ''
    }

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

    const url = `${this.proxy}https://mobile.postsrvs.ru/mobile/orders`;
    const data = {
      uuid: this.getUuid(),
      action: 'getOrders',
      orders_id: ids
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
      header,
      message,
      duration: 3000,
      color,
      position: 'bottom'
    });
    toast.present();
  }

  public goToWork(dates: Array<any>) {
    const url = `${this.proxy}https://mobile.postsrvs.ru/sheduleData.php`;
    const data = {
      type: 'goToWork',
      dates,
      courieriId: localStorage.user,
      uuid: this.device.uuid
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.http.post(url, data, httpOptions)
  }

  public getNotWorkRules() {
    const url = `${this.proxy}https://mobile.postsrvs.ru/sheduleData.php`;
    const data = {
      type: 'rules',
      courieriId: localStorage.user,
      uuid: this.device.uuid
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.http.post(url, data, httpOptions)

  }

  //Отправка данных о нерабочих днях и причинах
  public stopWork(dates: Array<any>) {
    const url = `${this.proxy}https://mobile.postsrvs.ru/sheduleData.php`;
    const data = {
      type: 'stopWork',
      dates,
      courieriId: localStorage.user,
      uuid: this.device.uuid
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
  public getYandexnaviSignature(lat: string, lon: string): Observable<Response> {
    const url = `${this.proxy}https://mobile.postsrvs.ru/admin/accessKeySignature/index.php?LAT=${lat}&LON=${lon}`;
    return this.http.get<Response>(url);

  }

  //Проверка на авторизованность
  public checkAuth() {
    const url = `${this.proxy}https://mobile.postsrvs.ru/mobile/orders`;
    const data = {
      action: 'checkAuth',
      uuid: this.getUuid()
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
      quality: 10,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    return this.camera.getPicture(options)

  }

  //Проверяет, отметил ли курьер, что едет на работу
  //@cId - ид курьера
  public isCheckedToWork(cId: string): Observable<{ success: boolean, checked: boolean }> {
    const url = `${this.proxy}https://mobile.postsrvs.ru/admin/ajax/is_checked_to_work.php`;
    const data = {
      token: 'l;sdfjkhglsoapl[',
      cId
    }
    const headers = {
      'Content-type': 'application/json'
    }
    return this.http.post<{ success: boolean, checked: boolean }>(url, data, { headers });
  }

  //Отметить "еду на работу"
  //@cId - ид курьера
  public check_to_work(cId: string) {
    const url = `${this.proxy}https://mobile.postsrvs.ru/admin/ajax/check_to_work.php`;
    const data = {
      cId,
      token: 'l;sdfjkhglsoapl[',
    }
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json'
    })
    return this.http.post(url, data, { headers })
  }

  //Обработка интентов
  public intentStart(url: string, pkg: string) {
    console.log('sys:: intent url: ', url);
    const options = {
      action: this.wi.ACTION_VIEW,
      url,
      package: pkg
    }
    this.wi.startActivity(options).then((data) => {
      console.log('sys:: Обработчик интента запущен', data);
    });
  }

  public getUuid() {
    if (this.device.platform == 'browser') return 'webapp';
    return this.device.uuid;
  }

  public async showAlert(header: string, message: string, handlers: { ok: any, cancel: any }) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: [{
        text: 'Отмена',
        role: 'cancel',
        handler: (blah) => {
          handlers.cancel()
        }
      }, {
        text: 'Ок',
        handler: () => {
          handlers.ok();
        }
      }]
    });

    await alert.present();
  }

}
