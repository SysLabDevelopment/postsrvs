import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from '../../interfaces/order';
import { Response } from '../../interfaces/response';
import { AuthService } from '../auth.service';
import { SettingsService } from '../settings.service';
import { StateService } from '../state.service';
import { SysService } from '../sys.service';
import { LoggerService } from '../sys/logger.service';
import { MapService } from './map.service';
@Injectable({
  providedIn: 'root',
})

export class DataService {
  public orders: BehaviorSubject<Array<Order>> = new BehaviorSubject([]);
  public ordersMap: Map<number, Order>;
  public interval10min = interval(600000);

  constructor(
    private storage: Storage,
    private auth: AuthService,
    private sys: SysService,
    public state$: StateService,
    private logger: LoggerService,
    private http: HttpClient,
    private map: MapService,
    public settings: SettingsService,
  ) {
    storage.ready().then(() => {
      this.storage.get('orders').then((orders: Array<Order>) => {
        this.ordersMap = this.getOrdersMap(orders);
        this.orders.subscribe((orders: Order[]) => {
          this.logger.debug('Пришли заказы в стрим data.orders', orders);
          if (orders.length > 0) {
            this.saveOrders(orders).then(() => {
              console.log('sys:: Список заказов сохранен в сторож: ', orders);
            });
          }
        })

        if (orders == null) {
          this.getApiData()
        } else {
          this.orders.next(orders);
        }
      })
      return true;
    });
    this.state$.g_state.subscribe((state) => {
      if (state == 'unLogin') {
        this.ordersMap.clear()
      }
    })

    this.interval10min.subscribe(() => {
      console.log('sys::  очередная синхронизация списка заказов с серкава');
      this.getApiData();
    });
  }

  public getInitialData() {
    this.storage.ready().then(() => {
      this.storage.keys().then((keys) => console.log('записи в стораже: ', keys));
      this.storage.get('orders').then((orders: Array<Order>) => {
        console.log('Список заказов из стоража', orders);
      })
        .catch((error) => {
          console.log(error)
        })
    })
  }

  public getBalance(sync_id: number, more = 0) {
    const url = `${this.sys.proxy}https://terminal.vestovoy.ru/info/stat.php?cid=${sync_id}&more=${more}&CL=`;
    return this.http.get(url);
  }

  public async getApiData() {
    if (this.settings.rules.appMode.includes('auto')) {
      const currentLocation = await this.map.getMyLocation();
      const orders = await this.map.getWay({ lt: currentLocation.latLng.lat, lg: currentLocation.latLng.lng }).toPromise();
      this.orders.next(orders);
    } else {
      this.getBalance(Number(this.auth.userId), 1).subscribe((res: Response) => {
        this.sys.getOrders(res.res_more.map((order: Order) => order.id.toString())).subscribe((resp: Response) => {
          this.saveOrders(resp.orders).then(() => {
            this.storage.get('orders').then((orders) => {
              this.orders.next(orders);
            })
          });
        })
      })
    }
  }
  public getOrders(ids: Array<string>) {
    this.sys.getOrders(ids).subscribe((resp: Response) => {
      this.orders.next(resp.orders);
      this.saveOrders(resp.orders)
    })
  }

  // Сохранение заказов в сторож с сохранением порядка
  public saveOrders(orders: Order[]) {
    const incomOrdersMap = this.getOrdersMap(orders);
    this.ordersMap.forEach((order, key) => {
      if (!incomOrdersMap.has(key)) {
        this.ordersMap.delete(key);
        console.log(`sys:: Заказ ${key} удален из сторожа`);
      }
      if (order.status_id > incomOrdersMap.get(key).status_id) {
        incomOrdersMap.delete(key);
        console.log(`sys:: Заказ ${key} не будет обновлен (входящий status_id меньше текущего)`);
      }
    })
    const ordersMapMerged = new Map([...this.ordersMap, ...incomOrdersMap]);
    orders = Array.from(ordersMapMerged.values());
    this.ordersMap = this.getOrdersMap(orders);
    return this.storage.set('orders', orders);
  }

  // Возвращает MAP заказов (не сортируемый)
  public getOrdersMap(orders: Array<Order>): Map<number, Order> {
    const map = new Map();
    orders && orders.forEach((order: Order) => {
      map.set(Number(order.id), order)
    })
    return map
  }

  // Перезапись списка заказов (если надо изменить сортировку)
  public rewriteOrders(orders: Order[]) {
    this.ordersMap = this.getOrdersMap(orders);
    this.orders.next(orders)
  }

  /**
   * Подсчет количества заказов со статусом @status
   */
  public ordersCountWithStatus(status: string) {
    const statusIds: { [key: string]: number[] } = {
      process: [1],
      done: [5, 6],
      fail: [4]
    };
    return this.orders.pipe(
      map(
        orders => orders.filter(order => statusIds[status].includes(order.status_id)).length
      )
    )
  }
}
