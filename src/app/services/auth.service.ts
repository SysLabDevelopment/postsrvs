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
  public checkState: string = undefined; //Состояние чекнутости на складе
  public routingModeAuto: boolean;
  public version: string = undefined; // версия приложения

  constructor(
    private bScan: BarcodeScanner,
    private http: HttpClient,
    private device: Device,
    private plt: Platform,
    private router: Router,
    private state$: StateService,
    private map: MapService,
    private alert: AlertController,

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

    this.routingModeAuto = Boolean(this.getRoutingMode());


  }


  public checkAuth() {
    var url = 'orders';
    var data = {

      'action': 'checkAuth',
      'appVersion': this.version
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
    const host = "https://postsrvs.ru/mobile/";
    url = host + url;
    data['uuid'] = this.getUuid();
    const httpOptions = {
      headers: new HttpHeaders({
        'access-control-allow-headers': '*',
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
      })
    };
    let self = this;
    let resp = new Subject<any>();

    this.plt.ready().then(() => {
      self.http.post(url, data, httpOptions).subscribe((data: any) => {
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
        if (err.error instanceof Error) {
          this.state$.setNotification('internet', 'Ошибка ответа сервера! Обратитесь к разработчикам.');
        }
      });
    });


    return resp;
  }
  public getUuid() {
    // return 'c446ca560c6e0383';
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
    guessMode && localStorage.setItem('guessMode', guessMode);
  }
  getGuessMode() {
    return localStorage.getItem('guessMode');
  }

  //Сохранение режима построения маршрута по умолчанию
  setDefaultRouteBuilding(defaultRouteBuilding) {
    defaultRouteBuilding && localStorage.setItem('defaultRouteBuilding', defaultRouteBuilding);
  }

  getDefaultRouteBuilding() {
    return localStorage.getItem('defaultRouteBuilding');
  }
  setRoutingMode(auto) {
    auto && localStorage.setItem('auto', auto + '');
    this.routingModeAuto = auto;
  }
  public getRoutingMode() {
    return (localStorage.getItem('auto') == 'true' ? true : false);
  }

  public check(mode: string) {
    this.bScan.scan().then((scanData) => {
      let url = 'https://postsrvs.ru/admin/ajax/wh.php';
      let data = {
        'cId': this.getUserId(),
        'token': "l;sdfjkhglsoapl[",
        'qr': scanData.text,
        'mode': 'check' + mode
      }
      const headers = new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
      })
      this.http.post(url, data, { headers: headers }).subscribe((data: any) => {
        if (data.success == true) {
          this.checkState = 'checked' + mode;
        }
      })
    })
  }
}
