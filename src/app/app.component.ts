import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Network } from '@ionic-native/network/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { CacheService } from 'ionic-cache';
import { Order } from 'src/app/interfaces/order';
import { AuthService } from './services/auth.service';
import { CourierService } from './services/courier.service';
import { NavService } from './services/nav.service';
import { SettingsService } from './services/settings.service';
import { StateService } from './services/state.service';
import { SysService } from './services/sys.service';
import { OrderService } from './services/sys/order.service';
import { RemoteConfigService } from './services/sys/remote-config.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  public nav: any = 2;
  public routingModeAuto: boolean;
  public checkedOnWork = true; // True = Курьер нажал кнопку "Еду на работу"
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nav_s: NavService,
    private router: Router,
    public courier: CourierService,
    public auth: AuthService,
    public settings: SettingsService,
    cache: CacheService,
    private network: Network,
    private order: OrderService,
    private firebase: FirebaseX,
    private state$: StateService,
    private sys: SysService,
    private remoteConfig: RemoteConfigService,
    private alertC: AlertController
  ) {
    this.initializeApp();
    console.log(this.platform.platforms());
    cache.setDefaultTTL(60 * 60 * 24);
    cache.itemExists('syncRequests').then((exist) => {
      if (!exist) {
        cache.saveItem('syncRequests', [])
      }
      this.network.onConnect().subscribe(() => {
        console.warn('network connected!');
        cache.getItem('syncRequests').then((syncRequests: Array<{ order: Order, newStatus: number }>) => {
          syncRequests && syncRequests.forEach((syncRequest) => {
            this.order.sendDelayedCall(syncRequest.order, syncRequest.newStatus);
          });
          cache.clearGroup('delayedCalls');
        })

      });
      this.network.onDisconnect().subscribe(() => {
        console.warn('sys:: disconnected');
      })
    })

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (this.settings.rules.typeRoute == 'standart') {
        this.routingModeAuto = false;
      }

      this.firebase.setAnalyticsCollectionEnabled(true);
      this.firebase.setCrashlyticsCollectionEnabled(true);
      this.firebase.setPerformanceCollectionEnabled(true);

      this.state$.g_state.subscribe((state: string) => {
        if (state == 'login') {
          this.sys.isCheckedToWork(this.auth.userId).subscribe((resp) => {
            if (!resp.checked) this.checkedOnWork = false;
          });
        }
      })
      this.firebase.getToken()
        .then((token) => console.log(`sys:: Токен для push'ей:  ${token}`)) // save the token server-side and use it to push notifications to this device
        .catch((error) => console.error('sys:: Ошибка получения токена', error));

      this.firebase.onMessageReceived()
        .subscribe((data: any) => {
          console.log(`sys:: Пользователь открыл пуш-уведомление ${data}`);
          if (data.updateUrl) {
            this.sys.intentStart(data.updateUrl, 'com.android.chrome');
          }

        });

      this.firebase.onTokenRefresh()
        .subscribe((token: string) => console.log(`sys:: получен новый токен${token}`));

      this.remoteConf();
    })
    const self = this;
    this.nav_s.tabNav.subscribe((data) => {
      self.nav = data;
    });


  }

  public navTo(index: number) {
    switch (index) {
      case 1:
        this.router.navigate(['balance']);
        break;
      case 2:
        this.router.navigate(['map']);
        break;
      case 3:
        this.router.navigateByUrl('/courier');
        break;
      case 0:
        this.router.navigate(['login']);
        break;
    }
  }


  public check_to_work(cId: string = this.auth.userId) {
    this.sys.check_to_work(cId).subscribe((data: any) => {
      if (data.success == true) this.checkedOnWork = true;
    })
  }

  public async remoteConf() {
    const hasNewVersion = await this.remoteConfig.isNewVersionAvailable();
    if (hasNewVersion) {
      const alert = await this.alertC.create({
        header: 'Update is available',
        message: 'Good news! A new version is available',
        cssClass: 'custom-css-class',
        buttons: [{
          text: 'Update',
          handler: async () => {
            if (this.platform.is('ios')) {
              this.sys.intentStart('https://apps.apple.com/us/app/id1491156686', 'com.android.chrome')
            } else if (this.platform.is('android')) {
              this.sys.intentStart('https://play.google.com/store/apps/details?id=postsrvs.i', 'com.android.chrome')
            }
          }
        }]
      });
      await alert.present();
    }

  }
}
