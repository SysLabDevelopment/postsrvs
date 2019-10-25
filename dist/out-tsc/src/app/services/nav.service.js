import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var NavService = /** @class */ (function () {
    function NavService() {
        this.tabNav = new BehaviorSubject(0);
    }
    NavService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], NavService);
    return NavService;
}());
export { NavService };
//# sourceMappingURL=nav.service.js.map