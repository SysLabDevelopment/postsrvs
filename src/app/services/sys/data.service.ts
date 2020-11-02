import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, interval } from 'rxjs';
import { Order } from '../../interfaces/order';
import { Response } from '../../interfaces/response';
import { AuthService } from '../auth.service';
import { CourierService } from '../courier.service';
import { StateService } from '../state.service';
import { SysService } from '../sys.service';

@Injectable({
  providedIn: 'root',
})

export class DataService {

  public orders: BehaviorSubject<Array<Order>> = new BehaviorSubject([]);
  public ordersMap: Map<number, Order>;
  public interval10min = interval(600000);

  constructor(
    private storage: Storage,
    private courier: CourierService,
    private auth: AuthService,
    private sys: SysService,
    public state$: StateService,
  ) {

    storage.ready().then(() => {
      this.storage.get('orders').then((orders: Array<Order>) => {
        this.ordersMap = this.getOrdersMap(orders);
        this.orders.subscribe((orders: Order[]) => {
          console.log('sys:: Пришли заказы в стрим data.orders', orders);
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
      }).catch((error) => {
        console.log(error)
      })
    })

  }

  public getApiData() {
    return this.courier.getBalance(Number(this.auth.userId), 1).subscribe((res: Response) => {
      this.sys.getOrders(res.res_more.map((order: Order) => order.id.toString())).subscribe((resp: Response) => {
        this.saveOrders(resp.orders).then(() => {
          this.storage.get('orders').then((orders) => {
            this.orders.next(orders);
          })

        });

      })
    })
  }
  public getOrders(ids: Array<string>) {
    this.sys.getOrders(ids).subscribe((resp: Response) => {
      this.orders.next(resp.orders);
      this.saveOrders(resp.orders)
    })
  }

  //Сохранение заказов в сторож с сохранением порядка
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

  //Возвращает MAP заказов (не сортируемый)
  public getOrdersMap(orders: Array<Order>): Map<number, Order> {
    const map = new Map();
    orders && orders.forEach((order: Order) => {
      map.set(Number(order.id), order)
    })
    return map
  }

  //Перезапись списка заказов (если надо изменить сортировку)
  public rewriteOrders(orders: Order[]) {
    this.ordersMap = this.getOrdersMap(orders);
    this.orders.next(orders)
  }
}
