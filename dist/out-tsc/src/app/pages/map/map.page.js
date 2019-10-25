import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Subject } from 'rxjs';
import { MapService } from '../../services/map.service';
import { StateService } from '../../services/state.service';
import { WebIntent } from '@ionic-native/web-intent/ngx';
import { takeUntil } from 'rxjs/operators';
var MapPage = /** @class */ (function () {
    function MapPage(geo, state$, map_s, wi) {
        this.geo = geo;
        this.state$ = state$;
        this.map_s = map_s;
        this.wi = wi;
        this.dislink = this.state$.disLink;
        this.local_stop$ = new Subject();
        console.log('map_construct');
        var self = this;
        // this.map_s.buildWay();
        this.map_s.buildMap();
        this.state$.map_state.pipe(takeUntil(this.local_stop$)).subscribe(function (state) {
            if (state == 'map_init') {
                console.log('map_page_map_init');
                self.map_s.buildWay();
            }
        });
        this.state$.route_state.pipe(takeUntil(this.local_stop$)).subscribe(function (state) {
            if (state == 'init_done') {
                console.log('map_page_route_init');
                self.initLink();
            }
        });
        this.state$.interval_1.pipe(takeUntil(this.local_stop$)).subscribe(function () {
            console.log('MAP_PAGE_CHANGE_CALL');
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
        this.state$.route_state.pipe(takeUntil(this.state$.$stop)).subscribe(function (state) {
            if (state == 'init_done') {
                console.log('map_page_var_2_init_done');
                self.initLink();
            }
        });
    }
    MapPage.prototype.intentStart = function () {
        var options = {
            action: this.wi.ACTION_VIEW,
            url: this.state$.link,
            package: 'ru.yandex.yandexnavi'
        };
        this.wi.startActivity(options).then(function (data) {
            console.log('wi_success', data);
        });
    };
    MapPage.prototype.initLink = function () {
        var self = this;
        if (!this.state$.link_init) {
            console.log('link_start_subscribe');
            this.state$.linkPoints.subscribe(function (points) {
                console.log('link_points_subscribe', points);
                if (points != 'not_init' || points.length < 2) {
                    self.state$.disLink = false;
                    var link = "yandexnavi://build_route_on_map?";
                    var l_body = "";
                    var l_head = "";
                    for (var i = 0; i < points.length; i++) {
                        if (i != points.length - 1) {
                            l_body = l_body + "&lat_via_" + i + "=" + points[i][0] + "&lon_via_" + i + "=" + points[i][1];
                        }
                        else {
                            l_head = "lat_to=" + points[i][0] + "&lon_to=" + points[i][1];
                        }
                    }
                    link += l_head + l_body;
                    console.log('link_points', points);
                    console.log('link_str', link);
                    self.state$.link = link;
                }
                else {
                    self.state$.disLink = true;
                }
            });
            this.state$.link_init = true;
        }
    };
    MapPage.prototype.ngOnDestroy = function () {
        console.log('map_destroy');
        this.local_stop$.next();
    };
    MapPage.prototype.ngOnInit = function () {
        console.log('map_init');
    };
    MapPage = tslib_1.__decorate([
        Component({
            selector: 'app-map',
            templateUrl: './map.page.html',
            styleUrls: ['./map.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Geolocation, StateService, MapService, WebIntent])
    ], MapPage);
    return MapPage;
}());
export { MapPage };
//# sourceMappingURL=map.page.js.map