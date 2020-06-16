import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Route, Router } from '@angular/router';
import { NavService } from './services/nav.service';
import { CourierService } from './services/courier.service';
import { AuthService } from './services/auth.service';
import { SettingsService } from './services/settings.service';
import { environment } from '../environments/environment';
import { WiredIconButton, WiredButton } from 'wired-elements';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public nav: any = 0;
  public routingModeAuto: boolean;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nav_s: NavService,
    private router: Router,
    public courier: CourierService,
    public auth: AuthService,
    public settings: SettingsService
  ) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (this.settings.rules.typeRoute == 'standart') {
        this.routingModeAuto = false
      }
    });
    var self = this;
    this.nav_s.tabNav.subscribe((data) => {
      self.nav = data;
    })
  }

  public navTo(index) {
    switch (index) {
      case 1:
        this.router.navigate(['balance']);
        break;
      case 2:
        this.router.navigate(['map']);
        break;
      case 3:
        this.router.navigate(['courier']);
        break;
      case 4:
        // this.router.navigate(['history']);
        break;
    }
  }

}
