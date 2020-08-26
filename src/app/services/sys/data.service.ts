import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { BehaviorSubject } from "rxjs";
import { Order } from '../../interfaces/order';
import { Response } from '../../interfaces/response';
import { AuthService } from '../../services/auth.service';
import { CourierService } from '../../services/courier.service';
import { SysService } from '../../services/sys.service';

@Injectable({
  providedIn: "root",
})

export class DataService {

  public orders: BehaviorSubject<Array<Order>> = new BehaviorSubject([]);
  public ordersMap: Map<number, Order>;

  constructor(
    private storage: Storage,
    private courier: CourierService,
    private auth: AuthService,
    private sys: SysService,
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
          this.saveOrders(orders).then(() => {
            console.log('sys:: Список заказов сохранен в сторож: ', orders);
          });
        })
      })

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
    return this.courier.getBalance(this.auth.userId, 1).subscribe((res: Response) => {
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
    orders && orders.forEach((order) => {
      this.ordersMap.set(Number(order.id), order)
    })
    return this.storage.set('orders', Array.from(this.ordersMap.values()))
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
