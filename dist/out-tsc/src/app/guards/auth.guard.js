import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NavService } from '../services/nav.service';
import { StateService } from '../services/state.service';
import { Platform } from '@ionic/angular';
import { AppVersion } from '@ionic-native/app-version/ngx';
let AuthGuard = class AuthGuard {
    constructor(nav_s, state, router, auth, platform, appVersion) {
        this.nav_s = nav_s;
        this.state = state;
        this.router = router;
        this.auth = auth;
        this.platform = platform;
        this.appVersion = appVersion;
    }
    canActivate(next, state) {
        let url = next.routeConfig.path;
        switch (url) {
            case 'courier':
                this.nav_s.tabNav.next(3);
                break;
            case 'map':
                this.nav_s.tabNav.next(2);
                break;
            case 'balance':
                this.nav_s.tabNav.next(1);
                break;
            case 'login':
                if (this.state.g_state.getValue() == 'login') {
                    return false;
                }
            default:
                this.nav_s.tabNav.next(0);
                break;
        }
        return true;
    }
};
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [NavService,
        StateService,
        Router,
        AuthService,
        Platform,
        AppVersion])
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map