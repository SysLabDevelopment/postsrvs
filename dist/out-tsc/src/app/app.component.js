import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { NavService } from './services/nav.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, nav_s, router) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.nav_s = nav_s;
        this.router = router;
        this.nav = 0;
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        var self = this;
        this.nav_s.tabNav.subscribe(function (data) {
            console.log('tab_data', data);
            self.nav = data;
        });
    };
    AppComponent.prototype.navTo = function (index) {
        console.log('nav_to', index);
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
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            NavService,
            Router])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map