import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { CourierService } from '../../services/courier.service';
import { BehaviorSubject } from 'rxjs';
import { MapService } from '../../services/map.service';
import { WebIntent } from '@ionic-native/web-intent/ngx';

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
  public link;
  public disLink:boolean = true;

  constructor(private geo: Geolocation, private courier:CourierService, private map_s: MapService, private wi: WebIntent ) {
      console.log('map_construct');
      if (this.map_s.route_state.getValue() == 'init_done'){
        this.map_s.map_event.next('reInit');
        this.initLink();
      }
   }

  public intentStart(){
    const options = {
      action: this.wi.ACTION_VIEW,
      url: 'yandexnavi://build_route_on_map?lat_from=55.75&lon_from=37.58&lat_to=55.75&lon_to=37.64&lat_via_0=55.75&lon_via_0=37.62',
      package: 'ru.yandex.yandexnavi'
    }
    
    this.wi.startActivity(options).then((data) => {
      console.log('wi_success', data);
    });
  } 

  public initLink(){
    
    var self = this;

    this.map_s.linkPoints.subscribe((points) => {
      console.log('link_points_subscribe', points);
      if (points != 'not_init' || points.length < 2 ){
        self.disLink = false;
        var link = "yandexnavi://build_route_on_map?";
        var l_body = "";
        var l_head = "";

        for (var i = 0; i < points.length; i++){
          if (i != points.length - 1) {
            l_body += "lat_via_" + i + "=" + points[i][0] + "&lon_via_" + i + "=" + points[i][1] + "&";
          } else {
            l_head = "lat_to=" + points[i][0] + "&lon_to=" + points[i][1] + "&";
          }
        }
        
        link += l_head + l_body;
        link.slice(0,-1);
        console.log('link_points', points);
        console.log('link_str', link);
        self.link = link;
      } else {
        self.disLink = true;
      }
    });
  }

  ngOnDestroy(){
    console.log('map_destroy');

  } 
  ngOnInit() {
    console.log('map_init');
  }
}
