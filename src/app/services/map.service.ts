import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, interval, Observable, Subject, combineLatest } from 'rxjs';
import { takeUntil, takeWhile, merge } from 'rxjs/operators';
import { Geolocation, GeolocationOptions} from '@ionic-native/geolocation/ngx';
import { CourierService } from '../services/courier.service';

declare var ymaps:any;

@Injectable({
  providedIn: 'root'
})

export class MapService {
  public map :BehaviorSubject<any> = new BehaviorSubject(null);
  public position:BehaviorSubject<any> = new BehaviorSubject(null);
  public points:BehaviorSubject<any> = new BehaviorSubject(null);
  public l_route;
  public l_map;
  public duration;

  public geo_f:BehaviorSubject<any> = new BehaviorSubject(false);
  public map_f:BehaviorSubject<any> = new BehaviorSubject(false);
  public route_f:BehaviorSubject<any> = new BehaviorSubject(false);
  public points_f:boolean = false;

  public map_state:BehaviorSubject<any> = new BehaviorSubject(null);
  public route_state:BehaviorSubject<any> = new BehaviorSubject('not_init');


  public interval_3:Observable<any>  = interval(3000);
  public interval_1:Observable<any>  = interval(1000);
  public interval_30:Observable<any> = interval(30000);

  public stopGeo$:Subject<any> = new Subject();
  public stopOrders$:Subject<any> = new Subject();
  public stop$:Subject<any> = new Subject();

  constructor(private geo: Geolocation, private courier:CourierService) { 

    if (this.map_state.getValue() != 'map_init'){
      console.log('start_init_map');
      this.initMap();
    }

    var self = this;

    this.stop$.subscribe(()=>{
      self.stopGeo$.next();
      self.stopOrders$.next();
      self.stopGeo$.complete();
      self.stopOrders$.complete();
    });

    console.log('map_service_construct');
  }

  public redrawMap(){
    if (this.map_state.getValue() == 'map_init'){
      console.log('map_service_redraw');
      var self = this;

      ymaps.ready().then(() => {
        self.l_map.container.fitToViewport();;
      });
      
    }
  }

  public initMap() 
  { 
    var self = this;
    this.map_state.pipe(takeUntil(this.courier.$stop)).subscribe((state) => {
      console.log('map_state', state);
        switch (state){
          case 'init':
            self.buildMap();
            self.initParams();
            break;
          case 'map_init':
            self.checkChanges();
            break;  
        }
    })
    this.map_state.next('init');
  }

  public initParams(){
        //наблюдаем за перемещением
        this.initGeo();

        //следим за заказами
        this.initPoints();
  }

  public checkChanges(){
    combineLatest(this.points, this.position).pipe(takeUntil(this.courier.$stop)).subscribe((states) => {
      console.log('changes',states);

      switch (this.route_state.getValue()) {
        case 'not_init':
          this.buildWay();
        break;
        case 'init_done':
          this.changeWay();
          break; 
      }
    })
  }
  
  //инит самой карты
  public buildMap(){
    var self = this;

    ymaps.ready().then(() => {
      self.l_map = new ymaps.Map('map', {
        center: [55.75222, 37.61556],
        controls: ['zoomControl'],
        zoom: 12
      });

      self.map_state.next('map_init');
      console.log('map_init_s');
    });
  }


  public initPoints(){
    var self = this;
    console.log('thi')
    if (this.courier.way.getValue() != null){
      this.getPoints(this.courier.orders.getValue());
    }

    this.courier.way.pipe(takeUntil(this.courier.$stop)).subscribe((orders) => {
      console.log('check_points_iter', orders);
      if (orders){
        self.getPoints(orders);
      }
    })
  }

  public initGeo(){
    var self = this;
    this.geo.getCurrentPosition().then((pos) => {
      console.log('watch_position', pos);
      if (pos){
        var position =  {'lt' : pos.coords.latitude, 'lg' : pos.coords.longitude};
        self.position.next(position);
      }
    });

    //отслеживаем изменение позиции и перестраиваем маршрут
    this.interval_3.pipe(takeUntil(this.courier.$stop)).subscribe(() => {
      this.geo.getCurrentPosition().then((pos) => {
        console.log('position_iter', pos);
        if (pos){
          var position =  {'lt' : pos.coords.latitude, 'lg' : pos.coords.longitude};
          self.position.next(position);
        }
      });
    })
  }

  public getPoints(orders){
    var self = this;
    var points = [];

    for (var i = 0; i < orders.length; i++){
      var order = orders[i];
      if (order.lat && order.lng ){
        points.push([order.lat, order.lng]);
      }

      console.log('points_orders', points);
      self.points.next(points);
    }
  }

  public buildWay(){
    console.log('initCourierWay');
    console.log('this.points.getValue()', this.points.getValue());
    console.log('this.position.getValue()', this.position.getValue());
    
    var self = this;

    if (this.points.getValue() != null && this.position.getValue() != null) {
     this.route_state.next('init_process');

      ymaps.ready().then(() => {
      var route_points:Array<any> = self.points.getValue();
      console.log('router_points_pre', route_points);

      route_points.unshift([self.position.getValue().lt, self.position.getValue().lg ]);
      console.log('router_points', route_points);

      self.l_route = new ymaps.multiRouter.MultiRoute({
      referencePoints: 
        route_points
      ,
      params: 
      {
        //Тип маршрутизации - пешеходная маршрутизация.
        routingMode: 'pedestrian'
      }
      });

      self.l_map.geoObjects.add(self.l_route);
      self.map.next(self.l_map);
      self.route_state.next('init_done');
    });
    }
  }



public changeWay(){
  var self = this;

  if (this.points.getValue() != null && this.position.getValue() != null){
      this.route_state.next('init_process');

      var route_points:Array<any> = self.points.getValue();
      console.log('router_points_pre', route_points);

      route_points.shift();
      
      route_points.unshift([self.position.getValue().lt, self.position.getValue().lg ]);
      console.log('router_points', route_points);
    
      ymaps.ready().then(() => {
        self.l_route.model.setReferencePoints(
          route_points
        );
      this.duration = this.l_route.getActiveRoute().properties.getAll().duration.text;
      // this.route.model.setParams({
      //   boundsAutoApply: true,
      // });
      });
      self.route_state.next('init_done');
    }
  }
}
