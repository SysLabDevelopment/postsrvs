import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import {BehaviorSubject} from "rxjs";
import {Order} from '../../interfaces/order';
import {CourierService} from '../../services/courier.service';
import {AuthService} from '../../services/auth.service';
import {Response} from '../../interfaces/response';
@Injectable({
  providedIn: "root",
})

export class DataService {

  public orders:BehaviorSubject<Array<Order>> = new BehaviorSubject([])

  constructor(
    private storage: Storage,
    private courier: CourierService,
    private auth: AuthService
    ) {
    storage.ready().then((localforage)=>{
      this.getInitialData();
  })
}

 public getInitialData(){
    this.storage.ready().then(()=>{
      this.storage.keys().then((keys)=>console.log('записи в стораже: ', keys));
      this.storage.get('orders').then((orders)=>{
      console.table('Список заказов из стоража', orders);
      if(orders){
        this.orders.next(orders)
      }else{
        this.getApiData();
      }
    }).catch((error)=>{
      console.log(error)
    })
    })
    
  }

  public getApiData(){
    return this.courier.getBalance(this.auth.userId,1).subscribe((res: Response)=>{
      this.orders.next(res.res_more);
      this.storage.set('orders',res.res_more);
      
    })
  }
}
