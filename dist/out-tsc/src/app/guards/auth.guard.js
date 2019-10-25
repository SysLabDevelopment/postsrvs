import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../services/nav.service';
import { StateService } from '../services/state.service';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(nav_s, state, router) {
        this.nav_s = nav_s;
        this.state = state;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        console.log('AuthGuard#canActivate called', next.routeConfig.path);
        var url = next.routeConfig.path;
        console.log('guard_url', url);
        console.log('quard_sate', state);
        console.log('quard_next', next);
        switch (url) {
            case 'courier':
                console.log('next tab  3');
                this.nav_s.tabNav.next(3);
                break;
            case 'map':
                console.log('next tab  2');
                this.nav_s.tabNav.next(2);
                break;
            case 'balance':
                console.log('next tab  2');
                this.nav_s.tabNav.next(1);
                break;
            case 'login':
                console.log('login_guard');
                if (this.state.g_state.getValue() == 'login') {
                    return false;
                }
            default:
                this.nav_s.tabNav.next(0);
                break;
        }
        return true;
    };
    AuthGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [NavService, StateService, Router])
    ], AuthGuard);
    return AuthGuard;
}());
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map