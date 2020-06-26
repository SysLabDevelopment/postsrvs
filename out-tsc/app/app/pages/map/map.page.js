import { __decorate, __metadata } from "tslib";
import { SettingsService } from './../../services/settings.service';
import { Component } from '@angular/core';
import { MapService } from '../../services/map.service';
import { StateService } from '../../services/state.service';
import { Platform } from '@ionic/angular';
import { GoogleMaps, GoogleMapsEvent, LatLng } from '@ionic-native/google-maps/ngx';
import { Router } from '@angular/router';
let MapPage = class MapPage {
    constructor(state$, map_s, platform, router, settings) {
        this.state$ = state$;
        this.map_s = map_s;
        this.platform = platform;
        this.router = router;
        this.settings = settings;
        this.typeRoute = this.settings.rules.typeRoute;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.platform.ready().then(() => this.loadMap());
    }
    loadMap() {
        let options = {
            controls: {
                compass: true,
                myLocation: true,
                myLocationButton: true,
                mapToolbar: true
            }
        };
        const map = GoogleMaps.create('map', options);
        if (this.state$.g_state.getValue() !== 'login') {
            this.router.navigate(['login']);
        }
        map.one(GoogleMapsEvent.MAP_READY).then((data) => {
            const coordinates = new LatLng(51, 37);
            map.setCameraTarget(coordinates);
            map.setCameraZoom(8);
        });
    }
};
MapPage = __decorate([
    Component({
        selector: 'app-map',
        templateUrl: './map.page.html',
        styleUrls: ['./map.page.scss'],
    }),
    __metadata("design:paramtypes", [StateService,
        MapService,
        Platform,
        Router,
        SettingsService])
], MapPage);
export { MapPage };
//# sourceMappingURL=map.page.js.map