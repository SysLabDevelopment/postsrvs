import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Device } from "@ionic-native/device/ngx";
import {
  Environment,
  GoogleMap,
  GoogleMapOptions,
  GoogleMaps,
  GoogleMapsEvent,

  LocationService, MapTypeId
} from "@ionic-native/google-maps";
import { Platform, PopoverController } from "@ionic/angular";
import { Observable, Subject } from "rxjs";
import { filter, map, tap } from "rxjs/operators";
import { Order } from 'src/app/interfaces/order';
import { Response } from '../../interfaces/response';
import { SysService } from "../sys.service";
@Injectable({
  providedIn: "root",
})
export class MapService {
  public orders: Array<any>;
  map: GoogleMap;
  public infoUpdated = new Subject();
  constructor(
    private http: HttpClient,
    private device: Device,
    private platform: Platform,
    private router: Router,
    public viewCtrl: PopoverController,
    private sys: SysService
  ) { }

  public getWay(coords: { lt: number; lg: number }): Observable<Order[]> {
    const url =
      "http://mobile.postsrvs.ru:8080/https://mobile.postsrvs.ru/mobile/orders";
    let data = {
      action: "getWayShort",
      lt: coords?.lt,
      lg: coords?.lg,
      auto: 0,
      mode: "auto",
      uuid: this.sys.getUuid(),
    };
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json",
      }),
    };
    return this.http.post<Response>(url, data, httpOptions).pipe(
      tap((resp) => {
        resp.success || this.sys.presentToast('Попробуйте еще раз', 'danger', 'Ошибка')
      }),
      filter(resp => resp.success as boolean),
      map(resp => resp.orders));
  }

  async attachMap(
    divId: string,
    options?: GoogleMapOptions
  ): Promise<GoogleMap> {
    options = options || {};

    if (this.map) {
      await new Promise((resolve) => {
        const instance: any = setInterval(() => {
          if (document.querySelectorAll("#" + divId).length > 0) {
            clearInterval(instance);
            resolve();
          }
        }, 100);
      });
      await this.map.setDiv(divId);
      await new Promise((resolve) => {
        setTimeout(resolve, 100);
      });
      if (options) {
        options.mapType = options.mapType || MapTypeId.NORMAL;
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
      API_KEY_FOR_BROWSER_RELEASE: "AIzaSyDSWxDW_twugay-5q2T3aEuER8Lph5d164",
      API_KEY_FOR_BROWSER_DEBUG: "AIzaSyDSWxDW_twugay-5q2T3aEuER8Lph5d164", // optional
    });

    let mapOptions: GoogleMapOptions = options || {};
    this.map = GoogleMaps.create(divId, options);
    return new Promise((resolve) => {
      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        resolve();
      });
    });
  }

  detachMap() {
    if (!this.map) return;
    this.map.setDiv();
    this.map.off();
    this.map.setOptions({
      camera: {
        target: {
          lat: 0,
          lng: 0,
        },
        zoom: 1,
        bearing: 0,
        tilt: 0,
        padding: 0,
      },
      gestures: {
        scroll: true,
        tilt: true,
        rotate: true,
        zoom: true,
      },
      controls: {
        compass: true,
        indoorPicker: true,
        myLocationButton: true,
        myLocation: true, // (blue dot)
        zoom: true, // android only
        mapToolbar: true,
      },
      preferences: {
        zoom: null, // reset min,max zoom
        building: true,
        clickableIcons: false, // POI icons clickable = false
        restriction: null, // reset restriction
      },
    });
    this.map.clear();
  }

  orderDetails(orderId: string) {
    console.log("sys:: переход на страницу заказа ", orderId);
    this.router.navigate(["/order", orderId]);
    localStorage.removeItem("needOrder");
    this.viewCtrl.dismiss();
  }

  public navigate(page: any) {
    this.router.navigate(page);
  }

  public showRoute(order: Order) {
    const meta = {
      label: 'showRouteToOrder',
      order
    };
    this.infoUpdated.next(meta);
    this.router.navigate(['map']);
  }

  public getMyLocation() {
    return LocationService.getMyLocation();
  }
}
