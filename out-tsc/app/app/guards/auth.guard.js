import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { NavService } from '../services/nav.service';
import { StateService } from '../services/state.service';
let AuthGuard = class AuthGuard {
    constructor(nav_s, state) {
        this.nav_s = nav_s;
        this.state = state;
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
        StateService])
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map