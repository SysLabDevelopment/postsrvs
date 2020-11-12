import {
  Component,
  OnInit
} from '@angular/core';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import {
  DirectionsRenderer,
  DirectionsResult,
  GoogleMap,
  GoogleMapOptions,
  GoogleMaps,
  GoogleMapsEvent,
  ILatLng,
  ILatLngBounds,
  LocationService,
  Marker,
  MarkerCluster,
  MarkerOptions,
  MyLocation
} from '@ionic-native/google-maps';
import { NavController, Platform, PopoverController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { Order } from 'src/app/interfaces/order';
import { OrderComponent } from '../../components/order/order.component';
import { Meta } from '../../interfaces/meta';
import { AuthService } from '../../services/auth.service';
import { NavService } from '../../services/nav.service';
import { StateService } from '../../services/state.service';
import { DataService } from '../../services/sys/data.service';
import { Response } from './../../interfaces/response';
import { CourierService } from './../../services/courier.service';
import { SettingsService } from './../../services/settings.service';
import { SysService } from './../../services/sys.service';
import { MapService } from './../../services/sys/map.service';

declare let google: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapPage implements OnInit {
  map: GoogleMap;
  orders: Array<Order> | null;
  coords: { lt: number; lg: number };
  userId: string = localStorage.user;
  public isMapPreparing = false;
  myLocation: MyLocation;
  public out_process = false;
  public out_counter = 0;
  public local_stop$: Subject<any> = new Subject();
  markers: Array<MarkerOptions>;
  existsGeos: Array<number>[] = [];
  sliderOptions = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  renderer: DirectionsRenderer = null;
  private origin: ILatLng = {
    lat: 55.755826,
    lng: 37.6173,
  };
  bounds: ILatLngBounds;
  public routeToOrder = false;
  public destination: ILatLng;
  public currentOrder = '';
  directionsService = new google.maps.DirectionsService;

  constructor(
    public state$: StateService,
    public platform: Platform,
    private settings: SettingsService,
    private courier: CourierService,
    private sys: SysService,
    private sysMap: MapService,
    private auth: AuthService,
    private nav: NavService,
    public popoverController: PopoverController,
    private data: DataService,
    private storage: Storage,
    private firebase: FirebaseX,
    public navCtrl: NavController,
  ) {
  }

  ngOnInit() {
    console.log('sys:: map init');

    this.getOrdersId()
      .pipe(filter((ids) => ids.length > 0))
      .subscribe((ids: Array<any>) => {
        this.getOrders(ids).subscribe((res: Response) => {
          this.orders = res.orders;
          console.log('sys:: заказы', this.orders);
          this.orders && this.data.orders.next(this.orders);
          this.drawData(this.settings.rules.autoStartRoute);
        });
      });
    this.state$.g_state.subscribe((state) => {
      if (state == 'login') {
        this.initContent();
      }
    });
    this.sysMap.infoUpdated.subscribe((data: Meta) => {
      let customData: any;
      if (data) {
        if (data.label == 'showRouteToOrder') {
          this.routeToOrder = true;
          this.currentOrder = String(data.order.client_id);
          customData = data;
        } else if (data.label == 'localChanges') {
          customData = data;
        }
      }

      this.map.clear().then(() => {
        this.drawData(this.settings.rules.autoStartRoute, customData);
      });
    });

    this.firebase.setScreenName('map');

  }

  ngOnDestroy() {
    this.sysMap.detachMap();
  }

  ngAfterViewInit() {
    console.log('sys:: map view init');
    this.loadMap();
    this.platform.ready().then(() => {
      this.initContent();
      LocationService.getMyLocation().then((myLocation: MyLocation) => {
        this.coords = { lt: myLocation.latLng.lat, lg: myLocation.latLng.lng };
      });
    });
    this.state$.interval_1ss.pipe(takeUntil(this.local_stop$)).subscribe(() => {
      const orderId = localStorage.getItem('needOrder');
      if (orderId) {
        this.sysMap.orderDetails(orderId);
      }
    });
  }

  ngOnChanges() {
    this.drawData(this.settings.rules.autoStartRoute);
  }

  async loadMap() {
    const options: GoogleMapOptions = {
      preferences: {
        building: false,
        clickableIcons: true,
      },
      controls: {
        myLocation: true,
        myLocationButton: true,
        zoom: true,
        compass: false,
        indoorPicker: true,
      },
      camera: {
        target: this.origin,
        zoom: 10,
      },
      gestures: {
        zoom: true,
        scroll: true
      },
    };
    this.map = await this.sysMap.attachMap('map', options);
    this.sys.checkAuth().subscribe((res: Response) => {
      if (res.success == 'false') {
        this.logout();
      } else {
        this.auth.initLogin(res.sync_id as string);
      }
    });

    this.drawData(this.settings.rules.autoStartRoute);

    this.map.on(GoogleMapsEvent.POI_CLICK).subscribe((params: any[]) => {
      console.log(params);
    });

    LocationService.getMyLocation().then((myLocation: MyLocation) => {
      this.myLocation = myLocation;
      const coordinates = this.myLocation.latLng || { lat: 55, lng: 37 };

      this.map.setCameraTarget(coordinates);
      this.map.setCameraZoom(8);
    });
  }

  // Запрос Данных о заказах с учетом настроек
  private getOrders(ids: Array<string>) {
    return this.sys.getOrders(ids);
  }

  private getOrdersId(): Observable<any> {
    return new Observable((ids) => {
      if (this.settings.rules.appMode.includes('hand')) {
        this.orders && ids.next(this.orders.filter(order => order.status_id == 1).map((order) => order.id));
      }
    });
  }

  // Подготовка массива заказов к отрисовке в виду не рабочести markerCluster
  private markeredOrders(orders: Array<any>) {
    const markeredOrders: MarkerOptions[] = [];
    orders?.forEach((order: Order) => {
      const info = this.createInfoContent(order);
      this.existsGeos.push([Number(order.lt), Number(order.lg)]);
      markeredOrders.push({
        position: {
          lat: Number(order.lt),
          lng: Number(order.lg),
        },
        name: order.id,
        info

      });
    });
    return markeredOrders;
  }

  public drawData(autoStartRoute: string = '0', customData: any = null, drawOrders?: Order[]) {
    if (this.map !== undefined) {
      this.map.clear().then(async () => {
        const rules = await this.settings.getRules(this.auth.getUserId());
        if ((this.routeToOrder && customData?.label == 'showRouteToOrder') || rules.appMode.includes('auto')) {
          this.requestDirection(parseFloat(customData.order.lt), parseFloat(customData.order.lg));
          this.addCluster(this.markeredOrders([customData.order]));
        } else {
          this.routeToOrder = false;
          if (autoStartRoute == '0') {
            if (!drawOrders) { drawOrders = await this.storage.get('orders'); }
            this.orders = drawOrders.filter((order: Order) => order.status_id == 1);
            this.addCluster(this.markeredOrders(this.orders));
          }
        }
      });

    }
  }

  public signOut() {
    setTimeout(() => {
      this.out_counter = 0;
      this.out_process = false;
    }, 1000);

    if (this.out_process) {
      this.out_counter++;
      if (this.out_counter == 2) {
        this.sys.showAlert('Аккаунт Postservice', 'Вы уверены, что хотите выйти?', { ok: this.logout.bind(this), cancel: console.log })
      }
    } else {
      this.out_process = true;
    }
  }

  public logout() {
    this.map.clear();
    localStorage.clear();
    this.storage.clear().then(() => {
      console.log('sys:: Сторож очищен');
      this.storage.keys().then((keys) => console.log('записи в стораже: ', keys));
    });
    this.data.ordersMap.clear();


    const url = 'orders';
    const data = { action: 'logout' };

    const self = this;
    this.auth.sendPost(url, data).subscribe((data: any) => {
      if (data.success == 'true') {
        self.auth.logout();
      }
    });
  }

  initContent() {
    this.sys.checkAuth().subscribe((res: Response) => {
      if (res.sync_id !== undefined) {
        this.settings.getSettings(res.sync_id as string);
        this.auth.setUser(res.sync_id as string);
        this.courier.getBalance(res.sync_id as number, 1).subscribe((data: any) => {
          this.courier.ordersInfo = data.res_more;
          this.courier.count_orders(data.res_more);
          this.orders = data.res_more;
          this.state$.orders.next(data.res_more);
          this.getOrdersId()
            .pipe(filter((ids) => ids.length > 0))
            .subscribe((ids: Array<any>) => {
              this.getOrders(ids).subscribe((res: Response) => {
                this.storage.get('orders').then((orders) => {
                  if (orders == null) {
                    this.data.orders.next(res.orders);
                  } else {
                    this.data.orders.next(orders);
                  }
                });
                this.orders = res.orders;
                if (
                  this.settings.rules.appMode.toLowerCase().includes('auto')
                ) {
                  this.orders.length = 1;
                }
                console.log('sys:: заказы', this.orders);
                this.data.orders.next(this.orders);
                this.drawData(this.settings.rules.autoStartRoute, null, res.orders);
              });
            });
        });
      }
    });
  }

  addCluster(markeredOrders: MarkerOptions[]) {
    const options = {
      maxZoomLevel: 14,
      markers: markeredOrders,
      boundsDraw: false,
      icons: [
        {
          min: 2,
          url: './assets/markercluster/pipka.png',
          label: {
            color: 'black',
            bold: true,
            fontSize: 16,
          },
          anchor: { x: 16, y: 16 },
        },
      ],
    };
    const markerCluster: MarkerCluster = this.map.addMarkerClusterSync(options);
    console.log(`sys:: MarkerCluster added: `, markerCluster);
    markerCluster.on(GoogleMapsEvent.MARKER_CLICK).subscribe(async (params) => {
      const marker: Marker = params[1];
      const popover = await this.popover(GoogleMapsEvent.MARKER_CLICK, marker.get('info'));
      popover.present();
    });

  }

  createInfoContent(order: Order) {
    const sameGeoOrders: Array<any> = this.orders.filter(
      (iOrder) => iOrder.lt == order.lt && iOrder.lg == order.lg
    );
    let tabsContent = '';
    const note = localStorage.getItem(String(order.id))
      ? localStorage.getItem(String(order.id))
      : '';
    const arrows =
      sameGeoOrders.length > 1
        ? `<div class="swiper-button-prev" onClick='this.parentElement.parentElement.parentElement.slidePrev()'></div>
<div class="swiper-button-next" onClick='this.parentElement.parentElement.parentElement.slideNext()'></div>`
        : '';
    sameGeoOrders.forEach((order) => {
      tabsContent += `
      <ion-slide class='slide'>
      <div style='width: 100%;text-align: start;margin: 0 30px;'>
<span class='order-id'>${order.client_id}</span>
<hr style="background: #D6CFCF;"/>
<span class='prop'>Дата доставки: c</span>  <span class='val'>${order.datetime_from?.slice(11, 16) || ''
        }</span> <span class='prop'>До:</span> <span class='val'> ${order.datetime_to ? order.datetime_to?.slice(11, 16) : ''
        } </span>
<br/><span class='prop'>Имя:</span>  <span class='val'>${order.client_fio
        }</span>
<br/><span class='prop'>Компания:</span><span class='val'> ${order.client_name
        }</span>
<br/>
<button onClick='localStorage.setItem("needOrder",${order.id
        })' style='margin-top: 10px; width: 100%;;padding:10px;background: #2E627E;
border-radius: 4px; color:white;font-weight: 500;
font-size: 12px;
line-height: 14px;'>Детали</button>${note}
</div>
${arrows}
</ion-slide>
     `;
    });

    const frame: HTMLElement = document.createElement('div');

    frame.innerHTML = `
<style>
  .order-id{
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #2B637E;
  }
  .prop{
    color:#717171;
    font-size: 13px;
    line-height: 15px;
  }
  .val{
    color: #333333;
    font-weight: bold;
    font-size: 13px;
    line-height: 15px;
    text-align: center;
  }

  .slide{
    padding: 10px;
    width: 100%;
  }
</style>
`;
    const options = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    };

    const slides: HTMLIonSlidesElement = document.createElement('ion-slides');
    slides.innerHTML = `${tabsContent}`;
    slides.options = options;
    if (sameGeoOrders.length > 1) {
      const div = document.createElement('div');
      div.setAttribute('style', 'text-align:center;');
      div.innerText = `${sameGeoOrders.length} заказов`;
      frame.appendChild(div);
    }
    frame.appendChild(slides);
    return frame;
  }

  async popover(ev: any, content: any) {
    content = content.innerHTML;
    const popover = await this.popoverController.create({
      component: OrderComponent,
      event: ev,
      translucent: true,
      componentProps: {
        content
      },
      cssClass: 'popover'
    });
    return popover;
  }

  requestDirection(lat: number, lng: number) {
    this.destination = { lat, lng };
    this.directionsService.route({
      origin: this.myLocation.latLng,
      destination: this.destination,
      travelMode: 'DRIVING'
    },
      (result: DirectionsResult, status: string) => {
        console.log('sys:: Статус запроса directionsService:', status);
        this.bounds = result.routes[0].bounds;

        const decodedPoints = GoogleMaps.getPlugin().geometry.encoding.decodePath(
          result.routes[0].overview_polyline
        );
        this.map.addPolyline({
          points: decodedPoints,
          color: '#4a4a4a',
          width: 4,
          geodesic: false
        });
        this.map.addMarkerSync({ position: this.destination });

        // if (!this.renderer) {
        //   this.renderer = this.map.addDirectionsRendererSync({
        //     'directions': result,
        //     'panel': 'guide',
        //     'markerOptions': {
        //       visible: false
        //     }
        //   });
        //   this.renderer.on(GoogleMapsEvent.DIRECTIONS_CHANGED).subscribe(this.onDirectionChanged.bind(this));
        // } else {

        //   this.renderer.setDirections(result);
        // }
      });
  }



}
