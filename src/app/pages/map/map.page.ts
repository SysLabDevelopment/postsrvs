import { Observable } from 'rxjs';
import { MapService } from './../../services/sys/map.service';
import { Response } from './../../interfaces/response';
import { SysService } from './../../services/sys.service';
import { CourierService } from './../../services/courier.service';
import { SettingsService } from './../../services/settings.service';
import { Component, OnInit, ViewChild, ElementRef, OnChanges } from '@angular/core';
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
  GoogleMapsAnimation,
  MarkerCluster,
  MarkerLabel,
  MarkerClusterIcon,
  CameraPosition
} from '@ionic-native/google-maps';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { NavService } from '../../services/nav.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
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
  public local_stop$: Subject<any> = new Subject();
  markers: Array<MarkerOptions>;
  icons = [];
  data = [];
  existsGeos = [];
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
    this.state$.interval_1ss.pipe(takeUntil(this.local_stop$)).subscribe(() => {
      let orderId = localStorage.getItem('needOrder');
      if (orderId) {
        this.sysMap.orderDetails(orderId)
      }
    })
  }

  ngOnChanges() {
    this.drawData(this.settings.rules.autoStartRoute);
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
        'zoom': true
      },
      'camera': {
        'target': {
          "lat": 55.755826,
          "lng": 37.6173
        },
        zoom: 10
      },
      'gestures': {
        'zoom': true
      }
    }
    this.map = await this.sysMap.attachMap('map', options);
    this.sys.checkAuth(this.version).subscribe((res: Response) => {
      if (res.success == 'false') {
        this.logout();
      }
    })

    this.drawData(this.settings.rules.autoStartRoute);

    this.map.on(GoogleMapsEvent.POI_CLICK).subscribe((params: any[]) => {
      console.log(params);
    });

    LocationService.getMyLocation().then((myLocation: MyLocation) => {
      this.myLocation = myLocation;
      const coordinates = this.myLocation.latLng || { lat: 55, lng: 37 };

      this.map.setCameraTarget(coordinates);
      this.map.setCameraZoom(8);


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

  //Подготовка массива заказов к отрисовке в виду не рабочести markerCluster
  markeredOrders(orders: Array<any>) {

    let markeredOrders = [];
    orders.forEach((order) => {


      this.existsGeos.push([order.lt, order.lg]);
      markeredOrders.push(
        {
          "position": {
            "lat": order.lt,
            "lng": order.lg
          },
          "name": order.id,
          "info": this.createInfoContent(order),
          "icon": "assets/markercluster/marker.png"
        },
      );
    });
    return markeredOrders;
  }

  private drawData(autoStartRoute: string) {

    if (this.map !== undefined) {
      if (autoStartRoute == '0') {
        this.addCluster(this.markeredOrders(this.orders));
        return false;


      }
    } else {
    }
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
    this.map.clear();
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

  addCluster(markeredOrders) {
    let markerCluster: MarkerCluster = this.map.addMarkerClusterSync({
      markers: markeredOrders,
      icons: [
        {
          min: 4,
          url: "./assets/markercluster/pipka.png",
          label: {
            color: "black",
            bold: true,
            fontSize: 16
          }
        }
      ]
    });
    markerCluster.on(GoogleMapsEvent.MARKER_CLICK).subscribe((params) => {
      let htmlInfoWindow = new HtmlInfoWindow();

      let marker: Marker = params[1];
      htmlInfoWindow.setContent(marker.get("info"), {
        'width': '300px',
        'height': '200px',
      });


      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        htmlInfoWindow.open(marker);
      });
    });


  }

  createInfoContent(order) {
    let sameGeoOrders: Array<any> = this.orders.filter(iOrder => (iOrder.lt == order.lt && iOrder.lg == order.lg));
    let tabsContent = '';
    let note = (localStorage.getItem(order.id) ? localStorage.getItem(order.id) : '');
    let from = order.datetime_from || '';
    let checked = 'checked';
    let controls = '';
    let labels = '';
    let selectors = '';
    let margin = 0;
    let selectors1 = '';
    let count = 1;
    let selectors2 = '';
    let comma = ',';
    sameGeoOrders.forEach((order) => {
      if (sameGeoOrders.length == count) {
        comma = ''
      }
      controls += `<input ${checked} type="radio" name="slider" id="slide${order.id}" class="set" />`;
      checked = '';
      tabsContent += `
<div class="slide">
<b>Заказ ${order.id}</b>
<br/>
Доставка:
<br/> c  ${from} 
<br/>  ${(order.datetime_to ? order.datetime_to : '')} 
<br/>
<b>Компания:</b> ${order.client_name}
<br/><b>Клиент:</b>  ${order.client_fio}
<button onClick='localStorage.setItem("needOrder",${order.id})' style='width: 100%;background-color: #ffdb4d;padding:10px'>Детали</button>${note}
</div>
     `;

      labels += `<label for="slide${order.id}"></label>`;
      selectors += `#slide${order.id}:checked ~ .mask .overflow { margin-left:${margin}%; } `;
      margin -= 100;
      selectors1 += `#slide${order.id}:checked ~ #controls label:nth-child(${(count + 1)})${comma} `;
      selectors2 += `#slide${order.id}:checked ~ #controls label:nth-child(${count - 1})${comma} `;
      count++;

    })

    let frame: HTMLElement = document.createElement('div');
    frame.innerHTML = `
<style>

input.set { display:none; }
${selectors}
#slides { 
  margin:0;
   position:relative; 
width:80%;
height:200px;
background:#2b637e;
}
#slides .mask { 
  width:90%;
  overflow:hidden;
  margin:auto;
  height: 200px;
  }
#slides .overflow {
   width:${sameGeoOrders.length * 100}%;
    -webkit-transform:translateZ(0); -webkit-transition:all 0.5s ease-out; -moz-transition:all 0.5s ease-out; -o-transition:all 0.5s ease-out; transition:all 0.5s ease-out; }
#slides .slide {
  width:${(1 / sameGeoOrders.length) * 100}%;
  height:200px;
  float:left;
  background:#fff;
}
#controls { width:100%;
}
#controls label { display:none; width:5%; height:60px; opacity:0.3; position:absolute; top:50%; margin-top:-30px; cursor:pointer; background:#000; }
#controls label:hover { opacity:0.8; }
${selectors1} { right:0; display:block; }
${selectors2} { left:0; display:block; }
</style>
<div id="slides">
  ${controls}
    <div class="mask">    
      <div class="overflow">
        ${tabsContent}
      </div>    
    </div>
    <div id="controls" onclick=""> 
      ${labels}
    </div>
</div>

`;


    return frame;
  }


}
