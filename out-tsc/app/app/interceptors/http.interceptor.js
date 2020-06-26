import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { SysService } from '../services/sys.service';
let HttpErrorInterceptor = class HttpErrorInterceptor {
    constructor(sys) {
        this.sys = sys;
    }
    intercept(request, next) {
        return next.handle(request).pipe(tap(event => { }, error => {
            if (error instanceof HttpErrorResponse) {
                this.sys.presentToast('Ошибка сети (или сервера)', 'warning');
            }
        }));
    }
};
HttpErrorInterceptor = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [SysService])
], HttpErrorInterceptor);
export { HttpErrorInterceptor };
//# sourceMappingURL=http.interceptor.js.map