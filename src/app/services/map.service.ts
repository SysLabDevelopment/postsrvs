import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, interval, Observable, Subject, combineLatest } from 'rxjs';
import { takeUntil, takeWhile, merge } from 'rxjs/operators';
import { Geolocation, GeolocationOptions} from '@ionic-native/geolocation/ngx';
import { StateService } from '../services/state.service';;

declare var ymaps:any;

@Injectable({
  providedIn: 'root'
})

export class MapService {

  private local_stop$:Subject<any> = new Subject();

  constructor(private geo: Geolocation, private state$:StateService) { 
    
    var self = this;
    this.state$.stop$.subscribe(() => {
      console.log('STOP$_MAP');  
      self.logout();
    });

    this.initMap();
    this.state$.g_state.pipe(takeUntil(this.local_stop$)).subscribe((state) => {
      if (state == 'login'){
        console.log('LOGIN_ON_MAP');
        self.initMap();
        this.state$.map_state.next('init');
      }
    });
  }


ngOnInit(){
  console.log('MAP_ON_INIT');
}

ngOnDestroy(){
  console.log('MAP_ON_DESTROY');
  this.local_stop$.next();
}

  public logout(){

  }

  public destroyMap(){
    var self = this;

    ymaps.ready().then(() => {
      self.state$.l_map.destroy();
    });    
  }

  public redraw(){
    if (this.state$.map_state.getValue() == 'map_init'){
      this.state$.l_map.container.fitToViewport();
    }
    
  }

  public initMap() 
  { 
    var self = this;
    if (!this.state$.init_map_state){
      this.state$.map_state.pipe(takeUntil(this.state$.stop$)).subscribe((state) => {
        console.log('map_state', state);
          switch (state){
            case 'init':
              // self.buildMap();
              self.initParams();
              break;
            case 'map_init':
              self.checkChanges();
              break;
            case 'reInit':
              // self.buildMap();
              break;    
          }
      })
      this.state$.init_map_state = true;
    }

    this.state$.map_state.next('init');

    this.state$.map_event.pipe(takeUntil(this.state$.stop$)).subscribe((state) => {
      console.log('map_events', state);
      switch (state){
        case 'reInit':
            self.buildMap();

            break;  
      }
    });
  }

  public initParams(){
    if (this.state$.init_params_state.getValue() == 'not_init' ){
              //наблюдаем за перемещением
              this.initGeo();

              //следим за заказами
              this.initPoints();
              this.state$.init_params_state.next('init_done');
    }
  }

  public registerChanges(){
    console.log('register_changes_call');
    // switch (this.state$.route_state.getValue()) {
    //   case 'not_init':
    //     this.buildWay();
    //   break;
    //   case 'init_done':
    //     this.changeWay();
    //     break; 
    // }
  }

  public checkChanges(){
    var self = this;

    if (this.state$.check_changes_state.getValue() == 'not_init'){
      console.log('start_cahnges_subscribe');
      this.state$.points.pipe(takeUntil(this.state$.stop$)).subscribe(() => {
        self.registerChanges();
    });

    this.state$.position.pipe(takeUntil(this.state$.stop$)).subscribe(() => {
      self.registerChanges();
    });    
      this.state$.check_changes_state.next('init_done');
    }
  }
  
  //инит самой карты
  public buildMap(){
    var self = this;

    ymaps.ready().then(() => {
      self.state$.l_map = new ymaps.Map('map', {
        center: [55.75222, 37.61556],
        controls: ['zoomControl'],
        zoom: 12
      });

      self.state$.map_state.next('map_init');
      console.log('map_init_s');
    });
    this.buildWay();
  }


  public initPoints(){
    var self = this;
    if (this.state$.way.getValue() != null){

      var orders = this.state$.way.getValue();
      var n_points = new Array();

      var i_j = 0;
      for (var i = 0; i < orders.length; i++ ){
        if (i_j == 9) break;
        if (orders[i].status == 1){
          i_j++;
          n_points.push(orders[i]);
        }
      }

      self.state$.points.next(n_points);
    }

    if (this.state$.point_check.getValue() == "not_init"){
      console.log('point_check_subscribe');
      this.state$.way.pipe(takeUntil(this.state$.stop$)).subscribe((orders) => {
        
        if (orders){
          var n_points = new Array();
          var j = 0;

          for (var i = 0; i < orders.length; i++ ){
            if (j == 9) break;
            if (orders[i].status == 1){
              j++;
              n_points.push(orders[i]);
            }
          }

          self.state$.points.next(n_points);
        }
      })
      this.state$.point_check.next('init_done');
    }
  }

  public initGeo(){
    var self = this;
    this.geo.getCurrentPosition().then((pos) => {

      if (pos){
        var position =  {'lt' : pos.coords.latitude, 'lg' : pos.coords.longitude};
        self.state$.position.next(position);
      }
    });

    //отслеживаем изменение позиции и перестраиваем маршрут
    if (this.state$.geo_check.getValue() == "not_init"){
      console.log('start_geo_subscribe');
      this.state$.interval_3.pipe(takeUntil(this.state$.stop$)).subscribe(() => {
        this.geo.getCurrentPosition().then((pos) => {

          if (pos){
            var position =  {'lt' : pos.coords.latitude, 'lg' : pos.coords.longitude};
            self.state$.position.next(position);
            console.log('geo_itter', self.state$.position.getValue());
          }
        });
      })
      this.state$.geo_check.next('init_done');
    }
  }

  public buildWay(){
    console.log('build_way');
    var self = this;

    if (this.state$.points.getValue() != null && this.state$.position.getValue() != null && this.state$.route_state.getValue() != 'init_process' ) {
     this.state$.route_state.next('init_process');

      var route_orders = self.state$.points.getValue();
      var r_points = new Array();
      var pos_points = [this.state$.position.getValue().lt, this.state$.position.getValue().lg];
      
      for (var i = 0; i< route_orders.length; i++){
        r_points.push([route_orders[i].lat, route_orders[i].lng ]);  
      }
      
      r_points.unshift(pos_points);
      
      self.state$.linkPoints.next(r_points);

      ymaps.ready().then(() => {
      
      self.state$.l_route = new ymaps.multiRouter.MultiRoute({
      referencePoints: 
        r_points
      ,
      params: 
      {
        //Тип маршрутизации - пешеходная маршрутизация.
        mapStateAutoApply : true
      }
      });
      self.state$.l_route.model.setParams({
        boundsAutoApply: true,
      });
      self.state$.l_map.geoObjects.add(self.state$.l_route);
      
      self.state$.route_state.next('init_done');
    });
    }
  }



public changeWay(){
  console.log('change_way');
  var self = this;

  if (this.state$.points.getValue() != null 
      && this.state$.position.getValue() != null 
      && this.state$.route_state.getValue() == 'init_done' 
      && this.state$.change_state.getValue() != 'init_process' ) {

      this.state$.change_state.next('init_process');

      
      var c_route_orders = self.state$.points.getValue();
      var c_r_points = new Array();
      var c_pos_points = [this.state$.position.getValue().lt, this.state$.position.getValue().lg];
      
      for (var i = 0; i< c_route_orders.length; i++){
        c_r_points.push([c_route_orders[i].lat, c_route_orders[i].lng ]);  
      }

      c_r_points.unshift(c_pos_points);
      
      self.state$.linkPoints.next(c_r_points);

      ymaps.ready().then(() => {
        self.state$.l_route.model.setReferencePoints(
          c_r_points
        );
      this.state$.duration = this.state$.l_route.getActiveRoute().properties.getAll().duration.text;

      });
      self.state$.change_state.next('init_done');
    }
  }

  public setRoute(){
  //  var self = this;
  //  ymaps.ready().then(() => {
  //   self.state$.l_route.setBounds(self.state$.l_route.geoObjects.getBounds());
  //  });
  }

  public getLink(){

  }

}