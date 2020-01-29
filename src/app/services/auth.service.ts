import { Injectable } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { Device } from '@ionic-native/device/ngx';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { StateService } from './state.service';
import { MapService } from './map.service';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: boolean = false;
  public auth_state: BehaviorSubject<any> = new BehaviorSubject('not_login');
  public stop$: Subject<any> = new Subject(); // останаливает все подписки;
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(
    private bScan: BarcodeScanner,
    private http: HttpClient,
    private device: Device,
    private plt: Platform,
    private router: Router,
    private state$: StateService,
    private map: MapService,
    private alert: AlertController
  ) {

    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };

    if (!this.getMode()) {
      console.log('setMode');
      this.setMode('manual_wo');
    }
    if (!this.getScanMode()) {
      this.setScanMode('camera');
    }
  }

  ngOnInit() {

  }

  public checkAuth() {
    var url = 'orders';
    var data = {

      'action': 'checkAuth',
    }

    return this.sendPost(url, data);
  }

  public setMode(mode) {
    localStorage.setItem('mode', mode);
  }

  public getMode(): String {
    return localStorage.getItem('mode');
  }

  public setScanMode(mode) {
    localStorage.setItem('scan_mode', mode);
  }
  //меняет способ сканирования 
  public getScanMode(): string {
    return localStorage.getItem('scan_mode');
  }
  public sendPost(url, data) {
    let host = "https://postsrvs.ru/mobile/";
    url = host + url;
    data['uuid'] = this.getUuid();
    // data = JSON.stringify(data);
    const httpOptions = { headers: new HttpHeaders({}) };
    console.log('AUTH.SendPOst() data', JSON.stringify(data));
    let self = this;
    let resp = new Subject<any>();

    this.plt.ready().then(() => {
      self.http.post(url, data, httpOptions).subscribe((data: any) => {
        // data = JSON.stringify(data);
        console.log('AUTH.SendPOst() RESPONSE', JSON.stringify(data));
        this.state$.unsetNotification('internet');
        if (data) {
          console.log('sys:: data == true, data.success', data.success);
          if (data.success == 'false' && data.reason == "not_auth") {
            self.logout();
          } else {
            resp.next(data);
          }
        } else {
          resp.next(data);
        }
      }, (err) => {
        console.error('An error occurred:', err);
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.

          this.state$.setNotification('internet', 'Проверьте интернет соединение!');
        }
      });
    });


    return resp;
  }
  public getUuid() {
    //return '4191a54e85f2d5f6';
    return this.device.uuid;
  }

  public setUser(id) {
    localStorage.setItem('user', id);
    this.user = true;
  }

  public getUserId() {
    return localStorage.getItem('user');
  }

  public scanData() {
    return this.bScan.scan();
  }

  public login(code) {
    return this.sendPost('auth', code);
  }

  public initLogin() {
    this.state$.g_state.next('login');
    this.state$.map_state.next('init');
  }

  public logout() {

    this.state$.logout();
    this.router.navigate(['login']);
    this.state$.g_state.next('unLogin');

  }

  public async showError(err) {
    switch (err) {
      case 1:
        const alert = await this.alert.create({
          header: 'Ошибка',
          message: 'Ошибка авторизации, повторите попытку позже.',
          buttons: ['OK']
        });

        await alert.present();
        break;
      case 2:
        const alert2 = await this.alert.create({
          header: 'Ошибка',
          message: 'Заказ не найден.',
          buttons: ['OK']
        });

        await alert2.present();
        break;
      case 3:
        const alert3 = await this.alert.create({
          header: 'Ошибка',
          message: 'Ошибка отправки запроса, повторите попытку позже.',
          buttons: ['OK']
        });

        await alert3.present();
        break;
      case 4:
        const alert4 = await this.alert.create({
          header: 'Ошибка',
          message: 'Телефон не зарегистрирован.',
          buttons: ['OK']
        });

        await alert4.present();
        break;
      case 5:
        const alert5 = await this.alert.create({
          header: 'Ошибка',
          message: 'Не удалось сменить режим маршрута.',
          buttons: ['OK']
        });

        await alert5.present();
        break;
      case 6:
        const alert6 = await this.alert.create({
          header: 'Ошибка',
          message: 'Не удалось подтвердить заказ.',
          buttons: ['OK']
        });

        await alert6.present();
        break;
      case 7:
        const alert7 = await this.alert.create({
          header: 'Спасибо!',
          message: 'Отзыв успешно отправлен.',
          buttons: ['OK']
        });

        await alert7.present();
        break;
      case 8:
        const alert8 = await this.alert.create({
          header: 'Ошибка',
          message: 'Не удалось отправить отзыв.',
          buttons: ['OK']
        });

        await alert8.present();
        break;
      case 9:
        const alert9 = await this.alert.create({
          header: 'Звонок клиенту',
          message: 'Запрос обрабатывается, вам сейчас позвонят.',
          buttons: ['OK']
        });

        await alert9.present();
        break;
      case 10:
        const alert10 = await this.alert.create({
          header: 'Настройки сохранены!',
          buttons: ['OK']
        });

        await alert10.present();
        break;

    }
  }

  setGuessMode(guessMode) {
    localStorage.setItem('guessMode', guessMode);
  }
  getGuessMode() {
    return localStorage.getItem('guessMode');
  }

  //Сохранение режима построения маршрута по умолчанию
  setDefaultRouteBuilding(defaultRouteBuilding) {
    localStorage.setItem('defaultRouteBuilding', defaultRouteBuilding);
  }

  getDefaultRouteBuilding() {
    return localStorage.getItem('defaultRouteBuilding');
  }
}
