import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, retry, debounceTime } from 'rxjs/operators';
import { SysService } from '../services/sys.service';


@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    public sys: SysService
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): any {
    return next.handle(request).pipe(
      tap(
        event => { },
        error => {
          if (error instanceof HttpErrorResponse) {
            this.sys.presentToast('Ошибка сети (или сервера)', 'warning');
          }
        }
      ));

  }


}