import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CourierService } from '../../services/courier.service';
import { StateService } from '../../services/state.service';
import { AuthService } from '../../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

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
  public clientId: string = null;
  public status_id: string = null;
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
  public selectedPayment = '1';
  public client_status = '';
  public client_status_dt = '';
  public client_status_id = '';
  public order_sum = null;
  public email_input = '';
  public phone_input = '';

  public selectedReason:any = null;
  public selectedStatus:any = null;
  
  constructor(private router:Router,
              private route:ActivatedRoute,
              private courier:CourierService,
              private state$:StateService,
              private auth:AuthService,
              private plt:Platform,
              private http:HttpClient) {

              this.orderId = this.route.snapshot.paramMap.get('id');

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

  public sendPost(url, data){
    console.log('SEND_POST_CALL');
  
      console.log('REQUEST_DATA', data);
      data = JSON.stringify(data);

      return  this.http.post(url, data);
    
  }

  public initOrder(){
    if (this.state$.state.getValue() == 'orders_init' ){
        this.order = this.parseOrder(this.state$.orders.getValue());
        this.order = this.order;
        this.goods = this.order.goods;
        this.address = this.order.client_address
        this.name = this.order.client_name
        this.timeFrom = this.order.datetime_from;
        this.timeTo = this.order.datetime_to;
        this.phone  = this.order.client_phone;
        this.status = this.order.status_text;
        this.status_id = this.order.status_id;
        this.clientId = this.order.client_id;
        this.client_status = this.order.client_status;
        this.client_status_dt = this.order.client_status_dt;
        this.client_status_id = this.order.client_status_id;
        this.setQuants();
        this.getSum();
    }
  }

  public getClientState(){
    var states = this.state$.client_states.getValue();
    var state_id = this.order.client_state;

    for (let i = 0; i < states.length; i++ ){
      if (states[i].id == state_id){
        return states[i].state;
      }
    }

    return '';
  }
  //Заполняет массив с ценой товаров и их количеством(для частички)
  public setQuants(){
    var goods = this.order.goods;

    for (var i = 0; i < goods.length; i++ ){
      var good = goods[i];
      var code = good.Code;
      var quant  = {'amount' : good.kol_vo, 'price' : good.Price }
      this.g_quants[code] = quant;
      
    }
    console.log('set_quants', this.g_quants );
  }

  public changeQuant(code, action){
    var q:number = this.g_quants[code]['amount'];
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
        this.g_quants[code]['amount'] = n_q;
      }

    } else if (action == "minus"){

      var n_q  = q - 1;

      if (n_q < 0){
        return false;
      } else {
        this.g_quants[code]['amount'] = n_q;
      }
    }
    this.getSum();
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
    if (id == 4 || id == 5 ){
      this.setQuants();
      this.getSum();
    }
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

            if (data.success == 'true'){
              self.changeWindow = false;
              self.state$.state.next('init');
              this.selectedPayment = '1';
              this.selectedReason = null;
              this.selectedStatus = null;
              self.initOrder();
            }
          });
        }
        break;
      case 5:
        var text = this.commentText ? this.commentText : '';
        this.courier.changeStatus(this.selectedStatus, this.order.id,text,undefined,undefined, this.selectedPayment).subscribe((data:any) => {

          if (data.success == 'true'){
            self.changeWindow = false;
            self.state$.state.next('init');
            this.selectedPayment = '1';
            this.selectedReason = null;
            this.selectedStatus = null;
            self.initOrder();
          }
        });
          break;
      case 6:

         this.courier.changeStatus(this.selectedStatus, this.order.id, undefined, undefined, this.g_quants, this.selectedPayment).subscribe((data:any) => {

          if (data.success == 'true'){
            self.changeWindow = false;
            self.state$.state.next('init');
            this.selectedPayment = '1';
            this.selectedReason = null;
            this.selectedStatus = null;
            self.initOrder();
          }
        });
          break;      
    }
  }

  public getSum(){
    if (this.order){
      var price :number = 0;
      let quants  = this.g_quants;
      for (let code in quants){
        price += quants[code]['price'] * quants[code]['amount'];
      }

      this.order_sum = price;
      console.log('changet_price');
    }
  }

  //подсчитывает сумму заказа
public getPrice(order){
  console.log('get_price_order', order);
if (order){
  var price: number = 0;
    for( var i = 0; i < order.goods.length; i++){
      var good = order.goods[i];
      price += Number(good.Price) * Number(good.kol_vo) ;
    }      
    console.log('get_price_return', price);
  return price;
}
}

  public selectPayment(item){
    this.selectedPayment = item;
  }

  public sendPay(){
    // var data  = {'action' : 'test_pay'};
    // var url   = 'pay_order';

    // this.sendPost(url, data).subscribe((data) => {
    //   console.log('send_pay_data', data);
    // });

    let order  = this.order;
    let goods  = this.order.goods;
    let quants = this.g_quants;
    let amount = Math.round(this.order_sum * 100) / 100;
    let callback_url = 'https://postsrvs.ru/mobile/pay_callback.php';
    let description = '';
    let products = [];

    for (let code in quants){
      if (quants[code]['amount'] > 0){
        for (let i = 0; i < goods.length; i++){
          if (goods[i]['Code'] == code){
            let good_name   = goods[i]['Name'];
            let good_amount = quants[code]['amount'];
            let good_price  = Math.round(quants[code]['price'] * 100) / 100;
            let pos = {'name' : good_name, 'price' : good_price, 'quantity' : good_amount };       
            products.push(pos);
          }
        }
      }
    }

    var purchase = {'products' : products};
    console.log('goods_description\n', purchase);
    var self = this;

    this.courier.getPayData().subscribe((data:any) => {
      console.log('api_data', data);
      if (data['success'] == 'true'){
        let api_key = data['api_key'];
        let login = data['login'];

        let order_data = {
          'apikey'  : String(api_key),
          'login'   : String(login),
          'purchase'  : purchase,
          'test'    : 1,
          'callback_url' : callback_url,
          'cash_amount' : '#',
          'mode' : 'email',
          'customer_email' : this.email_input, 
        }

        if (this.phone_input != ''){
          order_data['customer_phone'] = this.phone_input;
        }

        self.send_api_data(order_data);
      }
    })
  
    // this.courier.sendPay().subscribe((data) => {
    //   console.log('send_pay_data', data);
    // })
  }

  public send_api_data(api_data){
      var url = 'pay_order';
      var self = this;
      var data = {'action' : 'sendPay', 'orderData' : api_data};
      this.auth.sendPost(url, data).subscribe((res:any) => {
        console.log('serv_response', res);
        self.submitChange();

      })
  }
}
