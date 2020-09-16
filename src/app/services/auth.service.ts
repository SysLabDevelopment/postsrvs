import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { Device } from '@ionic-native/device/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject, Subject } from 'rxjs';
import { NavService } from '../services/nav.service';
import { SysService } from '../services/sys.service';
import { SettingsService } from './settings.service';
import { StateService } from './state.service';

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
  public isDebug: boolean = false; //Нужна в случае хардкодной отладки нативных функций
  public userId: string;
  public pay_access: boolean;
  public pay_access_data: any;
  constructor(
    private bScan: BarcodeScanner,
    private http: HttpClient,
    private device: Device,
    private plt: Platform,
    public router: Router,
    private state$: StateService,
    private alert: AlertController,
    public settings: SettingsService,
    public sys: SysService,
    private nav_s: NavService,
  ) {

    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };

    if (!this.getMode()) {
      this.setMode('hand');
    }
    if (!this.getScanMode()) {
      this.setScanMode('camera');
    }

    this.routingModeAuto = (this.getRoutingMode() == 'standart' ? false : true);


  }


  public checkAuth() {
    const url = 'orders';
    let data = {

      'action': 'checkAuth',
      'appVersion': this.version || ''
    }

    return this.sendPost(url, data);
  }

  public setMode(mode: string) {
    localStorage.setItem('mode', mode);
  }

  public getMode(): String {
    return this.settings.rules.appMode;
  }

  public setScanMode(mode: string) {
    localStorage.setItem('scan_mode', mode);
  }
  //меняет способ сканирования
  public getScanMode(): string {
    return this.settings.rules.scanMode;
  }
  public sendPost(url: string, data: { uuid?: string, action?: string, barcode?: string, cid?: unknown, lt?: unknown, lg?: unknown, start?: string, stop?: string }) {

    let host = this.sys.proxy + "https://mobile.postsrvs.ru/mobile/"


    url = host + url;
    data['uuid'] = (this.isDebug ? '6b356755575fce31' : this.getUuid());
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    let self = this;
    let resp = new Subject<any>();

    this.plt.ready().then(() => {
      self.http.post(url, data, httpOptions).subscribe((data: any) => {
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
      });
    });


    return resp;
  }
  public getUuid() {
    // return 'c446ca560c6e0383';
    return this.device.uuid;
  }

  public setUser(id: string) {
    localStorage.setItem('user', id);
    this.user = true;
    this.userId = id;
  }

  public getUserId() {
    return localStorage.getItem('user');
  }

  public scanData() {
    return this.bScan.scan();
  }

  public login(code: { action: string, barcode: string }) {
    return this.sendPost('auth', code);
  }

  public initLogin(userId?: string) {
    userId && this.setUser(userId);
    this.state$.g_state.next('login');
    this.state$.map_state.next('init');
  }



  public logout() {

    this.state$.logout();
    this.router.navigate(['login']);
    this.nav_s.tabNav.next(0);
    this.state$.g_state.next('unLogin');

  }

  public async showError(err: number) {
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

  getGuessMode() {
    return Boolean(Number(this.settings.rules.gess));
  }

  //Сохранение режима построения маршрута по умолчанию
  setDefaultRouteBuilding(defaultRouteBuilding: boolean) {
    defaultRouteBuilding && localStorage.setItem('defaultRouteBuilding', '' + defaultRouteBuilding);
  }

  getDefaultRouteBuilding() {
    return this.settings.rules.autoStartRoute;
  }
  setRoutingMode(auto: string) {
    auto && localStorage.setItem('auto', auto + '');
  }
  public getRoutingMode() {
    return this.settings.rules.typeRoute;
  }

  public check(mode: string) {
    this.bScan.scan().then((scanData) => {
      console.log('sys:: auth.check() данные qr-кода: ', scanData);
      let url = this.sys.proxy + 'https://mobile.postsrvs.ru/admin/ajax/wh.php';
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
          localStorage.check = mode;
        }
      })
    })
  }



}
