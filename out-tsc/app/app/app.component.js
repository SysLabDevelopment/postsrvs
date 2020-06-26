import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { NavService } from './services/nav.service';
import { CourierService } from './services/courier.service';
import { AuthService } from './services/auth.service';
import { SettingsService } from './services/settings.service';
import { Environment } from '@ionic-native/google-maps';
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, nav_s, router, courier, auth, settings) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.nav_s = nav_s;
        this.router = router;
        this.courier = courier;
        this.auth = auth;
        this.settings = settings;
        this.nav = 0;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            if (this.settings.rules.typeRoute == 'standart') {
                this.routingModeAuto = false;
            }
            Environment.setEnv({
                // api key for server
                'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDSWxDW_twugay-5q2T3aEuER8Lph5d164',
                // api key for local development
                'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDSWxDW_twugay-5q2T3aEuER8Lph5d164',
            });
        });
        const self = this;
        this.nav_s.tabNav.subscribe((data) => {
            self.nav = data;
        });
    }
    navTo(index) {
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
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
    }),
    __metadata("design:paramtypes", [Platform,
        SplashScreen,
        StatusBar,
        NavService,
        Router,
        CourierService,
        AuthService,
        SettingsService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map