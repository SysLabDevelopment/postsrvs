import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { CourierService } from '../../services/courier.service';
import { BehaviorSubject } from 'rxjs';

declare var ymaps:any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  public map :any;
  public route:any; 
  public loader:boolean;
  public points = null;
  public position = null;
  public init_geo = false;

  constructor(private geo: Geolocation, private courier:CourierService) {
    console.log('map_construct');
    this.initGeo();
    this.loader = false;
    this.initMap();
    this.getPoints();
    var self = this;

   }

  ngOnInit() {
    console.log('map_init');
  }
  public initGeo(){
    var self = this;

    if (this.initGeo){
      this.geo.watchPosition().subscribe((pos) => {
        console.log('w_pos', pos);
        self.position = {'lt' : pos.coords.latitude, 'lg' : pos.coords.longitude}
      })
    } else {
      this.geo.getCurrentPosition().then((pos) => {
        console.log('w_pos', pos);
        self.position = {'lt' : pos.coords.latitude, 'lg' : pos.coords.longitude}
      })
    }
  }
  public getPoints(){
    var self = this;
    this.courier.getOrders().subscribe((data:any) => {
      console.log('orders_data', data);
      var points = [];
      for (var i = 0; i < data.length; i++){
        var order = data[i];
        if (order.lat && order.lng ){
          points.push([order.lat, order.lng]);
        }
      }
      console.log('points_orders', points);
      self.points = points;
      self.initWay();
    });
  }

  public initWay(){
    console.log('initCourierWay');

    ymaps.ready().then(() => {
      
      var route_points:Array<any> = this.points;
      console.log('router_points_pre', route_points);
      route_points.unshift([this.position.lt, this.position.lg ]);
      console.log('router_points', route_points);
      this.route = new ymaps.multiRouter.MultiRoute({
      referencePoints: 
        route_points
      ,
      params: 
      {
        //Тип маршрутизации - пешеходная маршрутизация.
        routingMode: 'pedestrian'
      }
      });

      this.map.geoObjects.add(this.route);
      
      var self = this;
      setTimeout(function(){
        ymaps.ready().then(() => {
        console.log('in t_o');
          self.map.setBounds(self.map.geoObjects.getBounds());
          
        });
        }, 500);
        this.loader = false;
    });
  }
  // public initCourierWay(points){
    
   
  // }

  // public changeCourierWay(points){
  //   var o_pos = this.order.getOrderHousePos();//Координаты дома
  //   console.log('points', points);
  //   console.log('o_pos', o_pos);
  //   console.log('duration', this.route.properties);
  //   ymaps.ready().then(() => {
  //     this.route.model.setReferencePoints([ 
  //       [points.lt, points.lg],
  //       [o_pos.lt, o_pos.lg]
  //   ]);
  //   this.duration = this.route.getActiveRoute().properties.getAll().duration.text;
  //   // this.route.model.setParams({
  //   //   boundsAutoApply: true,
  //   // });
  //   });
  // }

  public initMap() 
  { 
    ymaps.ready().then(() => {
      this.map = new ymaps.Map('map', {
        center: [55.75222, 37.61556],
        controls: ['zoomControl'],
        zoom: 12
      });
      console.log('map_init');
    });
  }

}
