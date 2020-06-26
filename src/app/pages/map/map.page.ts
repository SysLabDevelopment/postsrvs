import { Observable } from 'rxjs';
import { MapService } from './../../services/sys/map.service';
import { Response } from './../../interfaces/response';
import { SysService } from './../../services/sys.service';
import { CourierService } from './../../services/courier.service';
import { SettingsService } from './../../services/settings.service';
import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { Platform } from '@ionic/angular';
import { GoogleMaps, GoogleMapsEvent, LatLng, GoogleMapOptions, GoogleMap, LocationService, MyLocation } from '@ionic-native/google-maps/ngx';
import { Router } from '@angular/router';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation/ngx';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map: GoogleMap;
  orders: Array<any> | null;
  coords: { lt: number, lg: number };
  userId: string = localStorage.user;

  constructor(
    public state$: StateService,
    private platform: Platform,
    private router: Router,
    private settings: SettingsService,
    private courier: CourierService,
    private sys: SysService,
    private sysMap: MapService,
    private geo: Geolocation,
  ) {
    this.courier.ordersShortData.subscribe((data: Array<any>) => {
      this.orders = data;
    });

  }

  ngOnInit() {
    this.settings.state.pipe(filter(state => state == 'hasRules')).subscribe(() => {
      this.getOrdersId().pipe(filter(ids => ids.length > 0)).subscribe((ids: Array<any>) => {
        this.getOrders(ids)
          .add(this.drawData(this.settings.rules.autoStartRoute));
      })
    })



  }

  ngAfterViewInit() {
    this.platform.ready().then(() => {
      this.sys.checkAuth().subscribe((res: Response) => {
        if (res.success) {
          this.settings.getSettings(res.sync_id)
        }
      })
      this.loadMap();
      this.geo.getCurrentPosition().then((data) => {
        this.coords = { 'lt': data.coords.latitude, 'lg': data.coords.longitude }
      })
    });
  }


  loadMap() {
    LocationService.getMyLocation().then((myLocation: MyLocation) => {


      let options: GoogleMapOptions = {
        controls: {
          compass: true,
          myLocation: true,
          myLocationButton: true,
          mapToolbar: true
        },
        camera: {
          target: myLocation.latLng
        }
      };
      const map = GoogleMaps.create('map', options);




      map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
        this.router.navigate(['login'])
        const coordinates: LatLng = new LatLng(51, 37);

        map.setCameraTarget(coordinates);
        map.setCameraZoom(8);
      });
    })
  }


  //Запрос Данных о заказах с учетом настроек
  private getOrders(ids: Array<string>) {
    return this.sys.getOrders(ids).subscribe((res: Response) => {
      this.orders = res.orders;
      if (this.settings.rules.appMode.toLowerCase().includes('auto')) {
        this.orders.length = 1;
      }
      console.log('sys:: заказы', this.orders)
    })

  }

  private getOrdersId(): Observable<any> {
    return new Observable((ids) => {
      if (this.settings.rules.typeRoute == 'standart') {
        this.orders && ids.next(this.orders.map(order => order.id));
      } else {
        this.sysMap.getWay(this.coords).subscribe((resp: Response) => {
          ids.next(resp.orders.map(order => order.id))
        })

      }
    })
  }

  private drawData(autoStartRoute: string) {

  }

}
