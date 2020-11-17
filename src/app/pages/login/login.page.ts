import {
  animate, state,
  style,

  transition, trigger
} from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MapService } from 'src/app/services/sys/map.service';
import { AuthService } from '../../services/auth.service';
import { CourierService } from '../../services/courier.service';
import { SettingsService } from '../../services/settings.service';
import { StateService } from '../../services/state.service';
import { SysService } from '../../services/sys.service';

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
  public pl_window: boolean = false;
  public error_phone: boolean = false;
  public phone = '';
  public loader: boolean = false;
  public auth_step: boolean = false;
  public code: string = null;
  public resend_dis: boolean = false;
  public dis_timer: number = null;
  public $stopTimer: Subject<any> = new Subject();
  @ViewChild('input') input: HTMLInputElement;

  constructor(private auth: AuthService,
    private router: Router,
    private alert: AlertController,
    private plt: Platform,
    private http: HttpClient,
    public state$: StateService,
    private AP: AndroidPermissions,
    public courier: CourierService,
    public settings: SettingsService,
    public sys: SysService,
    public sysMap: MapService,
    private firebase: FirebaseX
  ) {
    const self = this;

    // проверяет авторизован ли пользователь на сервере
    this.plt.ready().then((readySource) => {
      console.log('sys:: платформа готова:', readySource);
      if (readySource == 'android') {
        this.AP.requestPermission(this.AP.PERMISSION.ACCESS_FINE_LOCATION);
      }
      this.auth.checkAuth().subscribe((data: any) => {
        if (data.success == 'true') {
          this.auth.setUser(data.sync_id);
          this.settings.getSettings(data.sync_id);
          self.router.navigate(['map']);
          self.auth.initLogin();
        } else {
        }
      })
    })


  }

  ngOnInit() {
    if (localStorage.debug == 'true') {
      this.auth.isDebug = true;
    }
    this.firebase.setScreenName('login');
  }



  public scanAuth() {
    const self = this;
    this.auth.scanData().then((data) => {
      const id = data.text.slice(0, -4);
      localStorage.setItem('cId', id);
      const a_data = {
        action: 'auth',
        barcode: data.text,
        // 'barcode': '33dbcda2db5311e39760309e88d17f08,3431',
      };
      self.auth.login(a_data).subscribe((data: any) => {
        if (data.success == 'true') {
          self.auth.initLogin(data.sync_id);
          this.auth.setUser(data.sync_id);
          this.settings.getSettings(data.sync_id);
          self.router.navigate(['map']);
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
    const url = `${this.sys.proxy}https://mok.flexcore.ru/client/registerP/`;
    const data = `action=registerP&phone=8${this.phone}&type=courier`;
    const self = this;
    this.sendPost(url, data).subscribe((res: any) => {
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

  public sendPost(url: string, data: any) {
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
    const url = `${this.sys.proxy}https://mok.flexcore.ru/courier/authP/`;
    const data = `action=authP&phone=8${this.phone}&code=${this.code}&type=courier`;

    const self = this;
    this.sendPost(url, data).subscribe((res: any) => {
      if (res.success == 'true') {
        self.login(res.user);
      } else {
        self.error_phone = true;
      }
    })
  }

  public login(courier: string) {
    const base = `33dbcda2db5311e39760309e88d17f08,${courier}`;
    localStorage.setItem('cId', courier);
    const self = this;
    const a_data = {
      action: 'auth',
      barcode: base,
    };

    this.auth.login(a_data).subscribe((data: any) => {
      if (data.success == 'true') {
        this.auth.setUser(data.sync_id);
        this.settings.getSettings(data.sync_id);
        self.router.navigate(['map']);
        self.auth.initLogin();
      } else {
        self.auth.showError(1);
      }
    });
  }

  public showLoginError(err_n: number) {
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
    const self = this;

    this.state$.interval_1ss.pipe(takeUntil(this.$stopTimer)).subscribe(() => {
      self.dis_timer--;
      if (self.dis_timer == 0) {
        self.dis_timer = null;
        self.$stopTimer.next(null);
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
