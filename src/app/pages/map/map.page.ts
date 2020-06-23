import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { MapService } from '../../services/map.service';
import { StateService } from '../../services/state.service';
import { WebIntent } from '@ionic-native/web-intent/ngx';
import { takeLast, takeUntil, take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SysService } from '../../services/sys.service';
import { Platform, ToastController } from '@ionic/angular';
import { GoogleMaps, GoogleMapsEvent, LatLng, MarkerOptions, Marker } from '@ionic-native/google-maps/ngx';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  public loader: boolean = false;
  public page_map;
  public dislink: boolean = this.state$.disLink;
  public local_stop$: Subject<any> = new Subject();

  constructor(
    private route: ActivatedRoute,
    public state$: StateService,
    public map_s: MapService,
    private wi: WebIntent,
    private auth: AuthService,
    private sys: SysService,
    private platform: Platform,
    public toastCtrl: ToastController
  ) {

  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.platform.ready().then(() => this.loadMap());
  }


  loadMap() {
    /* The create() function will take the ID of your map element */
    const map = GoogleMaps.create('map');

    map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
      const coordinates: LatLng = new LatLng(41, -87);

      map.setCameraTarget(coordinates);
      map.setCameraZoom(8);
    });
  }

}
