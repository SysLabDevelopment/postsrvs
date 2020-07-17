import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable,Subject,from } from 'rxjs';
import { tap, retry, debounceTime, filter } from 'rxjs/operators';
import { SysService } from '../services/sys.service';
import { CacheService } from "ionic-cache";
import { Network } from '@ionic-native/network/ngx';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {
  private isOnline = true;
  constructor(
    public sys: SysService,
     private cache: CacheService,
     private network: Network
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): any {
    let url = request.url;
    let cacheKey = url+request.body?.action;
    let req =  next.handle(request).pipe(
      tap(
        event => {},
        error => {
          if (error instanceof HttpErrorResponse) {
            // this.sys.presentToast('Ошибка сети (или сервера)', 'warning');
          }
        }
      ),
      filter(response=>!(response instanceof HttpErrorResponse))
    );
      
      
    
    return this.completedResponse(cacheKey,req);
   
  }

   private completedResponse(cacheKey,req): Observable<any>{
    let response = new Subject();
    if(this.network.type !== 'none'){
      this.cache.removeItem(cacheKey).then(()=>{
        response.next()
      })
    }
    return this.cache.loadFromObservable(cacheKey,req).pipe(
            tap(
              resp=>{
                console.log(`sys:: returned response: `, resp.body)
              }
            )
          )
  }

}