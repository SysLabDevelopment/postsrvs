import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import {BehaviorSubject} from "rxjs";
import {Order} from '../../interfaces/order';
import {CourierService} from '../../services/courier.service';
import {AuthService} from '../../services/auth.service';
import {Response} from '../../interfaces/response';
import {SysService} from '../../services/sys.service';
import { Network } from '@ionic-native/network/ngx';
import { CacheService } from 'ionic-cache';

@Injectable({
  providedIn: "root",
})

export class DataService {

  public orders:BehaviorSubject<Array<Order>> = new BehaviorSubject([])
  
  constructor(
    private storage: Storage,
    private courier: CourierService,
    private auth: AuthService,
    private sys: SysService,
    private network: Network,
    private cache: CacheService,

    
    ) {
      storage.ready().then((localforage)=>{
        this.getInitialData();
    });
    
  }

 public getInitialData(){
    this.storage.ready().then(()=>{
      this.storage.keys().then((keys)=>console.log('записи в стораже: ', keys));
      this.storage.get('orders').then((orders:Array<Order>)=>{
      console.log('Список заказов из стоража', orders);
      this.getApiData();
    }).catch((error)=>{
      console.log(error)
    })
    })
    
  }

  public getApiData(){
    return this.courier.getBalance(this.auth.userId,1).subscribe((res: Response)=>{
      this.orders.next(res.res_more);
      this.storage.set('orders', res.res_more);
      this.sys.getOrders(res.res_more.map((order:Order)=>order.id.toString())).subscribe((resp:Response)=>{
        this.orders.next(resp.orders);
        this.storage.set('orders', resp.orders)
      })
    })
  }
  public getOrders(ids: Array<string>){
    this.sys.getOrders(ids).subscribe((resp:Response)=>{
        this.orders.next(resp.orders);
        this.storage.set('orders', resp.orders)
      })
  }
}
