import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CourierService } from '../../services/courier.service';
import { StateService } from '../../services/state.service';
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
  public reasons:any = null;
  public commentText:any = null;
  public g_quants:any = {};
  public changeWindow:boolean = false;


  public selectedReason:any = null;
  public selectedStatus:any = null;
  
  constructor(private router:Router,
              private route:ActivatedRoute,
              private courier:CourierService,
              private state$:StateService) {

              this.orderId = this.route.snapshot.paramMap.get('id');
              console.log('id', this.route.snapshot.paramMap.get('id'));
              this.getReasons();
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
    this.getStatuses();
  }

  public initOrder(){
    if (this.state$.state.getValue() == 'orders_init' ){
        this.order = this.parseOrder(this.state$.orders.getValue());
        this.order = this.order;
        this.goods = this.order.goods;
        this.address = this.order.client_address
        this.name = this.order.client_name
        this.timeFrom = this.order.del_time_from;
        this.timeTo = this.order.del_time_to;
        this.phone  = this.order.client_phone;
        this.status = this.order.status_text;
        this.setQuants();
    }
  }

  public setQuants(){
    var goods = this.order.goods;

    for (var i = 0; i < goods.length; i++ ){
      var good = goods[i];
      var code = good.Code;

      this.g_quants[code] = Number(good.kol_vo);
    }
    console.log('setQuants_done', this.g_quants);
  }

  public changeQuant(code, action){
    var q:number = this.g_quants[code];
    var good = null;

    for (var i = 0; i < this.order.goods.length; i++ ){
      if (this.order.goods[i].Code == code){
        good = this.order.goods[i];
      }
    }

    if (action == "plus"){
      var n_q = q+1;

      if (n_q > good.kol_vo ){
        return false;
      } else {
        this.g_quants[code] = n_q;
      }
      console.log('plus', code, q);
    } else if (action == "minus"){
      console.log('minus', code, q);
      var n_q  = q - 1;

      if (n_q < 0){
        return false;
      } else {
        this.g_quants[code] = n_q;
      }
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
    if (this.state$.s_state.getValue() == 'status_init'){
      self.statuses = self.state$.statuses.getValue();
    } else {
      console.log('statuses_not_init');
      this.state$.s_state.pipe(takeUntil(this.state$.$stop)).subscribe((state) => {
        if (state == "status_init"){
          self.getStatuses();
        }
      })
    }
  }

  public getStatus():string{
    return this.courier.getStatus(this.order);
  }

  public getBalnce(){

  }

  public changeStatus(){
    console.log('open-close itter', this.changeWindow);
    if (!this.changeWindow){
      this.changeWindow = true;
    }
    // var url = 'orders';
    // var data = {'action' : 'changedStatus' , 'sync_id' : '1111', 'status' : '1' , 'comment' : 'сделал, начальник'};
    // this.courier.sendPost(url, data).subscribe((data:any) => {
    //   console.log('change_data', data);
    // });
  }

  public close_window(){
    this.changeWindow = false;
  }

  public selectStatus(id){
    console.log('select_status', id);
    this.selectedStatus = id;
  }

  public selectReason(id){
    console.log('select_reason', id);
    this.selectedReason = id;
  }

  public getReasons(){
   this.reasons = this.state$.reasons 
  }

  public submitChange(){
    console.log('submit_call');
    var self = this;

    switch (this.selectedStatus){
      case 4:
        if (this.selectedReason != null){
          this.courier.changeStatus(this.selectedStatus, this.order.id, undefined, this.selectedReason).subscribe((data:any) => {
            console.log('statusChange_response', data);
            if (data.success == 'true'){
              self.changeWindow = false;
              self.state$.state.next('init');
            }
          });
        }
        break;
      case 5:
        var text = this.commentText ? this.commentText : '';
        this.courier.changeStatus(this.selectedStatus, this.order.id,text).subscribe((data:any) => {
          console.log('statusChange_response', data);
          if (data.success == 'true'){
            self.changeWindow = false;
            self.state$.state.next('init');
          }
        });
          break;
      case 6:
        console.log('quants', this.g_quants);
         this.courier.changeStatus(this.selectedStatus, this.order.id, undefined, undefined, this.g_quants).subscribe((data:any) => {
          console.log('statusChange_response', data);
          if (data.success == 'true'){
            self.changeWindow = false;
            self.state$.state.next('init');
          }
        });
          break;      
    }
  }


}
