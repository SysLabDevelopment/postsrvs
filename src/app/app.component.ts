import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Route, Router } from "@angular/router";
import { NavService } from "./services/nav.service";
import { CourierService } from "./services/courier.service";
import { AuthService } from "./services/auth.service";
import { SettingsService } from "./services/settings.service";
import { environment } from "../environments/environment";
import { WiredIconButton, WiredButton } from "wired-elements";
import { Environment } from "@ionic-native/google-maps";
import { AppUpdate } from "@ionic-native/app-update/ngx";
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent {
  public nav: any = 2;
  public routingModeAuto: boolean;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nav_s: NavService,
    private router: Router,
    public courier: CourierService,
    public auth: AuthService,
    public settings: SettingsService,
    private appUpdate: AppUpdate
  ) {
    this.initializeApp();
    const updateUrl = "https://nextgen.postsrvs.ru/admin/update.xml";
    this.appUpdate.checkAppUpdate(updateUrl).then(() => {
      console.log("Awesome Update available!");
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (this.settings.rules.typeRoute == "standart") {
        this.routingModeAuto = false;
      }
      Environment.setEnv({
        // api key for server
        API_KEY_FOR_BROWSER_RELEASE: "AIzaSyDSWxDW_twugay-5q2T3aEuER8Lph5d164",

        // api key for local development
        API_KEY_FOR_BROWSER_DEBUG: "AIzaSyDSWxDW_twugay-5q2T3aEuER8Lph5d164",
      });
    });
    const self = this;
    this.nav_s.tabNav.subscribe((data) => {
      self.nav = data;
    });
    console.info("Сложная фича добавлена!");
  }

  public navTo(index) {
    switch (index) {
      case 1:
        this.router.navigate(["balance"]);
        break;
      case 2:
        this.router.navigate(["map"]);
        break;
      case 3:
        this.router.navigate(["courier"]);
        break;
      case 0:
        this.router.navigate(["login"]);
        break;
    }
  }
}
