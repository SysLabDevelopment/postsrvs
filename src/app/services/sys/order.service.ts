import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { findPhoneNumbersInText } from 'libphonenumber-js';
import { Order } from '../../interfaces/order';
import { AuthService } from '../../services/auth.service';
import { CourierService } from '../courier.service';
import { SysService } from '../sys.service';
import { SysCourierService } from '../sys/courier.service';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private pay_access_data: any;
  public notPayData = false;

  constructor(
    private auth: AuthService,
    private sys: SysService,
    private courier: CourierService,
    private bs: BarcodeScanner,
    private http: HttpClient,
    private sysCourier: SysCourierService,
    private logger: LoggerService,
    private data: DataService


  ) { }

  public sendDelayedCall(order: Order, status: number) {
    order.status_id = status;
    const self = this;
    this.submitChange(order, status);
    this.getPayData(order.client_id as number).subscribe((res: any) => {
      if (res.success == 'true') {
        self.pay_access_data = res;
        if (status == 5 || status == 6) {
          this.sendPay(order);
        }
        if (!res.api_key) {
          this.notPayData = true
        }
      }
    });
  }

  private sendPay(order: Order) {
    this.notPayData = false;
    const callback_url = `${this.sys.proxy}https://mobile.postsrvs.ru/mobile/pay_callback.php`;
    const products = [];
    for (const code in order.quants) {
      if (order.quants[code].amount > 0) {
        for (let i = 0; i < order.goods.length; i++) {
          if (order.goods[i].Code == code) {
            const good_name = order.goods[i].Name;
            const good_amount = order.quants[code].amount;
            const good_price = Math.round(order.quants[code].price * 100) / 100;
            const pos = {
              name: good_name,
              price: good_price,
              quantity: good_amount,
            };
            products.push(pos);
          }
        }
      }
    }

    const purchase = { products };
    console.log('goods_description\n', purchase);
    const self = this;
    const order_data = {
      apikey: String(this.pay_access_data.api_key),
      login: String(this.pay_access_data.phone),
      cashier_name:
        String(this.pay_access_data.name) +
        String(this.pay_access_data.phone),
      purchase,
      callback_url,
      mode: 'email',
      customer_email: order.email_input,
      customer_phone: order.phone_input,
      card_amount: '',
      cash_amount: ''
    };
    if (order.selectedPayment == '2') {
      order_data.card_amount = '#';
    } else {
      order_data.cash_amount = '#';
    }

    if (order.phone_input != '') {
      order_data.customer_phone = order.phone_input;
    }

    this.send_api_data(order_data, order);
  }

  public submitChange(order: Order, status: number) {
    const self = this;
    let noSkip = true;
    switch (status) {
      case 4:
        if (order.selectedReason != null) {
          const new_plan_date = new Date(order.new_plan_date);
          this.courier
            .changeStatus(
              String(status),
              String(order.id),
              undefined,
              order.selectedReason,
              null,
              null,
              new_plan_date.toLocaleDateString()
            )
            .subscribe((data: any) => {
              localStorage.removeItem('drawImg');

            });
        }
        break;
      case 5:
        if (order.selectedPayment !== '2') {
          noSkip = false
        }
        this.sys.doOCR(order.check, noSkip).then((recognizedData) => {
          this.courier
            .changeStatus(
              String(status),
              String(order.id),
              order.commentText ?? '',
              undefined,
              undefined,
              order.selectedPayment,
              '',
              order.check,
              recognizedData,
              order.cardNums,
              order.waitingMinutes
            )
            .subscribe((data: any) => {
              localStorage.removeItem('drawImg');
            });
        })
        break;
      case 6:
        if (order.selectedPayment !== '2') {
          noSkip = false
        }
        this.sys.doOCR(order.check, noSkip).then((recognizedData) => {
          this.courier
            .changeStatus(
              String(status),
              String(order.id),
              undefined,
              undefined,
              order.quants,
              order.selectedPayment,
              '',
              order.check,
              recognizedData,
              order.cardNums,
              order.waitingMinutes
            )
            .subscribe((data: any | null) => {
              localStorage.removeItem('drawImg');
            });
        })
        break;
    }
    const id = Number(this.auth.getUserId());
    this.sysCourier.sendStartRoute(id, '1').then((resp) => {
      this.logger.log('Отправлен запрос на route_start')
    });
  }
  public getPayData(client_id: number) {
    const url = 'pay_order';
    const data = { action: 'getData', orderId: client_id };
    return this.auth.sendPost(url, data)
  }


  public send_api_data(api_data: any, order: Order) {
    const url = 'pay_order';
    const self = this;
    order.rur = 0;

    api_data.purchase.products.forEach((product: any) => {
      order.rur += product.price * product.quantity;
    });

    const data = {
      action: 'sendPay',
      orderData: api_data,
      orderId: order.id,
    };
    this.auth.sendPost(url, data).subscribe((res: any) => {
      console.log('sys:: send_api_data() sended')
    });
  }

  // //Звонок получателю заказа
  // public phoneClick(action: string, order: Order) {
  //   let orderPhones = this.parsePhone(order.client_phone);
  //   let courierPhone = this.parsePhone(order.courier_phone)[0];
  //   let selectedPhone: string;
  //   if (orderPhones.length == 1) {
  //     selectedPhone = orderPhones[0];
  //   }

  //   switch (action) {
  //     case "init":
  //       this.callWindow = !this.callWindow;
  //       break;
  //     case "phone":
  //       this.CL.callNumber(this.selectedPhone, false).then(() => { });
  //       this.callWindow = false;
  //       break;
  //     case "operator":
  //       if (this.selectedPhone && courierPhone) {
  //         let url = "orders";
  //         let data = {
  //           action: "send_phone",
  //           client_number: this.selectedPhone,
  //           cur_number: courierPhone,
  //         };
  //         this.auth.sendPost(url, data).subscribe((resp) => {
  //           console.log("call_subs", resp);
  //         });
  //         this.auth.showError(9);
  //         this.callWindow = false;
  //       }
  //       break;
  //   }
  // }

  public parsePhone(string: string) {
    const phoneNumber = findPhoneNumbersInText(string, 'RU')
    return phoneNumber.map((number) => number.number.number as string);

  }
  //Скан штрих-кода товара на возврат
  public async scanReturned(orderId: string) {
    const url = `${this.sys.proxy}https://mobile.postsrvs.ru/mobile/orders`;
    const data = await this.bs.scan().then((scanData) => (
      {
        orderId,
        box_barcode: scanData.text,
        action: 'get_box',
        uuid: this.sys.getUuid()
      }
    )
    );

    const goodCode = await this.http.post(url, data).toPromise().then((res: string[]) => res[0]);
    return goodCode;
  }

}
