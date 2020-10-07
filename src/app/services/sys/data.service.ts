import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import {BehaviorSubject, interval} from 'rxjs';
import { Order } from '../../interfaces/order';
import { Response } from '../../interfaces/response';
import { AuthService } from '../../services/auth.service';
import { CourierService } from '../../services/courier.service';
import { SysService } from '../../services/sys.service';
import { StateService } from '../state.service';

@Injectable({
  providedIn: "root",
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

    storage.ready().then((localforage) => {
      this.storage.get('orders').then((orders: Array<Order>) => {
        this.ordersMap = this.getOrdersMap(orders);
        if (orders == null) {
          this.getApiData()
        }
        this.orders.next(orders);
        console.log('Список заказов из стоража', orders);
        this.getInitialData();
        this.orders.subscribe((orders: Order[]) => {
          console.trace('sys:: Пришли заказы в стрим data.orders');
          this.saveOrders(orders).then(() => {
            console.log('sys:: Список заказов сохранен в сторож: ', orders);
          });
        })
      })
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
    let incomOrdersMap = this.getOrdersMap(orders);
    let ordersMapMerged = new Map([...this.ordersMap, ...incomOrdersMap]);
    this.ordersMap.forEach((val, key) => {
      if (!incomOrdersMap.has(key)) {
        this.ordersMap.delete(key);
        console.log(`sys:: Заказ ${key} удален из сторожа`);
      }
    })
    return this.storage.set('orders', Array.from(ordersMapMerged.values()))
  }

  //Возвращает MAP заказов (не сортируемый)
  public getOrdersMap(orders: Array<Order>): Map<number, Order> {
    let map = new Map();
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
