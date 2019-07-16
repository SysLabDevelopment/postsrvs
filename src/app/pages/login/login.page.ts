import { Component, OnInit, HostBinding  } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { StateService } from '../../services/state.service';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '220px',
      })),
      state('closed', style({
        height: '50px',
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('openClose1', [
      // ...
      state('open', style({
        height: '50px',
      })),
      state('closed', style({
        height: '0px',
        display: 'none'
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ])
  ]
})
export class LoginPage implements OnInit {
  public disLogin:boolean = true;
  public pl_window:boolean = false;
  public error_phone:boolean = false;
  public phone = '';
  public loader:boolean = false;
  public auth_step:boolean = false;
  public code = null;

  constructor(private auth:AuthService,
              private router:Router,
              private alert:AlertController,
              private plt:Platform,
              private http:HttpClient,
              private state$:StateService
              ) {
    var self = this;
    
    //проверяет авторизован ли пользователь на сервере

    this.plt.ready().then(() => {
      this.auth.checkAuth().subscribe((data:any) => {  
          console.log('check_auth_data', data);
            if (data.success == 'true'){
              self.router.navigate(['balance']);
              self.auth.initLogin();
            } else {
              self.disLogin = false;
            }
        });
    })
  }

  ngOnInit() {}

  public scanAuth(){
    var self = this;

    this.auth.scanData().then((data) => {
      console.log('data', data);
      
      var id = data.text.slice(0, -4);
      console.log('cid', id);
      localStorage.setItem('cId', id);
      var a_data = {  'action'  : 'auth',
                      'barcode' : data.text,
                      //'barcode' : '33dbcda2db5311e39760309e88d17f08,3431',
                      };
      
                      console.log('request_auth_data', a_data);

      self.auth.login(a_data).subscribe((data:any) => {
        console.log('authResponse', data);

        if (data.success == "true"){
          self.router.navigate(['balance']);
          self.auth.initLogin();
        } else {
          self.showError(1);
        }
      });
    });
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
    }
  }

  public phoneAuth(){
    if (!this.auth_step){
      this.pl_window = !this.pl_window;
    }
  }

  public enterPhone(){
    console.log('PHONE_DATA,', this.phone, this.phone.length);
    if (this.phone && this.phone.length > 9){
      this.loader = true;
      this.sendPhone();  
    } else {
      this.error_phone = true;
    }
    
  }

  public changePhone(){
    this.error_phone = false;
  }

  public sendPhone(){
    var url   = "https://mok.flexcore.ru/client/registerP/";
    var data  = "action=registerP&phone=8" + this.phone + "&type=courier";
    
    var self = this;
    
    this.sendPost(url, data).subscribe((res:any) => {
      console.log('sendPhone', res);

      if (res.success == 'true'){
        self.authStep();
      }
    }) 
  }

  public sendPost(url, data){
    console.log('send_data', data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin' : '*',
        'Content-type' : 'application/x-www-form-urlencoded'
      })
    };

    return this.http.post(url, data, httpOptions);
  }

  public authStep(){
    this.auth_step  = true;
    this.loader     = false;
  }

  public enterCode(){
    var url   = "https://mok.flexcore.ru/courier/authP/";
    var data  = "action=authP&phone=8" + this.phone + "&code=" +this.code+ "&type=courier";
      
    var self = this;
    this.sendPost(url, data).subscribe((res:any) => {
      console.log('sendCode', res);

      if (res.success == 'true'){
        self.login(res.user);
      }
    }) 
  }

  public login(courier){
    let base = "33dbcda2db5311e39760309e88d17f08," + courier;
    localStorage.setItem('cId', courier);
    var self = this;
    let a_data = {  'action'  : 'auth',
                    'barcode' : base,
                    };

    this.auth.login(a_data).subscribe((data:any) => {
      console.log('authResponse', data);

      if (data.success == "true"){
        self.router.navigate(['balance']);
        self.auth.initLogin();
      } else {
        self.showError(1);
      }
    });                
  }

  public changeCode(){}



}
