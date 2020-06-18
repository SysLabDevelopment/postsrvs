import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, interval, Observable, Subject, combineLatest } from 'rxjs';
import { takeUntil, takeWhile, merge } from 'rxjs/operators';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation/ngx';
import { StateService } from '../services/state.service';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Router } from '@angular/router';
import { SettingsService } from './settings.service';

declare var ymaps: any;

@Injectable({
  providedIn: 'root'
})

export class MapService {

  private local_stop$: Subject<any> = new Subject();
  public oneOrder = false;
  public objectManager: any;
  constructor
    (public router: Router,
      private geo: Geolocation,
      private state$: StateService,
      private AP: AndroidPermissions,
      private dg: Diagnostic,
      private settings: SettingsService,
  ) {

    var self = this;
    this.AP.requestPermission(this.AP.PERMISSION.ACCESS_FINE_LOCATION);
    this.state$.stop$.subscribe(() => {

      self.logout();
    });

    this.initMap();
    this.state$.g_state.pipe(takeUntil(this.local_stop$)).subscribe((state) => {
      if (state == 'login') {

        self.initMap();
        this.state$.map_state.next('init');
      }
    });
  }



  ngOnDestroy() {

    this.local_stop$.next();
  }

  public logout() {

  }

  public destroyMap() {
    var self = this;

    ymaps.ready().then(() => {
      self.state$.l_map.destroy();
    });
  }

  public redraw() {
    if (this.state$.map_state.getValue() == 'map_init') {
      this.state$.l_map.container.fitToViewport();
    }

  }

  public initMap() {
    var self = this;
    if (!this.state$.init_map_state) {
      this.state$.map_state.pipe(takeUntil(this.state$.stop$)).subscribe((state) => {

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
      })
      this.state$.init_map_state = true;
    }

    this.state$.map_state.next('init');

    this.state$.map_event.pipe(takeUntil(this.state$.stop$)).subscribe((state) => {

      switch (state) {
        case 'reInit':
          self.buildMap();

          break;
      }
    });
  }

  public initParams() {
    if (this.state$.init_params_state.getValue() == 'not_init') {
      //наблюдаем за перемещением
      this.initGeo();

      //следим за заказами
      this.initPoints();
      this.state$.init_params_state.next('init_done');
    }
  }

  public registerChanges() {

  }

  public checkChanges() {
    var self = this;

    if (this.state$.check_changes_state.getValue() == 'not_init') {

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
  public buildMap() {
    console.log('sys::buildMap()');
    var self = this;

    ymaps.ready().then(() => {
      self.state$.l_map = new ymaps.Map('map', {
        center: [55.75222, 37.61556],
        controls: ['zoomControl', 'geolocationControl'],
        zoom: 12
      },
        {
          // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
          boundsAutoApply: true,
          //Расположение контрола масштабирования
          zoomControlPosition: { right: 10, top: 100, bottom: 'auto' },
          //Расположение кнопки поиска себя на карте
          geolocationControlPosition: { right: 10, bottom: 200, top: 'auto' }
        }),
        this.objectManager = new ymaps.ObjectManager({
          // Чтобы метки начали кластеризоваться, выставляем опцию.
          clusterize: true,
          // ObjectManager принимает те же опции, что и кластеризатор.
          gridSize: 32,
          clusterDisableClickZoom: true
        });
      this.objectManager.objects.options.set('preset', 'islands#greenDotIcon');
      this.objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
      self.state$.l_map.geoObjects.add(this.objectManager);

      self.state$.map_state.next('map_init');

    });
    this.buildWay();
  }


  public initPoints() {
    console.log('sys::initPoints()');
    let self = this;
    let orders: any;
    orders = this.state$.way.getValue();
    if (this.state$.way.getValue() !== null) {
      console.log('sys:: state$.way.getValue() == null', (this.state$.way.getValue() == null));

      var n_points = new Array();

      var i_j = 0;
      console.log('sys::initPoints orders', orders);
      for (let i = 0; i < orders.length; i++) {
        if (i_j == 9) break;
        if (Number(orders[i].status) == 1) {
          i_j++;
          n_points.push(orders[i]);
        }
      }

      self.state$.points.next(n_points);
      this.buildWay();
    }

    if (this.state$.point_check.getValue() == "not_init") {

      this.state$.way.pipe(takeUntil(this.state$.stop$)).subscribe((orders) => {

        if (orders) {
          let n_points = new Array();
          let j = 0;

          for (let i = 0; i < orders.length; i++) {
            if (j == 9) break;
            if (Number(orders[i].status) == 1) {
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

  public initGeo() {

    var self = this;

    //отслеживаем изменение позиции и перестраиваем маршрут
    if (this.state$.geo_check.getValue() == "not_init") {

      this.state$.interval_2s.pipe(takeUntil(this.state$.stop$)).subscribe(() => {
        this.geo.getCurrentPosition().then((resp) => {
          console.log('sys:: Координаты lt', resp.coords.latitude);
          console.log('sys:: Координаты lg', resp.coords.longitude);
        }).catch((error) => {
          console.log('Невозможно получить координаты!', error);
        });
        self.dg.isLocationAvailable().then((res) => {
          if (res) {
            self.state$.unsetNotification('geo');
            self.geo.getCurrentPosition().then((pos) => {

              if (pos) {
                var pre = self.state$.position.getValue();
                var position = { 'lt': pos.coords.latitude, 'lg': pos.coords.longitude };
                self.state$.position.next(position);

                if (pre == null) {
                  self.state$.init_params_state.next('init_geo_done');
                }
              }
            });
          } else {
            self.state$.setNotification('geo', 'Необходимо включить геолокацию!');
          }
        }).catch((error) => {
          console.error('sys:: Проверка доступности гео упало с ошибкой!', error)
        })
      });
      this.state$.geo_check.next('init_done');
    }

  }

  public buildWay() {
    console.log('sys::buildWay()');
    console.log('sys::this.state$.route_state.getValue()', this.state$.route_state.getValue());
    let self = this;

    if (this.state$.points.getValue() != null && this.state$.position.getValue() != null) {
      this.state$.route_state.next('init_process');

      let route_orders = self.state$.points.getValue();
      let r_points = new Array();
      let pos_points = [this.state$.position.getValue().lt, this.state$.position.getValue().lg];

      if (this.settings.rules.typeRoute !== 'standart') {
        route_orders = route_orders.filter(order => order.status == "1");
        route_orders.splice(1)
      }
      for (let i = 0; i < route_orders.length; i++) {
        r_points.push([route_orders[i].lat, route_orders[i].lng]);
      }

      r_points.unshift(pos_points);

      self.state$.linkPoints.next(r_points);

      ymaps.ready().then(() => {
        console.log('sys:: r_points:', r_points);
        self.state$.l_route = new ymaps.multiRouter.MultiRoute({
          referencePoints:
            r_points
          ,
          params:
          {
            mapStateAutoApply: true
          }
        });
        self.state$.l_route.model.setParams({
          boundsAutoApply: true,
        });
        console.log('sys:: Отрисовка маршрута');
        self.state$.l_map.geoObjects.removeAll();
        self.state$.l_map.geoObjects.add(self.state$.l_route);
        self.state$.route_state.next('init_done');
        let points = self.state$.l_route.getWayPoints();
        self.state$.l_route.model.events.once("requestsuccess", function () {
          if (self.state$.orders_data !== null) {
            for (let i = 1; i < r_points.length; i++) {
              let cnt = i;
              let order = self.state$.orders_data[i - 1];
              let addr = order.client_address;
              let note = localStorage.getItem(order.id);
              if (order.datetime_to !== null) {
                order.datetime_to = 'до ' + order.datetime_to
              } else {
                order.datetime_to = ''
              }
              let yandexWayPoint = self.state$.l_route.getWayPoints().get(i);
              console.log('sys:: Данные заказа в балун ', order);
              ymaps.geoObject.addon.balloon.get(yandexWayPoint);
              yandexWayPoint.options.set({
                preset: "islands#blueStretchyIcon",
                order: order,
                addr: order.client_address,
                iconContentLayout: ymaps.templateLayoutFactory.createClass(
                  '<span style="color: red;">' + cnt + '</span>'
                ),
                balloonContentLayout: ymaps.templateLayoutFactory.createClass(
                  '<b>Заказ ' + order.id + '</b><br/>' +
                  addr + '<hr/>' +
                  'Доставка:<br/>c ' + order.datetime_from + '<br/>' + order.datetime_to + '<br/>' +
                  `<button onClick='localStorage.setItem("needOrder",` + order.id + `)' style='width: 100%;background-color: #ffdb4d;padding: 5px;'>Детали</button><br/> <br><br>` + note,
                )
              });
            }
          }
        });
      });
    }
  }



  public changeWay() {

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

      ymaps.ready().then(() => {
        self.state$.l_route.model.setReferencePoints(
          c_r_points
        );
        this.state$.duration = this.state$.l_route.getActiveRoute().properties.getAll().duration.text;

      });
      self.state$.change_state.next('init_done');
    }
  }


  public getLink() {

  }

  showOrder(coords) {

    console.log('sys:: Показать маршрут заказа ', coords);
    ymaps.ready().then(() => {
      this.geo.getCurrentPosition().then((pos) => {
        console.log('sys:: pos', pos);
        if (pos) {
          const currentGeo = [pos.coords.latitude, pos.coords.longitude];
          console.log('sys:: currentGeo', currentGeo);
          console.log('sys:: coords', coords);

          // Создаем мультимаршрут.
          // @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRoute.xml

          const multiRoute = new ymaps.multiRouter.MultiRoute({
            referencePoints: [
              currentGeo,
              [coords[0], coords[1]]
            ],
            params: {
              mapStateAutoApply: true
            }
          }, {
            // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
            boundsAutoApply: true
          });
          this.state$.l_map.geoObjects.removeAll();
          this.state$.l_map.geoObjects.add(multiRoute);
        }
      });

    })
  }
  orderDetails(orderId) {
    console.log('sys:: переход на страницу заказа ', orderId);
    this.router.navigate(['/order', orderId]);
    localStorage.removeItem('needOrder');
  }

  public pointsRender(orders = this.state$.orders_data) {
    console.log('sys::pointsRender');
    let self = this;
    let cnt: number = 0;
    let map = self.state$.l_map;
    ymaps.ready().then(() => {
      self.state$.l_map.geoObjects.removeAll();
      orders.forEach(order => {
        if (Number(order.status_id) == 1) {
          console.log('sys::pointsRender order', order);
          let note = (localStorage.getItem(order.id) ? localStorage.getItem(order.id) : '');
          cnt++;
          this.objectManager.add({
            type: 'Feature',
            id: order.id,
            geometry: {
              type: 'Point',
              coordinates: [order.lt, order.lg]
            },
            properties: {
              balloonContentHeader: '<span style="color: red;">' + cnt + '</span>',
              balloonContentBody: '<b>Заказ ' + order.id + '</b><br/>' +
                order.client_address + '<hr/>' +
                'Доставка:<br/>c ' + order.datetime_from + '<br/>' + (order.datetime_to ? order.datetime_to : '') + '<br/>' +
                `<b>Компания:</b> ` + order.client_name +
                `<br/><b>Клиент:</b> ` + order.client_fio +
                `<button onClick='localStorage.setItem("needOrder",` + order.id + `)' style='width: 100%;background-color: #ffdb4d;padding:10px'>Детали</button><br/><br/>` + note,
            }
          });
          map.geoObjects.add(this.objectManager);

          // let placemark = new ymaps.Placemark([order.lt, order.lg], {
          //   // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
          //   balloonContentHeader: '<span style="color: red;">' + cnt + 1 + '</span>',
          //   balloonContentBody: '<b>Заказ ' + order.id + '</b><br/>' +
          //     order.client_address + '<hr/>' +
          //     'Доставка:<br/>c ' + order.datetime_from + '<br/>' + (order.datetime_to ? order.datetime_to : '') + '<br/>' +
          //     `<b>Компания:</b> ` + order.client_name +
          //     `<br/><b>Клиент:</b> ` + order.client_fio +
          //     `<button onClick='localStorage.setItem("needOrder",` + order.id + `)' style='width: 100%;background-color: #ffdb4d;'>Детали</button><br/><br/>` + note,
          // });

          // map.geoObjects.add(placemark);
          map.setBounds(map.geoObjects.getBounds(), {
            checkZoomRange: true,
            zoomMargin: 35
          });
          if (localStorage.getItem('auto') == 'true') {
            orders = [];
          }
        }
      });
    })
  }
}
