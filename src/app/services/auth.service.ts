import { Injectable } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';
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
  public user:boolean = false;
  public auth_state:BehaviorSubject<any> = new BehaviorSubject('not_login');
  public stop$:Subject<any> = new Subject(); // останаливает все подписки;
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(
              private bScan:BarcodeScanner,
              private http:HttpClient,
              private device: Device,
              private plt:Platform,
              private router:Router,
              private state$:StateService,
              private map:MapService,
              private alert:AlertController
              ) { 

  this.barcodeScannerOptions = {
    showTorchButton: true,
    showFlipCameraButton: true
  };  
  
  console.log('Device UUID is: ' + this.device.uuid);  
}

ngOnInit(){
  console.log('AUH_INIT');
}
  public checkAuth(){
    var url = 'orders';
    var data = {
      'action' : 'checkAuth',
    }

    return this.sendPost(url, data);
  }

  public sendPost(url, data){
    console.log('SEND_POST_CALL');
      var host = "https://postsrvs.ru/mobile/";
      url = host+url;
      data['uuid'] = this.getUuid();
  
      console.log('REQUEST_DATA', data);
      data = JSON.stringify(data);

      const httpOptions = {
        headers: new HttpHeaders({
        'Content-Type':'application/json'
        })
      };
  
      var self = this;
      var resp = new Subject<any>();
      
      this.plt.ready().then(() => {
        self.http.post(url, data, httpOptions).subscribe((data:any) => {
          console.log('RESPONSE_DATA', data);
          this.state$.unsetNotification('internet');
          if (data){
            if (data.success == 'false' && data.reason == "not_auth"){
              console.log('unsuccess');
              self.logout();
            } else {
              resp.next(data);
            }
          } else {
            resp.next(data);
          }
        }, (err) => {
          this.state$.setNotification('internet', 'Проверьте интернет соединение!');
        });
      });


      return resp ;
  }
  public getUuid(){
    //return '4191a54e85f2d5f6';
    return this.device.uuid;
  }

  public setUser(id){
    localStorage.setItem('user', id);
    this.user = true;
  }

  public getUserId() {
    return localStorage.getItem('user');
  }

  public scanData(){
    return this.bScan.scan();
  }

  public login(code){
    return this.sendPost('auth', code);
  }
  
  public initLogin(){
    this.state$.g_state.next('login');
    this.state$.map_state.next('init');
  }

  public logout(){
    console.log('AUTH_LOGOUT');
    this.state$.logout();
    this.router.navigate(['login']);
    this.state$.g_state.next('unLogin');
    
  }

  public async showError(err){
    switch (err){
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
    }
  }

}
