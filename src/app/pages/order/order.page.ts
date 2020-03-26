import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CourierService } from '../../services/courier.service';
import { StateService } from '../../services/state.service';
import { AuthService } from '../../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';

import {
  trigger,
  state,
  style,
  animate,
  transition
  // ...
} from '@angular/animations';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MapService } from '../../services/map.service';


@Component({
  selector: 'app-order',
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          display: 'block'
        })
      ),
      state(
        'closed',
        style({
          display: 'none'
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')])
    ])
  ],
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss']
})
export class OrderPage implements OnInit {
  public orderId: string = null;
  public clientId: string = null;
  public status_id: string = null;
  public status: string = null;
  public goods: any = null;
  public address: any = null;
  public order: any = null;
  public name: string = null;
  public timeFrom: string = null;
  public timeTo: string = null;
  public phone: string = null;
  public pageInit: boolean = true;
  public statuses: any = null;
  public reasons: any = null;
  public commentText: any = null;
  public g_quants: any = {};
  public changeWindow: boolean = false;
  public selectedPayment = '1';
  public client_status = '';
  public client_status_dt = '';
  public client_status_id = '';
  public order_sum = null;
  public vlog = null;
  public poruch = null;
  public mass = null;
  public amount = null;
  public email_input = '';
  public phone_input = '';
  public barcode_flag = false;
  public barcode_url = null;
  public barcode = null;
  public selectedReason: any = null;
  public selectedStatus: any = null;
  public hide_status = false;
  public $codeStop: Subject<any> = new Subject();
  public showPhone: boolean = false;
  public podrazd = null;
  public email_error = false;
  public pay_access: boolean = false;
  public pay_access_data = null;
  public show_info: boolean = false;
  public show_email: boolean = false;
  public callWindow: boolean = false;
  public drawimage: boolean = false;
  public drawNeedle: boolean = true;
  public imageToShow = null;
  coords: Array<any>;

  constructor(private map: MapService,
    private router: Router,
    private route: ActivatedRoute,
    private courier: CourierService,
    private state$: StateService,
    private auth: AuthService,
    private plt: Platform,
    private http: HttpClient,
    private iab: InAppBrowser,
    private CL: CallNumber
  ) {
    this.orderId = this.route.snapshot.paramMap.get('id');

    this.initOrder();
    var img = localStorage.getItem('drawImg');
    if (img) {
      this.imageToShow = 'data:image/jpg;base64,' + img;
    }
  }

  ngOnInit() {
    this.state$.getCoordinates(this.address).subscribe((data: any) => {
      this.coords = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
      console.log('sys:: Данные заказа', this.order)
    })
  }

  ngAfterViewChecked() {
    var img = localStorage.getItem('drawImg');
    if (img) {
      this.imageToShow = 'data:image/jpg;base64,' + img;
    }
  }

  public sendPost(url, data) {
    console.log('SEND_POST_CALL');

    console.log('REQUEST_DATA', data);
    data = JSON.stringify(data);

    return this.http.post(url, data);
  }

  public drawBtn(need) {
    this.drawNeedle = need;
    if (need) {
      this.router.navigate(['draw']);
    } else {
      localStorage.removeItem('drawImg');
    }
  }

  public parsePhone(phone) {
    const regex = /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g;
    const str = String(phone);
    let result = regex.exec(str);
    let tel = result[0];
    if (tel != null) {
      if (tel[0] == '+') {
        tel = '8' + tel.slice(2);
      }
      return tel;
    }
    return false;
  }

  public phoneClick(action) {
    console.log('phoneClick', action);
    let orderPhone = this.parsePhone(this.phone);
    let courierPhone = this.parsePhone(this.order.courier_phone);

    switch (action) {
      case 'init':
        this.callWindow = !this.callWindow;
        break;
      case 'phone':
        this.CL.callNumber(String(orderPhone), true).then(() => { });
        this.callWindow = false;
        break;
      case 'operator':
        if (orderPhone && courierPhone) {
          let url = 'orders';
          let data = {
            action: 'send_phone',
            client_number: orderPhone,
            cur_number: courierPhone
          };
          this.auth.sendPost(url, data).subscribe(resp => {
            console.log('call_subs', resp);
          });
          this.auth.showError(9);
          this.callWindow = false;
        }
        break;
    }
  }

  public initOrder() {
    if (this.state$.orders.getValue() == null) {
      this.courier.getOrders().subscribe((data) => {
        this.order = this.parseOrder(data.orders);
        this.goods = this.order.goods;
        this.address = this.order.client_address;
        this.name = this.order.client_name;
        this.timeFrom = this.order.datetime_from;
        this.timeTo = this.order.datetime_to;
        this.phone = this.order.client_phone;
        this.status = this.order.status_text;
        this.status_id = this.order.status_id;
        this.clientId = this.order.client_id;
        this.client_status = this.order.client_status;
        this.client_status_dt = this.order.client_status_dt;
        this.client_status_id = this.order.client_status_id;
        this.vlog = this.order.vlog;
        this.poruch = this.order.poruch;
        (this.mass = this.order.mass), (this.amount = this.order.amount);
        this.podrazd = this.order.Podrazd;
        this.statuses = this.state$.statuses_data;
        this.reasons = this.state$.reasons;

        this.setQuants();
        this.getSum();
        this.ifPaid();
        this.getBalnce();
        this.getPayData();
        this.initClientInfo();
      })
    } else {


      this.order = this.parseOrder(this.state$.orders.getValue());

      this.goods = this.order.goods;
      this.address = this.order.client_address;
      this.name = this.order.client_name;
      this.timeFrom = this.order.datetime_from;
      this.timeTo = this.order.datetime_to;
      this.phone = this.order.client_phone;
      this.status = this.order.status_text;
      this.status_id = this.order.status_id;
      this.clientId = this.order.client_id;
      this.client_status = this.order.client_status;
      this.client_status_dt = this.order.client_status_dt;
      this.client_status_id = this.order.client_status_id;
      this.vlog = this.order.vlog;
      this.poruch = this.order.poruch;
      (this.mass = this.order.mass), (this.amount = this.order.amount);
      this.podrazd = this.order.Podrazd;
      this.statuses = this.state$.statuses_data;
      this.reasons = this.state$.reasons;

      this.setQuants();
      this.getSum();
      this.ifPaid();
      this.getBalnce();
      this.getPayData();
      this.initClientInfo();
    }

  }

  public getClientState() {
    var states = this.state$.client_states.getValue();
    var state_id = this.order.client_state;

    for (let i = 0; i < states.length; i++) {
      if (states[i].id == state_id) {
        return states[i].state;
      }
    }

    return '';
  }
  //Заполняет массив с ценой товаров и их количеством(для частички)
  public setQuants() {
    var goods = this.order.goods;

    for (var i = 0; i < goods.length; i++) {
      var good = goods[i];
      var code = good.Code;
      var quant = { amount: good.kol_vo, price: good.Price };
      this.g_quants[code] = quant;
    }
    console.log('set_quants', this.g_quants);
  }

  public changeQuant(code, action) {
    var q: number = this.g_quants[code]['amount'];
    var good = null;

    for (var i = 0; i < this.order.goods.length; i++) {
      if (this.order.goods[i].Code == code) {
        good = this.order.goods[i];
      }
    }

    if (action == 'plus') {
      var n_q = q + 1;

      if (n_q > good.kol_vo) {
        return false;
      } else {
        this.g_quants[code]['amount'] = n_q;
      }
    } else if (action == 'minus') {
      var n_q = q - 1;

      if (n_q < 0) {
        return false;
      } else {
        this.g_quants[code]['amount'] = n_q;
      }
    }
    this.getSum();
  }

  public parseOrder(orders) {
    if (this.state$.orders.getValue() == null) {
      this.courier.getOrders();
    }
    for (var i = 0; i < orders.length; i++) {
      if (orders[i].id == this.orderId) {
        return orders[i];
      }
    }
  }

  public navBack() {
    localStorage.removeItem('drawImg');
    this.router.navigate(['/courier']);
  }

  public getStatus(): string {
    return this.courier.getStatus(this.order);
  }

  public getBalnce() { }

  public changeStatus() {
    if (!this.changeWindow) {
      this.changeWindow = true;
    }
    // var url = 'orders';
    // var data = {'action' : 'changedStatus' , 'sync_id' : '1111', 'status' : '1' , 'comment' : 'сделал, начальник'};
    // this.courier.sendPost(url, data).subscribe((data:any) => {
    //   console.log('change_data', data);
    // });
  }

  public close_window() {
    this.changeWindow = false;
  }

  public selectStatus(id) {
    console.log('select_status', id);
    this.selectedStatus = id;
    if (id == 4 || id == 5) {
      this.setQuants();
      this.getSum();
    }
  }

  public selectReason(id) {
    console.log('select_reason', id);
    this.selectedReason = id;
  }

  public sendPayCall() {
    if (
      (this.selectedStatus == 5 || this.selectedStatus == 6) &&
      this.pay_access
    ) {
      this.sendPay();
    } else {
      this.submitChange();
    }
  }

  public submitChange() {
    let self = this;

    switch (this.selectedStatus) {
      case 4:
        if (this.selectedReason != null) {
          this.courier
            .changeStatus(
              this.selectedStatus,
              this.order.id,
              undefined,
              this.selectedReason
            )
            .subscribe((data: any) => {
              if (data.success == 'true') {
                self.changeWindow = false;
                self.state$.state.next('init');
                self.selectedPayment = '1';
                self.selectedReason = null;
                self.selectedStatus = null;
                self.router.navigate(['courier']);
                self.state$.updateWayInfo.next('0');
              }
              localStorage.removeItem('drawImg');
            });
        }
        break;
      case 5:
        var text = this.commentText ? this.commentText : '';
        this.courier
          .changeStatus(
            this.selectedStatus,
            this.order.id,
            text,
            undefined,
            undefined,
            this.selectedPayment
          )
          .subscribe((data: any) => {
            if (data.success == 'true') {
              self.changeWindow = false;
              self.state$.state.next('init');
              self.selectedPayment = '1';
              self.selectedReason = null;
              self.selectedStatus = null;
              if (!self.pay_access) {
                self.router.navigate(['courier']);
              }
              self.initOrder();
              self.state$.updateWayInfo.next('0');
            }
            localStorage.removeItem('drawImg');
          });
        break;
      case 6:
        this.courier
          .changeStatus(
            this.selectedStatus,
            this.order.id,
            undefined,
            undefined,
            this.g_quants,
            this.selectedPayment
          )
          .subscribe((data: any) => {
            if (data.success == 'true') {
              self.changeWindow = false;
              self.state$.state.next('init');
              self.selectedPayment = '1';
              self.selectedReason = null;
              self.selectedStatus = null;
              if (!self.pay_access) {
                self.router.navigate(['courier']);
              }
              self.initOrder();
              self.state$.updateWayInfo.next('0');
            }
            localStorage.removeItem('drawImg');
          });
        break;
    }
  }

  public getSum() {
    if (this.order) {
      var price: number = 0;
      let quants = this.g_quants;
      for (let code in quants) {
        price += quants[code]['price'] * quants[code]['amount'];
      }

      this.order_sum = price;
      console.log('changet_price');
    }
  }

  //подсчитывает сумму заказа
  public getPrice(order) {
    if (order) {
      let price: number = 0;
      for (let i = 0; i < order.goods.length; i++) {
        let good = order.goods[i];
        price += Number(good.Price) * Number(good.kol_vo);
      }
      return price;
    }
  }

  public selectPayment(item) {
    this.selectedPayment = item;
  }

  public sendPay() {
    let order = this.order;
    let goods = this.order.goods;
    let quants = this.g_quants;
    let amount = Math.round(this.order_sum * 100) / 100;
    let callback_url = 'https://postsrvs.ru/mobile/pay_callback.php';
    let description = '';
    let products = [];

    for (let code in quants) {
      if (quants[code]['amount'] > 0) {
        for (let i = 0; i < goods.length; i++) {
          if (goods[i]['Code'] == code) {
            let good_name = goods[i]['Name'];
            let good_amount = quants[code]['amount'];
            let good_price = Math.round(quants[code]['price'] * 100) / 100;
            let pos = {
              name: good_name,
              price: good_price,
              quantity: good_amount
            };
            products.push(pos);
          }
        }
      }
    }

    var purchase = { products: products };
    console.log('goods_description\n', purchase);
    var self = this;

    if (this.pay_access) {
      let api_key = this.pay_access_data['api_key'];
      let login = this.pay_access_data['login'];
      let cashier = this.pay_access_data['cashier_name'];
      let phone;

      let order_data = {
        apikey: String(this.pay_access_data.api_key),
        login: String(this.pay_access_data.phone),
        cashier_name:
          String(this.pay_access_data.name) +
          String(this.pay_access_data.phone),
        purchase: purchase,
        callback_url: callback_url,
        mode: 'email',
        customer_email: this.email_input,
        customer_phone: this.phone_input
      };
      if (self.selectedPayment == '2') {
        order_data['card_amount'] = '#';
      } else {
        order_data['cash_amount'] = '#';
      }

      if (this.phone_input != '') {
        order_data['customer_phone'] = this.phone_input;
      }

      self.send_api_data(order_data);
    }
  }

  //Получаем api key & login
  public getPayData() {
    var url = 'pay_order';
    var data = { action: 'getData', orderId: this.clientId };
    var self = this;

    this.auth.sendPost(url, data).subscribe((res: any) => {
      console.log('GET_PAY_DATA', res);
      if (res.success == 'true') {
        self.pay_access = true;
        self.pay_access_data = res;
      } else {
        self.pay_access = false;
      }
    });
  }


  public send_api_data(api_data) {
    var url = 'pay_order';
    var self = this;
    this.order.rur = 0;

    api_data.purchase.products.forEach((product) => {
      this.order.rur += product.price * product.quantity;
    })

    var data = {
      action: 'sendPay',
      orderData: api_data,
      orderId: this.order.id
    };
    this.auth.sendPost(url, data).subscribe((res: any) => {
      self.submitChange();
      self.checkPayment();
      self.hide_status = true;
    });
  }

  public showCheck() {
    const browser = this.iab.create(this.barcode_url);
  }

  public voiceLink() {
    const browser = this.iab.create(this.order.r_url);
  }

  public checkPayment() {
    var self = this;
    this.state$.interval_1ss.pipe(takeUntil(this.$codeStop)).subscribe(() => {
      self.ifPaid();
      console.log('paid_iter');
    });
  }

  public ifPaid() {
    var url = 'pay_order';
    var data = { action: 'checkPaid', orderId: this.order.id };
    var self = this;

    this.auth.sendPost(url, data).subscribe(data => {
      if (data.success == 'true' && data.barcode != null) {
        self.barcode_flag = true;
        self.barcode_url = data.barcode_url;
        self.barcode = data.barcode;
        self.$codeStop.next();
        self.hide_status = true;
      }
    });
  }

  public enterPhone() {
    if (this.showPhone) {
      this.showPhone = false;
      this.show_email = false;
    } else {
      this.showPhone = true;
      this.show_email = true;
    }
  }

  public emailChange() {
    if (this.email_error) {
      this.email_error = false;
    }
  }

  public initClientInfo() {
    let mail_exp = /(?:([\s.,]{1}))([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}/gm;
    let infoStr = this.phone;
    let mail = mail_exp.exec(infoStr);

    if (mail != null) {
      this.email_input = mail[0];
    } else {
      this.show_email = true;
    }
  }
  intentStart() {
    this.state$.getCoordinates(this.address).subscribe((data: any) => {
      this.coords = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
      console.log('sys:: Координаты заказа', this.coords);
      this.state$.intentStart(this.coords);
    })
  }

  onMap() {
    this.state$.coords = this.coords;
    this.map.oneOrder = true;
    this.router.navigate(['map/order']);
  }

  pickedUpOrder() {

  }

  public doneOrder() {
    this.drawBtn(this.drawNeedle);
    let drawedImg = localStorage.getItem('drawImg');
    if (this.drawNeedle && drawedImg) {
      this.drawBtn(this.drawNeedle)
    } else {
      this.sendPayCall();
    }


  }
}
