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
  public change_state:BehaviorSubject<any> = new BehaviorSubject('not_init');
  public map_event:BehaviorSubject<any> = new BehaviorSubject(null);

  public interval_3:Observable<any>  = interval(1000);
  public interval_1:Observable<any>  = interval(3000);
  public interval_30:Observable<any> = interval(30000);

  public stopGeo$:Subject<any> = new Subject();
  public stopOrders$:Subject<any> = new Subject();
  public stop$:Subject<any> = new Subject();

  public point_check:BehaviorSubject<any> = new BehaviorSubject('not_init');
  public geo_check:BehaviorSubject<any> = new BehaviorSubject('not_init');

  public init_params_state:BehaviorSubject<any> = new BehaviorSubject('not_init');
  public check_changes_state:BehaviorSubject<any> = new BehaviorSubject('not_init');

  public linkPoints:BehaviorSubject<any> = new BehaviorSubject('not_init');
  

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
    this.route_state.subscribe((state) => {
      console.log('route_state_watch', state);
    })
  }

  public destroyMap(){
    var self = this;

    ymaps.ready().then(() => {
      self.l_map.destroy();
    });    
  }

  public redraw(){
    if (this.map_state.getValue() == 'map_init'){
      console.log('redraw_map');
      this.l_map.container.fitToViewport();
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
          case 'reInit':
            self.buildMap();
            break;    
        }
    })
    this.map_state.next('init');

    this.map_event.pipe(takeUntil(this.courier.$stop)).subscribe((state) => {
      console.log('map_events', state);
      switch (state){
        case 'reInit':
            self.buildMap();
            self.buildWay();
            break;  
      }
    });
  }

  public initParams(){
    if (this.init_params_state.getValue() == 'not_init' ){
              //наблюдаем за перемещением
              this.initGeo();

              //следим за заказами
              this.initPoints();
              this.init_params_state.next('init_done');
    }
  }

  public registerChanges(){
    switch (this.route_state.getValue()) {
      case 'not_init':
        this.buildWay();
      break;
      case 'init_done':
        this.changeWay();
        break; 
    }
  }

  public checkChanges(){
    var self = this;

    if (this.check_changes_state.getValue() == 'not_init'){
      this.points.pipe(takeUntil(this.courier.$stop)).subscribe(() => {
        console.log('points_changes');
        self.registerChanges();
    });

    this.position.pipe(takeUntil(this.courier.$stop)).subscribe(() => {
      console.log('position_changes');
      self.registerChanges();
    });    
      this.check_changes_state.next('init_done');
    }
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
    this.buildWay();
  }


  public initPoints(){
    var self = this;
    console.log('thi')
    if (this.courier.way.getValue() != null){
      console.log('not_null_points_init');
      var orders = this.courier.way.getValue();
      var n_points = new Array();
      console.log('not_null_init_points', n_points);
      var i_j = 0;
      for (var i = 0; i < orders.length; i++ ){
        if (i_j == 9) break;
        if (orders[i].status == 0){
          i_j++;
          n_points.push(orders[i]);
        }
      }
      console.log('not_null_init_points_after', n_points);
      self.points.next(n_points);
    }

    if (this.point_check.getValue() == "not_init"){
      this.courier.way.pipe(takeUntil(this.courier.$stop)).subscribe((orders) => {
        console.log('check_points_iter', orders);
        
        if (orders){
          var n_points = new Array();
          var j = 0;
          console.log('points_init_pre', n_points);
          for (var i = 0; i < orders.length; i++ ){
            if (j == 9) break;
            if (orders[i].status == 0){
              j++;
              n_points.push(orders[i]);
            }
          }
          console.log('points_init_', n_points);
          self.points.next(n_points);
        }
      })
      this.point_check.next('init_done');
    }
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
    if (this.geo_check.getValue() == "not_init"){
      this.interval_3.pipe(takeUntil(this.courier.$stop)).subscribe(() => {
        this.geo.getCurrentPosition().then((pos) => {
          console.log('position_iter', pos);
          if (pos){
            var position =  {'lt' : pos.coords.latitude, 'lg' : pos.coords.longitude};
            self.position.next(position);
          }
        });
      })
      this.geo_check.next('init_done');
    }
  }

  // public getPoints(orders){
  //   var self = this;
  //   var g_points = new Array();
  //   console.log('get_points_orders', orders);
  //   console.log('get_points_points', g_points);

  //   for (var i = 0; i < orders.length; i++){
  //     var order = orders[i];
  //     if (order.lat && order.lng ){
  //       console.log('get_points_success', order);
  //       var new_point = [order.lat, order.lng];
  //       console.log('get_points_success_point', new_point);
  //       g_points.concat(new_point);
  //     }


  //     console.log('points_orders', g_points);
  //     self.points.next(g_points);
  //   }
  // }

  public buildWay(){
    console.log('build_way_start');
    console.log('this.points.getValue()', this.points.getValue());
    console.log('this.position.getValue()', this.position.getValue());
    
    var self = this;

    if (this.points.getValue() != null && this.position.getValue() != null && this.route_state.getValue() != 'init_process' ) {
     this.route_state.next('init_process');

      var route_orders = self.points.getValue();
      var r_points = new Array();
      var pos_points = [this.position.getValue().lt, this.position.getValue().lg];
      
      for (var i = 0; i< route_orders.length; i++){
        r_points.push([route_orders[i].lat, route_orders[i].lng ]);  
      }

      console.log('way_INIT_pos_points', pos_points );
      console.log('way_INIT_r_points', r_points );
      
      r_points.unshift(pos_points);

      console.log('route_points', r_points);
      
      self.linkPoints.next(r_points);

      ymaps.ready().then(() => {
      
      self.l_route = new ymaps.multiRouter.MultiRoute({
      referencePoints: 
        r_points
      ,
      params: 
      {
        //Тип маршрутизации - пешеходная маршрутизация.
        routingMode: 'pedestrian'
      }
      });

      self.l_map.geoObjects.add(self.l_route);
      
      self.route_state.next('init_done');
    });
    }
    console.log('build_way_end');
  }



public changeWay(){
  console.log('change_way_start');
  var self = this;

  if (this.points.getValue() != null 
      && this.position.getValue() != null 
      && this.route_state.getValue() == 'init_done' 
      && this.change_state.getValue() != 'init_process' ) {

      this.change_state.next('init_process');

      
      var c_route_orders = self.points.getValue();
      var c_r_points = new Array();
      var c_pos_points = [this.position.getValue().lt, this.position.getValue().lg];
      
      for (var i = 0; i< c_route_orders.length; i++){
        c_r_points.push([c_route_orders[i].lat, c_route_orders[i].lng ]);  
      }

      console.log('way_Change_pos_points', c_pos_points );
      console.log('way_Change_r_points', c_r_points );
      
      c_r_points.unshift(c_pos_points);

      console.log('route_points', c_r_points);
      
      self.linkPoints.next(c_r_points);

      ymaps.ready().then(() => {
        self.l_route.model.setReferencePoints(
          c_r_points
        );
      this.duration = this.l_route.getActiveRoute().properties.getAll().duration.text;
      // this.route.model.setParams({
      //   boundsAutoApply: true,
      // });
      });
      self.change_state.next('init_done');
    }
    console.log('change_way_end');
  }

  public getLink(){

  }

}
