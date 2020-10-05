import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Order } from '../../interfaces/order';
import { AuthService } from '../../services/auth.service';
import { CourierService } from '../courier.service';
import { SysService } from '../sys.service';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private pay_access_data: any;
  public notPayData = false;

  constructor(
    private auth: AuthService,
    private storage: Storage,
    private sys: SysService,
    private courier: CourierService,
  ) { }

  public sendDelayedCall(order: Order, status: number) {
    order.status_id = status;
    let self = this;
    this.submitChange(order, status);
    this.getPayData(order.client_id).subscribe((res: any) => {
      if (res.success == "true") {
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
    let callback_url = this.sys.proxy + "https://mobile.postsrvs.ru/mobile/pay_callback.php";
    let products = [];
    for (let code in order.quants) {
      if (order.quants[code]["amount"] > 0) {
        for (let i = 0; i < order.goods.length; i++) {
          if (order.goods[i]["Code"] == code) {
            let good_name = order.goods[i]["Name"];
            let good_amount = order.quants[code]["amount"];
            let good_price = Math.round(order.quants[code]["price"] * 100) / 100;
            let pos = {
              name: good_name,
              price: good_price,
              quantity: good_amount,
            };
            products.push(pos);
          }
        }
      }
    }

    let purchase = { products: products };
    console.log("goods_description\n", purchase);
    let self = this;
    let order_data = {
      apikey: String(this.pay_access_data.api_key),
      login: String(this.pay_access_data.phone),
      cashier_name:
        String(this.pay_access_data.name) +
        String(this.pay_access_data.phone),
      purchase: purchase,
      callback_url: callback_url,
      mode: "email",
      customer_email: order.email_input,
      customer_phone: order.phone_input,
      card_amount: '',
      cash_amount: ''
    };
    if (order.selectedPayment == "2") {
      order_data["card_amount"] = "#";
    } else {
      order_data["cash_amount"] = "#";
    }

    if (order.phone_input != "") {
      order_data["customer_phone"] = order.phone_input;
    }

    this.send_api_data(order_data, order);
  }

  public submitChange(order: Order, status: number) {
    let self = this;
    let noSkip = true;
    switch (status) {
      case 4:
        if (order.selectedReason != null) {
          let new_plan_date = new Date(order.new_plan_date);
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
              localStorage.removeItem("drawImg");
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
              order.commentText ?? "",
              undefined,
              undefined,
              order.selectedPayment,
              '',
              order.check,
              recognizedData,
              order.cardNums
            )
            .subscribe((data: any) => {
              localStorage.removeItem("drawImg");
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
              order.cardNums
            )
            .subscribe((data: any | null) => {
              localStorage.removeItem("drawImg");
            });
        })
        break;
    }
  }
  public getPayData(client_id: number) {
    let url = "pay_order";
    let data = { action: "getData", orderId: client_id };
    return this.auth.sendPost(url, data)
  }


  public send_api_data(api_data: any, order: Order) {
    const url = "pay_order";
    let self = this;
    order.rur = 0;

    api_data.purchase.products.forEach((product: any) => {
      order.rur += product.price * product.quantity;
    });

    let data = {
      action: "sendPay",
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

  // //Парсинг номера телефона из строки с лишним мусором
  // public parsePhone(phone): Array<string> {
  //   let phones: Array<string> = [];
  //   phone = phone.replace(/\D+/g, "");

  //   while (phone.length > 7) {
  //     phone = this.normalizePhoneNumber(phone);
  //     phones.push(phone.slice("", 11));
  //     phone = phone.slice(11);
  //   }
  //   return phones;
  // }

  // //Жонглирование '8' / '+7'
  // private normalizePhoneNumber(phone): string {
  //   if (phone[0] !== "8" && phone[0] !== "7" && phone.length !== 11) {
  //     phone = "8" + phone;
  //   }
  //   if (phone.length == 7 || phone.length == 10) {
  //     phone = "8" + phone;
  //   }
  //   if (phone[0] !== "8" && phone.length == 11) {
  //     phone = "8" + phone.slice(1);
  //   }
  //   return phone;
  // }

}
