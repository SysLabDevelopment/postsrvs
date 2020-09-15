import {
  Component,
  OnInit
} from "@angular/core";
import { Router } from "@angular/router";
import {
  DirectionsRenderer,
  DirectionsResult,
  DirectionsService,
  GoogleMap,
  GoogleMapOptions, GoogleMaps,
  GoogleMapsEvent,
  ILatLng,
  ILatLngBounds,
  LocationService,
  Marker,
  MarkerCluster,
  MarkerOptions,
  MyLocation
} from "@ionic-native/google-maps/ngx";
import { NavController, Platform, PopoverController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { Observable, Subject } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";
import { Order } from 'src/app/interfaces/order';
import { OrderComponent } from "../../components/order/order.component";
import { Meta } from '../../interfaces/meta';
import { AuthService } from "../../services/auth.service";
import { NavService } from "../../services/nav.service";
import { StateService } from "../../services/state.service";
import { DataService } from "../../services/sys/data.service";
import { Response } from "./../../interfaces/response";
import { CourierService } from "./../../services/courier.service";
import { SettingsService } from "./../../services/settings.service";
import { SysService } from "./../../services/sys.service";
import { MapService } from "./../../services/sys/map.service";

declare var AppVersion: { version: string };
@Component({
  selector: "app-map",
  templateUrl: "./map.page.html",
  styleUrls: ["./map.page.scss"],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapPage implements OnInit {
  map: GoogleMap;
  orders: Array<Order> | null;
  coords: { lt: number; lg: number };
  userId: string = localStorage.user;
  public isMapPreparing: boolean = false;
  myLocation: MyLocation;
  public out_process: boolean = false;
  public out_counter = 0;
  public local_stop$: Subject<any> = new Subject();
  markers: Array<MarkerOptions>;
  existsGeos: Array<number>[] = [];
  sliderOptions = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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


  constructor(
    public state$: StateService,
    public platform: Platform,
    private router: Router,
    private settings: SettingsService,
    private courier: CourierService,
    private sys: SysService,
    private sysMap: MapService,
    private auth: AuthService,
    private nav: NavService,
    public navCtrl: NavController,
    public popoverController: PopoverController,
    private data: DataService,
    private storage: Storage
  ) {
  }

  ngOnInit() {
    console.log("sys:: map init");
    this.settings.state
      .pipe(filter((state) => state == "hasRules"))
      .subscribe(() => {
        this.getOrdersId()
          .pipe(filter((ids) => ids.length > 0))
          .subscribe((ids: Array<any>) => {
            this.getOrders(ids).subscribe((res: Response) => {
              this.orders = res.orders;
              if (this.settings.rules.appMode.toLowerCase().includes("auto")) {
                this.orders.length = 1;
              }
              console.log("sys:: заказы", this.orders);
              this.orders && this.data.orders.next(this.orders);
              this.drawData(this.settings.rules.autoStartRoute);
            });
          });
      });
    this.state$.g_state.subscribe((state) => {
      if (state == "login") {
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
          customData = data
        }
      }

      this.map.clear().then(() => {
        this.drawData(this.settings.rules.autoStartRoute, customData);
      });
    });

  }

  ngOnDestroy() {
    this.sysMap.detachMap();
  }

  ngAfterViewInit() {
    console.log("sys:: map view init");
    this.loadMap();
    this.platform.ready().then(() => {
      this.initContent();
      LocationService.getMyLocation().then((myLocation: MyLocation) => {
        this.coords = { lt: myLocation.latLng.lat, lg: myLocation.latLng.lng };
      });
    });
    this.state$.interval_1ss.pipe(takeUntil(this.local_stop$)).subscribe(() => {
      let orderId = localStorage.getItem("needOrder");
      if (orderId) {
        this.sysMap.orderDetails(orderId);
      }
    });
  }

  ngOnChanges() {
    this.drawData(this.settings.rules.autoStartRoute);
  }

  async loadMap() {
    let options: GoogleMapOptions = {
      preferences: {
        building: false,
        clickableIcons: true,
        // padding: {
        //   bottom: 10,
        // },
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
      },
    };
    this.map = await this.sysMap.attachMap("map", options);
    this.sys.checkAuth(AppVersion.version).subscribe((res: Response) => {
      if (res.success == "false") {
        this.logout();
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

  //Запрос Данных о заказах с учетом настроек
  private getOrders(ids: Array<string>) {
    return this.sys.getOrders(ids);
  }

  private getOrdersId(): Observable<any> {
    return new Observable((ids) => {
      if (this.settings.rules.typeRoute == "standart") {
        this.orders && ids.next(this.orders.filter(order => order.status_id == 1).map((order) => order.id));
      } else {
        this.sysMap.getWay(this.coords).subscribe((resp: Response) => {
          ids.next(resp.orders.map((order) => order.id));
        });
      }
    });
  }

  //Подготовка массива заказов к отрисовке в виду не рабочести markerCluster
  markeredOrders(orders: Array<any>) {
    let markeredOrders: MarkerOptions[] = [];
    orders?.forEach((order: Order) => {
      let info = this.createInfoContent(order);
      this.existsGeos.push([Number(order.lt), Number(order.lg)]);
      markeredOrders.push({
        "position": {
          "lat": parseFloat(order.lt),
          "lng": parseFloat(order.lg),
        },
        "name": order.id,
        "info": info

      });
    });
    return markeredOrders;
  }

  public drawData(autoStartRoute: string = "0", customData: any = null) {
    if (this.map !== undefined) {
      this.map.clear().then(() => {
        if (this.routeToOrder && customData.label == 'showRouteTooOrder') {
          this.requestDirection(customData.order.lt, customData.order.lg);
          this.addCluster(this.markeredOrders([customData.order]));
        } else {
          this.routeToOrder = false;
          if (autoStartRoute == "0") {
            this.storage.get('orders').then((orders) => {
              if (orders !== null) {
                this.orders = orders.filter((order: Order) => { return order.status_id == 1 });
                this.addCluster(this.markeredOrders(this.orders));
              }

            })
          }
        }
      });

    }
  }

  public p_btn() {
    setTimeout(() => {
      this.out_counter = 0;
      this.out_process = false;
      console.log("outprocess_die");
    }, 1000);

    if (this.out_process) {
      this.out_counter++;
      if (this.out_counter == 2) {
        this.logout();
      }
    } else {
      console.log("outprocess_false");
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


    const url = "orders";
    const data = { action: "logout" };

    let self = this;
    this.auth.sendPost(url, data).subscribe((data: any) => {
      if (data.success == "true") {
        self.auth.logout();
      }
    });
  }

  initContent() {
    this.sys.checkAuth(AppVersion.version).subscribe((res: Response) => {
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
                    this.data.getApiData()
                  } else {
                    this.data.orders.next(orders)
                  }
                })
                this.orders = res.orders;
                if (
                  this.settings.rules.appMode.toLowerCase().includes("auto")
                ) {
                  this.orders.length = 1;
                }
                console.log("sys:: заказы", this.orders);
                this.drawData(this.settings.rules.autoStartRoute);
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
          url: "./assets/markercluster/pipka.png",
          label: {
            color: "black",
            bold: true,
            fontSize: 16,
          },
          anchor: { x: 16, y: 16 },
        },
      ],
    };
    let markerCluster: MarkerCluster = this.map.addMarkerClusterSync(options);
    console.log(`sys:: MarkerCluster added: `, markerCluster);
    markerCluster.on(GoogleMapsEvent.MARKER_CLICK).subscribe(async (params) => {
      let marker: Marker = params[1];
      let popover = await this.popover(GoogleMapsEvent.MARKER_CLICK, marker.get('info'));
      popover.present();
    })

  }

  createInfoContent(order: Order) {
    let sameGeoOrders: Array<any> = this.orders.filter(
      (iOrder) => iOrder.lt == order.lt && iOrder.lg == order.lg
    );
    let tabsContent = "";
    let note = localStorage.getItem(String(order.id))
      ? localStorage.getItem(String(order.id))
      : "";
    let from = order.datetime_from || "";
    let arrows =
      sameGeoOrders.length > 1
        ? `<div class="swiper-button-prev" onClick='this.parentElement.parentElement.parentElement.slidePrev()'></div>
<div class="swiper-button-next" onClick='this.parentElement.parentElement.parentElement.slideNext()'></div>`
        : "";
    sameGeoOrders.forEach((order) => {
      tabsContent += `
      <ion-slide class='slide'>
      <div style='width: 100%;text-align: start;margin: 0 30px;'>
<span class='order-id'>${order.client_id}</span>
<hr style="background: #D6CFCF;"/>
<span class='prop'>Дата доставки: c</span>  <span class='val'>${order.datetime_from?.slice(11, 16) || ""
        }</span> <span class='prop'>До:</span> <span class='val'> ${order.datetime_to ? order.datetime_to?.slice(11, 16) : ""
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

    let frame: HTMLElement = document.createElement("div");

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
    let options = {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    };

    let slides: HTMLIonSlidesElement = document.createElement("ion-slides");
    slides.innerHTML = `${tabsContent}`;
    slides.options = options;
    if (sameGeoOrders.length > 1) {
      let div = document.createElement("div");
      div.setAttribute("style", "text-align:center;");
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
        'content': content
      },
      cssClass: 'popover'
    });
    return popover
  }

  private requestDirection(lat: number, lng: number) {
    this.destination = { lat, lng };

    DirectionsService.route({
      'origin': this.origin,
      'destination': this.destination,
      'travelMode': "DRIVING"
    }).then((result: DirectionsResult) => {
      console.log(JSON.stringify(result, null, 2));
      this.bounds = result.routes[0].bounds;
      if (!this.renderer) {
        this.renderer = this.map.addDirectionsRendererSync({
          'directions': result,
          'panel': 'guide',
          'polylineOptions': {
            'points':
              [
                this.origin,
                this.destination
              ]
          },
          'markerOptions': {
            visible: false
          }
        });
        this.renderer.on(GoogleMapsEvent.DIRECTIONS_CHANGED).subscribe(this.onDirectionChanged.bind(this));
      } else {
        let decodedPoints = GoogleMaps.getPlugin().geometry.encoding.decodePath(
          result.routes[0].overview_polyline
        );
        this.map.addPolyline({
          points: decodedPoints,
          'color': '#4a4a4a',
          width: 4,
          geodesic: false
        });
        this.map.addMarkerSync({ position: this.destination });
        this.renderer.setDirections(result);
      }
    });
  }
  onDirectionChanged() {
    let directions: DirectionsResult = this.renderer.getDirections();
    this.origin = directions.routes[0].legs[0].start_location;
    this.destination = directions.routes[0].legs[0].end_location;
    this.bounds = directions.routes[0].bounds;
  }
  onSplitterDragEnd() {
    this.map.animateCamera({
      'target': this.bounds,
      'duration': 500
    });

  }

}
