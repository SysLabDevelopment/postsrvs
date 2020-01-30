import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { BehaviorSubject, Subject } from 'rxjs';
import { MapService } from '../../services/map.service';
import { StateService } from '../../services/state.service';
import { WebIntent } from '@ionic-native/web-intent/ngx';
import { takeLast, takeUntil, take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

declare var ymaps: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  // public route:any; 
  public loader: boolean = false;
  // public points = null;
  // public position = null;
  // public init_geo = false;
  public page_map;
  public dislink: boolean = this.state$.disLink;
  public local_stop$: Subject<any> = new Subject();

  constructor(private route: ActivatedRoute, private geo: Geolocation, public state$: StateService, public map_s: MapService, private wi: WebIntent) {
    console.log('map_construct');

    var self = this;


    // this.map_s.buildWay();
    this.map_s.buildMap();
    console.log('sys::buildMap');
    this.state$.map_state.pipe(takeUntil(this.local_stop$)).subscribe((state) => {
      if (state == 'map_init') {
        self.map_s.buildWay();

      }
    });



    this.state$.route_state.pipe(takeUntil(this.local_stop$)).subscribe((state) => {
      if (state == 'init_done') {
        console.log('map_page_route_init');
        self.initLink();
      }
    })

    this.state$.interval_1m.pipe(takeUntil(this.local_stop$)).subscribe(() => {
      console.log('sys:: Перерисовка маршрута');
      self.map_s.changeWay();
      self.initLink();
      self.dislink = self.state$.disLink;
    });

    // if (this.state$.route_state.getValue() == 'init_done'){
    //   this.map_s.initMap();
    //   this.state$.map_event.next('reInit');
    //   this.initLink();
    //   console.log('map_page_var_1');
    // } else {
    //   var self = this;


    //   console.log('map_page_var_2');
    this.state$.route_state.pipe(takeUntil(this.state$.$stop)).subscribe((state) => {
      if (state == 'init_done') {
        console.log('map_page_var_2_init_done');
        self.initLink();

      }
    })

  }



  public intentStart() {
    const options = {
      action: this.wi.ACTION_VIEW,
      url: this.state$.link,
      package: 'ru.yandex.yandexnavi'
    }

    this.wi.startActivity(options).then((data) => {
      console.log('wi_success', data);
    });
  }

  public initLink() {

    var self = this;
    if (!this.state$.link_init) {
      console.log('link_start_subscribe');
      this.state$.linkPoints.subscribe((points) => {
        console.log('link_points_subscribe', points);
        if (points != 'not_init' || points.length < 2) {
          self.state$.disLink = false;
          let link = "yandexnavi://build_route_on_map?";
          let l_body = "";
          let l_head = "";

          for (let i = 0; i < points.length; i++) {
            if (i != points.length - 1) {
              l_body = l_body + "&lat_via_" + i + "=" + points[i][0] + "&lon_via_" + i + "=" + points[i][1];
            } else {
              l_head = "lat_to=" + points[i][0] + "&lon_to=" + points[i][1];
            }
          }

          link += l_head + l_body;

          console.log('link_points', points);
          console.log('link_str', link);
          self.state$.link = link;
        } else {
          self.state$.disLink = true;
        }
      });
      this.state$.link_init = true;
    }
  }

  ngOnDestroy() {
    console.log('map_destroy');
    this.local_stop$.next();
  }
  ngOnInit() {
    console.log('map_init');
    this.route.paramMap.subscribe((params) => {
      if (this.map_s.oneOrder) {
        this.map_s.showOrder(this.state$.coords);
      }
      if (params.get('order')) {
        console.log('sys:: координаты', this.state$.coords);

        console.log('sys:: параметры url ', params.get('order'));
        this.map_s.oneOrder = true;

      }
    });
  }

  allOrders() {
    console.log('sys::allOrders()');
    this.map_s.oneOrder = false;
    this.map_s.buildWay();
  }

  ngAfterViewInit() {
    this.state$.interval_1ss.pipe(takeUntil(this.local_stop$)).subscribe(() => {
      let orderId = localStorage.getItem('needOrder');
      if (orderId) {
        this.map_s.orderDetails(orderId)
      }
    })
  }
}
