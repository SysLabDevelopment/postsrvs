import { Observable } from 'rxjs';
import { MapService } from './../../services/sys/map.service';
import { Response } from './../../interfaces/response';
import { SysService } from './../../services/sys.service';
import { CourierService } from './../../services/courier.service';
import { SettingsService } from './../../services/settings.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StateService } from '../../services/state.service';
import { Platform, NavController } from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMapsEvent,
  LatLng,
  GoogleMapOptions,
  GoogleMap,
  LocationService,
  MyLocation,
  Marker,
  MarkerClusterOptions,
  MarkerOptions,
  HtmlInfoWindow,
  GoogleMapsAnimation
} from '@ionic-native/google-maps';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { NavService } from '../../services/nav.service';
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
  public isMapPreparing: boolean = false;
  version: string;
  myLocation: MyLocation;
  public out_process: boolean = false;
  public out_counter = 0;
  htmlInfoWindow = new HtmlInfoWindow();


  constructor(
    public state$: StateService,
    public platform: Platform,
    private router: Router,
    private settings: SettingsService,
    private courier: CourierService,
    private sys: SysService,
    private sysMap: MapService,
    private auth: AuthService,
    private appVersion: AppVersion,
    private nav: NavService,
    public googleMaps: GoogleMaps,
    public navCtrl: NavController
  ) {
    this.courier.ordersShortData.subscribe((data: Array<any>) => {
      this.orders = data;
    });



  }

  ngOnInit() {

    console.log('sys:: map init');
    this.settings.state.pipe(filter(state => state == 'hasRules')).subscribe(() => {
      this.getOrdersId().pipe(filter(ids => ids.length > 0)).subscribe((ids: Array<any>) => {
        this.getOrders(ids).subscribe((res: Response) => {
          this.orders = res.orders;
          if (this.settings.rules.appMode.toLowerCase().includes('auto')) {
            this.orders.length = 1;
          }
          console.log('sys:: заказы', this.orders);
          this.drawData(this.settings.rules.autoStartRoute);
        })

      })
    })
    this.state$.g_state.subscribe((state) => {
      if (state == 'login') {
        this.initContent()
      }
    })


  }

  ngOnDestroy() {
    this.sysMap.detachMap()
  }

  ngAfterViewInit() {
    console.log('sys:: map view init');
    this.loadMap();

    this.platform.ready().then(() => {
      this.appVersion.getVersionNumber().then((resp) => {
        this.version = resp;
      });

      this.initContent();




      LocationService.getMyLocation().then((myLocation: MyLocation) => {
        this.coords = { 'lt': myLocation.latLng.lat, 'lg': myLocation.latLng.lng }
      })
    });
  }


  async loadMap() {
    let options: GoogleMapOptions = {
      'preferences': {
        'building': false,
        'clickableIcons': true
      },
      controls: {
        'myLocation': true,
        'myLocationButton': true,
      }
    }
    this.map = await this.sysMap.attachMap('map', options);

    this.map.on(GoogleMapsEvent.POI_CLICK).subscribe((params: any[]) => {
      console.log(params);
    });

    LocationService.getMyLocation().then((myLocation: MyLocation) => {
      this.myLocation = myLocation;
      const coordinates = this.myLocation.latLng || { lat: 55, lng: 37 };

      this.map.setCameraTarget(coordinates);
      this.map.setCameraZoom(8);
      this.drawData(this.settings.rules.autoStartRoute)

    })


  }



  //Запрос Данных о заказах с учетом настроек
  private getOrders(ids: Array<string>) {
    return this.sys.getOrders(ids)

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
    this.sys.checkAuth().subscribe((resp: any) => {
      if (resp.success == 'false') {
        this.auth.logout()
      }
    })
    this.orders?.forEach((order) => {
      let htmlInfoWindow = new HtmlInfoWindow();

      let note = (localStorage.getItem(order.id) ? localStorage.getItem(order.id) : '');
      let from = order.datetime_from || '';

      let frame: HTMLElement = document.createElement('div');
      frame.innerHTML = `
        <style type="text/css">
.flip-container h3 {
	font-size: 20px;
  margin: auto;
}
.flip-container img {
	width: 160px;
  height: auto;
}
/* entire container, keeps perspective */
.flip-container {
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -o-perspective: 1000;
  perspective: 1000;
}
/* flip the pane when hovered */
.flip-container.hover .flipper {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.flip-container, .front, .back {
  width: 170px;
  height: 200px;
}

/* flip speed goes here */
.flipper {
  transform-style: preserve-3d;
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
  -webkit-transition: 0.6s;
  -moz-transition: 0.6s;
  -o-transition: 0.6s;
  -ms-transition: 0.6s;
  transition: 0.6s;

  position: relative;
}

/* hide back of pane during swap */
.front, .back {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: white;

  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;

  position: absolute;
  top: 0;
  left: 0;
}

/* front pane, placed above back */
.front {
  z-index: 2;
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
}

/* back, initially hidden pane */
.back {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}
</style>
                <div id="flip-container">
        <b>Заказ ${order.id}</b><br/>
        Доставка:<br/> c  ${from} <br/>  ${(order.datetime_to ? order.datetime_to : '')} <br/>
        <b>Компания:</b> ${order.client_name}
        <br/><b>Клиент:</b>  ${order.client_fio}
        <button onClick='localStorage.setItem("needOrder",${order.id})' style='width: 100%;background-color: #ffdb4d;padding:10px'>Детали</button>${note}
                </div>`;
      htmlInfoWindow.setContent(frame, {
        'width': '170px',
      });

      const marker: Marker = this.map.addMarkerSync({
        'position': { lat: order.lt, lng: order.lg },
        'draggable': false,
        'disableAutoPan': true,
        'animation': GoogleMapsAnimation.DROP
      });

      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        htmlInfoWindow.open(marker);
      });

    })
  }

  public p_btn() {
    setTimeout(() => {
      this.out_counter = 0;
      this.out_process = false;
      console.log('outprocess_die');
    }, 1000);

    if (this.out_process) {
      this.out_counter++;
      if (this.out_counter == 2) {
        this.logout();
      }
    } else {
      console.log('outprocess_false');
      this.out_process = true;
    }
  }

  public logout() {
    localStorage.clear();
    const url = 'orders';
    const data = { 'action': 'logout' }

    let self = this;
    this.auth.sendPost(url, data).subscribe((data: any) => {
      if (data.success == 'true') {
        self.auth.logout();
      }
    })
  }

  initContent() {
    this.sys.checkAuth(this.version).subscribe((res: any) => {
      if (res.sync_id !== undefined) {
        this.settings.getSettings(res.sync_id);
        this.auth.setUser(res.sync_id);
        this.courier.getBalance(res.sync_id, 1).subscribe((data: any) => {
          this.courier.ordersInfo = data.res_more;
          this.courier.count_orders(data.res_more);
          this.orders = data.res_more;
          this.state$.orders.next(data.res_more);
          this.getOrdersId().pipe(filter(ids => ids.length > 0)).subscribe((ids: Array<any>) => {
            this.getOrders(ids).subscribe((res: Response) => {
              this.orders = res.orders;
              if (this.settings.rules.appMode.toLowerCase().includes('auto')) {
                this.orders.length = 1;
              }
              console.log('sys:: заказы', this.orders);
              this.drawData(this.settings.rules.autoStartRoute);
            }
            )
          })
        });

      }
    })
  }

  initHtmlInfoWindow(order) {
  }



}
