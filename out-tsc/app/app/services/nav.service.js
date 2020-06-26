import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let NavService = class NavService {
    constructor() {
        this.tabNav = new BehaviorSubject(0);
    }
};
NavService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], NavService);
export { NavService };
//# sourceMappingURL=nav.service.js.map