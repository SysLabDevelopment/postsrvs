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
  GoogleMapsAnimation,
  MarkerCluster,
  MarkerLabel,
  MarkerClusterIcon
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
  htmlInfoWindow = new HtmlInfoWindow();
  public local_stop$: Subject<any> = new Subject();
  markers: Array<MarkerOptions>;
  icons = [];
  data = [];

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
    this.addCluster(this.dummyData());
    return false;
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

  addCluster(data) {


    let labelOptions: MarkerLabel = {
      bold: true,
      fontSize: 15,
      color: "white",
      italic: true
    };
    let clusterIcons: MarkerClusterIcon[] = [
      { min: 2, max: 100, url: "assets/small.png", anchor: { x: 16, y: 16 }, label: labelOptions },
      { min: 100, url: "assets/large.png", anchor: { x: 16, y: 16 }, label: labelOptions },
    ];

    let options: MarkerClusterOptions = {
      markers: this.dummyData(),
      icons: clusterIcons,
      boundsDraw: true,
      maxZoomLevel: 15
    };
    let cluster: MarkerCluster = this.map.addMarkerClusterSync(options);
    // this.map.addMarkerCluster(options).then((markerCluster: MarkerCluster) => {

    //   console.log('sys:: markerCluster: ', markerCluster)
    // });
  }

  dummyData() {
    return [
      {
        "position": {
          "lat": 55,
          "lng": 37
        },
        "name": "Starbucks - HI - Aiea  03641",
        "address": "Aiea Shopping Center_99-115\nAiea Heights Drive #125_Aiea, Hawaii 96701",
        "icon": "blue"
      },
      {
        "position": {
          "lat": 55,
          "lng": 37
        },
        "name": "Starbucks - HI - Aiea  03642",
        "address": "Pearlridge Center_98-125\nKaonohi Street_Aiea, Hawaii 96701",
        "icon": "blue"
      },

    ];
  }

}
