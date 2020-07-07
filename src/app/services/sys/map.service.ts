import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation/ngx';
import { Device } from '@ionic-native/device/ngx';
import { Response } from './../../interfaces/response';
import { Observable } from 'rxjs';
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent,
  GoogleMapOptions, Environment
} from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class MapService {
  public orders: Array<any>
  map: GoogleMap;

  constructor(
    private http: HttpClient,
    private geo: Geolocation,
    private device: Device,
    private platform: Platform,
    private router: Router
  ) { }

  public getWay(coords: { lt: number, lg: number }): Observable<any> {
    const url = 'http://mobile.postsrvs.ru:8080/https://postsrvs.ru/mobile/orders';
    let data = {
      'action': 'getWay',
      'lt': coords?.lt,
      'lg': coords?.lg,
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


  async attachMap(divId: string, options?: GoogleMapOptions): Promise<GoogleMap> {
    options = options || {};

    if (this.map) {
      await (new Promise((resolve) => {
        const instance: any = setInterval(() => {
          if (document.querySelectorAll('#' + divId).length > 0) {
            clearInterval(instance);
            resolve();
          }
        }, 100);
      }));
      await this.map.setDiv(divId);
      await new Promise((resolve) => {
        setTimeout(resolve, 100);
      });
      if (options) {
        options.mapType = options.mapType;
        await this.map.setOptions(options);
      }
    } else {
      await this.platform.ready();
      await this._loadMap(divId, options);
    }
    return Promise.resolve(this.map);
  }

  _loadMap(divId: string, options?: GoogleMapOptions) {

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDSWxDW_twugay-5q2T3aEuER8Lph5d164',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDSWxDW_twugay-5q2T3aEuER8Lph5d164'  // optional
    });

    let mapOptions: GoogleMapOptions = options || {};
    this.map = GoogleMaps.create(divId, options);
    return (new Promise((resolve) => {
      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        resolve();
      });
    }));
  }

  detachMap() {
    if (!this.map) return;
    this.map.setDiv();
    this.map.off();
    this.map.setOptions({
      'camera': {
        'target': {
          'lat': 0,
          'lng': 0
        },
        'zoom': 1,
        'bearing': 0,
        'tilt': 0,
        'padding': 0
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      },
      'controls': {
        'compass': true,
        'indoorPicker': true,
        'myLocationButton': true,
        'myLocation': true,   // (blue dot)
        'zoom': true,          // android only
        'mapToolbar': true
      },
      'preferences': {
        'zoom': null,  // reset min,max zoom
        'building': true,
        'clickableIcons': false,  // POI icons clickable = false
        'restriction': null  // reset restriction
      }
    });
    this.map.clear();
  }

  orderDetails(orderId) {
    console.log('sys:: переход на страницу заказа ', orderId);
    this.router.navigate(['/order', orderId]);
    localStorage.removeItem('needOrder');
  }

}
