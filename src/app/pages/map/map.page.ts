import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { CourierService } from '../../services/courier.service';
import { BehaviorSubject } from 'rxjs';
import { MapService } from '../../services/map.service';
declare var ymaps:any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  
  // public route:any; 
  // public loader:boolean = false;
  // public points = null;
  // public position = null;
  // public init_geo = false;
  public page_map;

  constructor(private geo: Geolocation, private courier:CourierService, private map_s: MapService ) {
      this.map_s.redrawMap();
   }


  ngOnDestroy(){
    console.log('map_destroy');

  } 
  ngOnInit() {
    console.log('map_init');
  }
}
