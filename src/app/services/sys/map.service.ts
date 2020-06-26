import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation/ngx';
import { Device } from '@ionic-native/device/ngx';
import { Response } from './../../interfaces/response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  public orders: Array<any>

  constructor(
    private http: HttpClient,
    private geo: Geolocation,
    private device: Device
  ) { }

  public getWay(coords: { lt: number, lg: number }): Observable<any> {
    const url = 'http://mobile.postsrvs.ru:8080/https://postsrvs.ru/mobile/orders';
    let data = {
      'action': 'getWay',
      'lt': coords.lt,
      'lg': coords.lg,
      'auto': 0,
      'mode': 'auto',
      'uuid': this.device.uuid
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.http.post(url, data, httpOptions)
  }
}
