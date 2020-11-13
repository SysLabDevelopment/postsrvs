import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/internal/operators/retry';
import { tap } from 'rxjs/operators';
import { Response } from '../../interfaces/response';
import { SysService } from '../sys.service';
import { MapService } from './map.service';
@Injectable({
  providedIn: 'root'
})
export class SysCourierService {

  constructor(
    private map: MapService,
    public http: HttpClient,
    private sys: SysService
  ) { }

  public async sendStartRoute(cid: number, start?: string, stop?: string) {
    let url = 'geo/route_start.php';
    const { lat, lng } = (await this.map.getMyLocation()).latLng;
    const host = `${this.sys.proxy}https://mobile.postsrvs.ru/mobile/`;
    url = host + url;
    const data = {
      cid,
      lt: lat,
      lg: lng,
      start: start ?? '',
      stop: stop ?? '',
      uuid: this.sys.getUuid()
    };
    return this.http.post<Response>(url, data).pipe(
      retry(5),
      tap((resp) => {
        resp.success || this.sys.presentToast('Попробуйте еще раз', 'danger', 'Ошибка')
      })
    );
  }
}
