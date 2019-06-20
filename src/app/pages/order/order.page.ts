import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CourierService } from '../../services/courier.service';
import { MenuController } from '@ionic/angular';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        display: 'block',
      })),
      state('closed', style({
        display: 'none',
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  public orderId: string = null;
  public status: string = null;
  public goods:any = null;
  public address:any = null;
  public order:any = null;
  public name:string = null;
  public timeFrom:string = null;
  public timeTo:string = null;
  public phone:string = null;
  public pageInit:boolean = true;
  public statuses:any = null;
  public changeWindow:boolean = false;

  public selectedReason:any = null;
  public selectedStatus:any = null;
  
  constructor(private router:Router,
              private route:ActivatedRoute,
              private courier:CourierService,
              private menu:MenuController) {

              this.orderId = this.route.snapshot.paramMap.get('id');
              console.log('id', this.route.snapshot.paramMap.get('id'));

              this.getOrderInfo();
              this.getBalnce();
   }

  ngOnInit() {
  }

  public getOrderInfo(){
    var self = this;

    // this.courier.getOrderInfo(this.orderId).subscribe((data:any) => {
    //   console.log('orderOnfoDATA', data);
    //   if (data.success = "true"){
    //     self.order = data.order;
    //     self.goods = data.order.goods;
    //     self.address = data.order.client_address
    //     self.name = data.order.client_name
    //     self.timeFrom = data.order.del_time_from;
    //     self.timeTo = data.order.del_time_to;
    //     self.phone = data.order.client_phone;
    //     self.getStatuses();
    //   }
    // })

    this.initOrder();

    this.courier.state.pipe(takeUntil(this.courier.$stop)).subscribe((state) => {
      this.initOrder();
    })

    this.getStatuses();
  }

  public initOrder(){
    if (this.courier.state.getValue() == 'orders_init' ){
        this.order = this.parseOrder(this.courier.orders.getValue());
        this.order = this.order;
        this.goods = this.order.goods;
        this.address = this.order.client_address
        this.name = this.order.client_name
        this.timeFrom = this.order.del_time_from;
        this.timeTo = this.order.del_time_to;
        this.phone  = this.order.client_phone;
        this.status = this.order.status_text;
    }
  }

  public parseOrder(orders){
    for (var i =0; i < orders.length; i++ ){
      if (orders[i].id == this.orderId){
        return orders[i];
      }
    }
  }

  public navBack(){
    this.router.navigate(['/courier']);
  }

  public getStatuses(){
    var self = this;
    if (this.courier.s_state.getValue() == 'status_init'){
      self.statuses = self.courier.statuses.getValue();
    } else {
      console.log('statuses_not_init');
      this.courier.s_state.pipe(takeUntil(this.courier.$stop)).subscribe((state) => {
        if (state == "status_init"){
          self.getStatuses();
        }
      })
    }
  }

  public getStatus():string{
    console.log('this.statses', this.statuses);
    console.log('this.order', this.order);
    if (this.courier.statuses.getValue() == 'status_init'){
      for (var i = 0; i < this.statuses.length; i++ ){
        var status = this.statuses[i];

        if (status.id == this.order.del_status){
          return status.status;
        }
      }
    }
  }

  public getBalnce(){
    this.courier.getBalance().subscribe((data) =>{
        console.log('data_balance', data );
    });
  }

  public changeStatus(){
    if (!this.changeWindow){
      this.changeWindow = true;
    }
    // var url = 'orders';
    // var data = {'action' : 'changedStatus' , 'sync_id' : '1111', 'status' : '1' , 'comment' : 'сделал, начальник'};
    // this.courier.sendPost(url, data).subscribe((data) => {
    //   console.log('change_data', data);
    // });
  }

  public close_window(){
    this.changeWindow = false;
  }

  public selectStatus(id){
    console.log('select_status', id);
  }

  public getReasons(){
    this.courier.getReasons().subscribe((data) => {
      console.log('data_reasons', data)
    })
  }


}
