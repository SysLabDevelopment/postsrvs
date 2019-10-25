import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { StateService } from '../services/state.service';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
var MapService = /** @class */ (function () {
    function MapService(geo, state$, AP, dg) {
        var _this = this;
        this.geo = geo;
        this.state$ = state$;
        this.AP = AP;
        this.dg = dg;
        this.local_stop$ = new Subject();
        var self = this;
        this.AP.requestPermission(this.AP.PERMISSION.ACCESS_FINE_LOCATION);
        this.state$.stop$.subscribe(function () {
            self.logout();
        });
        this.initMap();
        this.state$.g_state.pipe(takeUntil(this.local_stop$)).subscribe(function (state) {
            if (state == 'login') {
                self.initMap();
                _this.state$.map_state.next('init');
            }
        });
    }
    MapService.prototype.ngOnInit = function () {
    };
    MapService.prototype.ngOnDestroy = function () {
        this.local_stop$.next();
    };
    MapService.prototype.logout = function () {
    };
    MapService.prototype.destroyMap = function () {
        var self = this;
        ymaps.ready().then(function () {
            self.state$.l_map.destroy();
        });
    };
    MapService.prototype.redraw = function () {
        if (this.state$.map_state.getValue() == 'map_init') {
            this.state$.l_map.container.fitToViewport();
        }
    };
    MapService.prototype.initMap = function () {
        var self = this;
        if (!this.state$.init_map_state) {
            this.state$.map_state.pipe(takeUntil(this.state$.stop$)).subscribe(function (state) {
                switch (state) {
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
            });
            this.state$.init_map_state = true;
        }
        this.state$.map_state.next('init');
        this.state$.map_event.pipe(takeUntil(this.state$.stop$)).subscribe(function (state) {
            switch (state) {
                case 'reInit':
                    self.buildMap();
                    break;
            }
        });
    };
    MapService.prototype.initParams = function () {
        if (this.state$.init_params_state.getValue() == 'not_init') {
            //наблюдаем за перемещением
            this.initGeo();
            //следим за заказами
            this.initPoints();
            this.state$.init_params_state.next('init_done');
        }
    };
    MapService.prototype.registerChanges = function () {
        // switch (this.state$.route_state.getValue()) {
        //   case 'not_init':
        //     this.buildWay();
        //   break;
        //   case 'init_done':
        //     this.changeWay();
        //     break; 
        // }diagnostic
    };
    MapService.prototype.checkChanges = function () {
        var self = this;
        if (this.state$.check_changes_state.getValue() == 'not_init') {
            this.state$.points.pipe(takeUntil(this.state$.stop$)).subscribe(function () {
                self.registerChanges();
            });
            this.state$.position.pipe(takeUntil(this.state$.stop$)).subscribe(function () {
                self.registerChanges();
            });
            this.state$.check_changes_state.next('init_done');
        }
    };
    //инит самой карты
    MapService.prototype.buildMap = function () {
        var self = this;
        ymaps.ready().then(function () {
            self.state$.l_map = new ymaps.Map('map', {
                center: [55.75222, 37.61556],
                controls: ['zoomControl'],
                zoom: 12
            });
            self.state$.map_state.next('map_init');
        });
        this.buildWay();
    };
    MapService.prototype.initPoints = function () {
        var self = this;
        if (this.state$.way.getValue() != null) {
            var orders = this.state$.way.getValue();
            var n_points = new Array();
            var i_j = 0;
            for (var i = 0; i < orders.length; i++) {
                if (i_j == 9)
                    break;
                if (orders[i].status == 1) {
                    i_j++;
                    n_points.push(orders[i]);
                }
            }
            self.state$.points.next(n_points);
        }
        if (this.state$.point_check.getValue() == "not_init") {
            this.state$.way.pipe(takeUntil(this.state$.stop$)).subscribe(function (orders) {
                if (orders) {
                    var n_points = new Array();
                    var j = 0;
                    for (var i = 0; i < orders.length; i++) {
                        if (j == 9)
                            break;
                        if (orders[i].status == 1) {
                            j++;
                            n_points.push(orders[i]);
                        }
                    }
                    self.state$.points.next(n_points);
                }
            });
            this.state$.point_check.next('init_done');
        }
    };
    MapService.prototype.initGeo = function () {
        var self = this;
        // this.AP.checkPermission(this.AP.PERMISSION.ACCESS_FINE_LOCATION).then((res) => {
        //   if (res.hasPermission){
        //     
        //     self.geo.getCurrentPosition().then((pos) => {
        //       if (pos){
        //         var pre = self.state$.position.getValue(); 
        //         var position =  {'lt' : pos.coords.latitude, 'lg' : pos.coords.longitude};
        //         self.state$.position.next(position);
        //         if (pre == null ){
        //           self.state$.init_params_state.next('init_geo_done');
        //         }
        //       }
        //       
        //     });
        //   }
        // });
        //отслеживаем изменение позиции и перестраиваем маршрут
        if (this.state$.geo_check.getValue() == "not_init") {
            this.state$.interval_3.pipe(takeUntil(this.state$.stop$)).subscribe(function () {
                self.dg.isLocationAvailable().then(function (res) {
                    if (res) {
                        self.state$.unsetNotification('geo');
                        self.geo.getCurrentPosition().then(function (pos) {
                            if (pos) {
                                var pre = self.state$.position.getValue();
                                var position = { 'lt': pos.coords.latitude, 'lg': pos.coords.longitude };
                                self.state$.position.next(position);
                                if (pre == null) {
                                    self.state$.init_params_state.next('init_geo_done');
                                }
                            }
                        });
                    }
                    else {
                        self.state$.setNotification('geo', 'Необходимо включить геолокацию!');
                    }
                });
            });
            this.state$.geo_check.next('init_done');
        }
    };
    MapService.prototype.buildWay = function () {
        var self = this;
        if (this.state$.points.getValue() != null && this.state$.position.getValue() != null && this.state$.route_state.getValue() != 'init_process') {
            this.state$.route_state.next('init_process');
            var route_orders = self.state$.points.getValue();
            var r_points = new Array();
            var pos_points = [this.state$.position.getValue().lt, this.state$.position.getValue().lg];
            for (var i = 0; i < route_orders.length; i++) {
                r_points.push([route_orders[i].lat, route_orders[i].lng]);
            }
            r_points.unshift(pos_points);
            self.state$.linkPoints.next(r_points);
            ymaps.ready().then(function () {
                self.state$.l_route = new ymaps.multiRouter.MultiRoute({
                    referencePoints: r_points,
                    params: {
                        //Тип маршрутизации - пешеходная маршрутизация.
                        mapStateAutoApply: true
                    }
                });
                self.state$.l_route.model.setParams({
                    boundsAutoApply: true,
                });
                self.state$.l_map.geoObjects.add(self.state$.l_route);
                self.state$.route_state.next('init_done');
                var points = self.state$.l_route.getWayPoints();
                console.log('routePoints', points);
                self.state$.l_route.model.events.once("requestsuccess", function () {
                    for (var i_1 = 0; i_1 < r_points.length; i_1++) {
                        var cnt = i_1 + 1;
                        var order = self.state$.orders_data[i_1];
                        var addr = order.client_address;
                        var yandexWayPoint = self.state$.l_route.getWayPoints().get(i_1);
                        ymaps.geoObject.addon.balloon.get(yandexWayPoint);
                        yandexWayPoint.options.set({
                            preset: "islands#blueStretchyIcon",
                            iconContentLayout: ymaps.templateLayoutFactory.createClass('<span style="color: red;">' + cnt + '</span>'),
                            balloonContentLayout: ymaps.templateLayoutFactory.createClass('{{ ' + addr + '|raw }}')
                        });
                    }
                });
            });
        }
    };
    MapService.prototype.changeWay = function () {
        var _this = this;
        var self = this;
        if (this.state$.points.getValue() != null
            && this.state$.position.getValue() != null
            && this.state$.route_state.getValue() == 'init_done'
            && this.state$.change_state.getValue() != 'init_process') {
            this.state$.change_state.next('init_process');
            var c_route_orders = self.state$.points.getValue();
            var c_r_points = new Array();
            var c_pos_points = [this.state$.position.getValue().lt, this.state$.position.getValue().lg];
            for (var i = 0; i < c_route_orders.length; i++) {
                c_r_points.push([c_route_orders[i].lat, c_route_orders[i].lng]);
            }
            c_r_points.unshift(c_pos_points);
            self.state$.linkPoints.next(c_r_points);
            ymaps.ready().then(function () {
                self.state$.l_route.model.setReferencePoints(c_r_points);
                _this.state$.duration = _this.state$.l_route.getActiveRoute().properties.getAll().duration.text;
            });
            self.state$.change_state.next('init_done');
        }
    };
    MapService.prototype.setRoute = function () {
        //  var self = this;
        //  ymaps.ready().then(() => {
        //   self.state$.l_route.setBounds(self.state$.l_route.geoObjects.getBounds());
        //  });
    };
    MapService.prototype.getLink = function () {
    };
    MapService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Geolocation, StateService, AndroidPermissions, Diagnostic])
    ], MapService);
    return MapService;
}());
export { MapService };
//# sourceMappingURL=map.service.js.map