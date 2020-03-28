import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { StateService } from '../../services/state.service';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { CourierService } from '../../services/courier.service';
import { AppVersion } from '@ionic-native/app-version/ngx';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { catchError, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '264px',
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

  public disLogin: boolean = true;
  public pl_window: boolean = false;
  public error_phone: boolean = false;
  public phone = '';
  public loader: boolean = false;
  public auth_step: boolean = false;
  public code = null;
  public resend_dis: boolean = false;
  public dis_timer = null;
  public $stopTimer: Subject<any> = new Subject();

  constructor(private auth: AuthService,
    private router: Router,
    private alert: AlertController,
    private plt: Platform,
    private http: HttpClient,
    public state$: StateService,
    private AP: AndroidPermissions,
    public courier: CourierService,
    private appVersion: AppVersion

  ) {
    let self = this;

    //проверяет авторизован ли пользователь на сервере

    this.plt.ready().then((readySource) => {
      console.log('sys:: платформа готова:', readySource);
      if (readySource == 'android') {
        this.AP.requestPermission(this.AP.PERMISSION.ACCESS_FINE_LOCATION);
      } else if (readySource == 'cordova') {
        this.auth.isDebug = true;
      }

      self.appVersion.getVersionNumber().then((resp) => {
        this.auth.version = resp;
        this.auth.checkAuth().subscribe((data: any) => {
          if (data.success == 'true') {
            this.auth.setUser(data.sync_id);
            self.router.navigate(['balance']);
            self.auth.initLogin();
          } else {
            self.disLogin = false;
          }
        })
      })
    })
  }

  ngOnInit() {
    let today = new Date();
    if (localStorage.getItem('checkedDate') == today.toLocaleDateString()) {
      this.courier.checkedOnWork = true;
    }
    if (!this.auth.getUserId()) {
      this.courier.checkedOnWork = true;
    }


  }

  public scanAuth() {
    let self = this;

    this.auth.scanData().then((data) => {
      let id = data.text.slice(0, -4);
      console.log('cid', id);
      localStorage.setItem('cId', id);
      let a_data = {
        'action': 'auth',
        'barcode': data.text,
        // 'barcode': '33dbcda2db5311e39760309e88d17f08,3431',
      };
      self.auth.login(a_data).subscribe((data: any) => {
        if (data.success == "true") {
          this.auth.setUser(data.sync_id);
          self.router.navigate(['balance']);
          self.auth.initLogin();
        } else {
          self.auth.showError(1);
        }
      });
    });
  }


  public phoneAuth() {
    if (!this.auth_step) {
      this.pl_window = !this.pl_window;
    }
  }

  public enterPhone() {
    if (this.phone && this.phone.length > 9) {
      this.loader = true;
      this.sendPhone();
    } else {
      this.error_phone = true;
    }

  }

  public changePhone() {
    this.error_phone = false;
  }

  public sendPhone() {
    const url = "https://mok.flexcore.ru/client/registerP/";
    const data = "action=registerP&phone=8" + this.phone + "&type=courier";
    var self = this;
    this.sendPost(url, data).subscribe((res: any) => {
      this.state$.unsetNotification('internet');
      if (res.success == 'true') {
        self.authStep();
      } else {
        this.showLoginError(4);
      }
    }, (err) => {
      this.showLoginError(3);
    })
    this.startTimer();
  }

  public sendPost(url, data) {
    console.log('send_data', data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Headers': '*'
      })
    };

    return this.http.post(url, data, httpOptions);
  }

  public authStep() {
    this.auth_step = true;
    this.loader = false;
  }

  public enterCode() {
    var url = "https://mok.flexcore.ru/courier/authP/";
    var data = "action=authP&phone=8" + this.phone + "&code=" + this.code + "&type=courier";

    var self = this;
    this.sendPost(url, data).subscribe((res: any) => {
      console.log('sendCode', res);

      if (res.success == 'true') {
        self.login(res.user);
      } else {
        self.error_phone = true;
      }
    })
  }

  public login(courier) {
    let base = "33dbcda2db5311e39760309e88d17f08," + courier;
    localStorage.setItem('cId', courier);
    var self = this;
    let a_data = {
      'action': 'auth',
      'barcode': base,
    };

    this.auth.login(a_data).subscribe((data: any) => {

      if (data.success == "true") {
        self.router.navigate(['balance']);
        self.auth.initLogin();
      } else {
        self.auth.showError(1);
      }
    });
  }

  public showLoginError(err_n) {
    switch (err_n) {
      case 3:
        this.loader = false;
        this.phone = null;
        this.pl_window = false;
        this.auth.showError(err_n);
        break;
      case 4:
        this.loader = false;
        this.phone = null;
        this.pl_window = false;
        this.auth.showError(err_n);
        break;
    }

  }

  public startTimer() {
    if (this.resend_dis) {
      return false;
    }
    this.resend_dis = true;
    this.dis_timer = 30;
    var self = this;

    this.state$.interval_1ss.pipe(takeUntil(this.$stopTimer)).subscribe(() => {
      self.dis_timer--;
      if (self.dis_timer == 0) {
        self.dis_timer = null;
        self.$stopTimer.next();
        self.resend_dis = false;
      }
    });
  }

  public reEnterPhone() {
    if (this.resend_dis) {
      return false;
    }
    this.sendPhone();
  }

  public changeCode() { }
}
