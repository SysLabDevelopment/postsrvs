import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { CallNumber } from "@ionic-native/call-number/ngx";
import { Device } from '@ionic-native/device/ngx';
import { Network } from '@ionic-native/network/ngx';
import { ModalController } from '@ionic/angular';
import { Storage } from "@ionic/storage";
import { CacheService } from "ionic-cache";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Meta } from 'src/app/interfaces/meta';
import { Order } from 'src/app/interfaces/order';
import { DeliveredComponent } from '../../components/delivered/delivered.component';
import { NotDeliveredComponent } from '../../components/not-delivered/not-delivered.component';
import { Reason } from "../../interfaces/reason";
import { Statuses } from "../../interfaces/statuses";
import { AuthService } from "../../services/auth.service";
import { CourierService } from "../../services/courier.service";
import { SettingsService } from "../../services/settings.service";
import { StateService } from "../../services/state.service";
import { SysService } from "../../services/sys.service";
import { MapService } from "../../services/sys/map.service";
import { OrderService } from '../../services/sys/order.service';
import { DrawPage } from '../draw/draw.page';
import { DataService } from './../../services/sys/data.service';

@Component({
  selector: "app-order",
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '264px',
      })),
      state('closed', style({
        height: '50px',
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ])],
  templateUrl: "./order.page.html",
  styleUrls: ["./order.page.scss"],
})
export class OrderPage implements OnInit {
  public orderId: string = null;
  public clientId: string = null;
  public status_id: number = null;
  public status: string = null;
  public goods: any = null;
  public address: any = null;
  public order: Order = null;
  public name: string = null;
  public timeFrom: string = null;
  public timeTo: string = null;
  public phone: string = null;
  public pageInit: boolean = true;
  public statuses: Statuses[] = [
    { id: 4, status: "Не доставлено" },
    { id: 5, status: "Доставлено" },
    { id: 6, status: "Частично доставлено" },
  ];
  public reasons: Reason[] = [
    { id: 1, reason: "Не удалось Дозвониться!" },
    { id: 2, reason: "Отказ, при созвоне с клиентом" },
    { id: 3, reason: "Отказ от доставки без объяснения причины" },
    { id: 4, reason: "Ошибка оформления ИМ" },
    { id: 5, reason: "Получатель передумал" },
    { id: 6, reason: "Товар не подошел/не понравился" },
    { id: 7, reason: "Финансовые трудности у получателя" },
    { id: 8, reason: "Перенос даты доставки получателем." },
    { id: 10, reason: "Не успел" },
    { id: 11, reason: "Переехали/нев.Адрес" },
  ];
  public commentText: any = null;
  public g_quants: any = {};
  public changeWindow: boolean = false;
  public selectedPayment = "1";
  public client_status = "";
  public client_status_dt = "";
  public client_status_id = "";
  public vlog: string = null;
  public poruch: string = null;
  public mass: unknown = null;
  public amount: unknown = null;
  public email_input = "";
  public phone_input = "";
  public barcode_flag = false;
  public barcode_url: string = null;
  public barcode: unknown = null;
  public selectedReason: any = null;
  public selectedStatus: any = null;
  public hide_status = false;
  public $codeStop: Subject<any> = new Subject();
  public showPhone: boolean = false;
  public podrazd: unknown = null;
  public email_error = false;
  public pay_access: boolean = false;
  public pay_access_data: any = null;
  public show_info: boolean = false;
  public show_email: boolean = false;
  public callWindow: boolean = false;
  public drawimage: boolean = false;
  public imageToShow: string = null;
  coords: Array<any>;
  public orderPhones: Array<string> = [];
  public selectedPhone: string;
  public note: string;
  public today = new Date();
  public tomorrow = new Date();
  public new_plan_date: string; //Дата переноса заказа
  public openCompany = false;
  public checkBase64Image: string;
  public drawNeedle: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courier: CourierService,
    private state$: StateService,
    private auth: AuthService,
    private http: HttpClient,
    private CL: CallNumber,
    public sys: SysService,
    public settings: SettingsService,
    private sysMap: MapService,
    private data: DataService,
    private storage: Storage,
    private cache: CacheService,
    private network: Network,
    private orderService: OrderService,
    private bs: BarcodeScanner,
    private device: Device,
    public modalController: ModalController
  ) {
    this.orderId = this.route.snapshot.paramMap.get("id");

    this.initOrder();
    var img = localStorage.getItem("drawImg");
    if (img) {
      this.imageToShow = "data:image/jpg;base64," + img;
    }
  }

  ngOnInit() {
    this.courier.initStatuses();
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
    this.note = localStorage.getItem(this.orderId);
  }

  ngAfterViewChecked() {
    var img = localStorage.getItem("drawImg");
    if (img) {
      this.imageToShow = "data:image/jpg;base64," + img;
    }
  }

  public sendPost(url: string, data: any) {
    data = JSON.stringify(data);

    return this.http.post(url, data);
  }

  public async drawBtn(need: boolean) {
    this.drawNeedle = need;
    if (need) {
      this.draw()
    } else {
      localStorage.removeItem("drawImg");
    }
  }
  public async draw() {
    const modal = await this.modalController.create({
      component: DrawPage,
      showBackdrop: false
    });
    await modal.present();
    const details = await modal.onDidDismiss();
    console.log('sys:: drawModal dismiss details: ', details);
    if (details.data == 'ok') {
      this.doneOrder();
    }
  }

  public parsePhone(phone: string): Array<string> {
    let phones: Array<string> = [];
    phone = phone.replace(/\D+/g, "");

    while (phone.length > 7) {
      phone = this.normalizePhoneNumber(phone);
      phones.push(phone.slice(null, 11));
      phone = phone.slice(11);
    }

    return phones;
  }

  private normalizePhoneNumber(phone: string): string {
    if (phone[0] !== "8" && phone[0] !== "7" && phone.length !== 11) {
      phone = "8" + phone;
    }
    if (phone.length == 7 || phone.length == 10) {
      phone = "8" + phone;
    }
    if (phone[0] !== "8" && phone.length == 11) {
      phone = "8" + phone.slice(1);
    }
    return phone;
  }

  public phoneClick(action: string) {
    this.orderPhones = this.parsePhone(this.phone);
    let courierPhone = this.parsePhone(this.order.courier_phone)[0];

    if (this.orderPhones.length == 1) {
      this.selectedPhone = this.orderPhones[0];
    }

    switch (action) {
      case "init":
        this.callWindow = !this.callWindow;
        break;
      case "phone":
        this.CL.callNumber(this.selectedPhone, false).then(() => { });
        this.callWindow = false;
        break;
      case "operator":
        if (this.network.type == 'none') {
          this.phoneClick('phone');
          return false;
        }
        if (this.selectedPhone && courierPhone) {
          let url = "orders";
          let data = {
            action: "send_phone",
            client_number: this.selectedPhone,
            cur_number: courierPhone,
          };
          this.auth.sendPost(url, data).subscribe((resp) => {
            console.log("call_subs", resp);
          });
          this.auth.showError(9);
          this.callWindow = false;
        }
        break;
    }
  }

  public initOrder() {
    this.storage.get('orders').then((orders: Array<Order>) => {
      console.log('Список заказов из стоража', orders);
    })
    this.storage.get('orders').then((orders) => {
      this.order = orders?.filter((order: Order) => { return order.id.toString() == this.orderId })[0];
      this.goods = this.order.goods;
      this.address = this.order.client_address;
      this.timeFrom = this.order.datetime_from;
      this.timeTo = this.order.datetime_to;
      this.phone = this.order.client_phone;
      this.status = this.order.status_text;
      this.status_id = Number(this.order.status_id);
      this.client_status = this.order.client_status;
      this.client_status_dt = this.order.client_status_dt;
      this.vlog = this.order.vlog;
      this.poruch = this.order.poruch;
      (this.mass = this.order.mass), (this.amount = this.order.amount);
      this.podrazd = this.order.Podrazd;
      this.coords = [this.order.lt, this.order.lg];
      this.setQuants();
      this.ifPaid();
      this.getBalnce();
      this.getPayData();
      this.initClientInfo();
    });
  }

  public getClientState() {
    var states = this.state$.client_states.getValue();
    var state_id = this.order.client_state;

    for (let i = 0; i < states.length; i++) {
      if (states[i].id == state_id) {
        return states[i].state;
      }
    }

    return "";
  }
  //Заполняет массив с ценой товаров и их количеством(для частички)
  public setQuants() {
    var goods = this.order.goods;

    for (var i = 0; i < goods.length; i++) {
      let good = goods[i];
      let code = good.Code;
      let count = good.final_kol_vo ? good.final_kol_vo : good.kol_vo;
      let quant = { amount: good.kol_vo, price: good.Price };
      this.g_quants[code] = quant;
    }
  }

  public changeQuant(code: string, action: string) {
    var q: number = this.g_quants[code]["amount"];
    var good = null;

    for (var i = 0; i < this.order.goods.length; i++) {
      if (this.order.goods[i].Code == code) {
        good = this.order.goods[i];
      }
    }

    if (action == "plus") {
      var n_q = q + 1;

      if (n_q > good.kol_vo) {
        return false;
      } else {
        this.g_quants[code]["amount"] = n_q;
      }
    } else if (action == "minus") {
      var n_q = q - 1;

      if (n_q < 0) {
        return false;
      } else {
        this.g_quants[code]["amount"] = n_q;
      }
    } else if (action == 'delete') {
      this.g_quants[code]["amount"] = 0;
    }
    this.getSum();
  }


  public navBack() {
    localStorage.removeItem("drawImg");
    this.router.navigate(["/courier"]);
  }

  public getStatus(): string {
    return this.courier.getStatus(this.order);
  }

  public getBalnce() { }

  public changeStatus() {
    if (!this.changeWindow) {
      this.changeWindow = true;
    }
  }

  public close_window() {
    this.changeWindow = false;
  }

  public selectStatus(id: number) {
    this.selectedStatus = id;
    if (id == 4 || id == 5) {
      this.setQuants();
      this.getSum();
    }
    if (id == 4) {
      this.drawNeedle = false;
    }
  }


  public sendPayCall(order: Order = this.order, newStatus = this.selectedStatus as number) {
    if (this.network.type == 'none') {
      //Если оффлайн
      this.cache.getItem('syncRequests').then((syncRequests: Array<any>) => {
        order = { ...{ phone_input: this.phone_input }, ...{ email_input: this.email_input }, ...{ quants: this.g_quants }, ...order, ...{ selectedPayment: this.selectedPayment }, ...{ selectedReason: this.selectedReason }, ...{ new_plan_date: this.new_plan_date }, ...{ commentText: this.commentText }, ...{ check: this.checkBase64Image } };
        syncRequests && syncRequests.push({ order, newStatus });
        this.cache.saveItem('syncRequests', syncRequests, 'delayedCalls').then(() => {
          console.log(`sys:: Отложено изменение статуса на ${newStatus} для заказа ${order.client_id}`);
          this.localModifyOrders(newStatus);
          this.router.navigate(['courier']);
        })
      })
    } else {
      //Если онлайн
      this.localModifyOrders(newStatus);
      order = { ...{ phone_input: this.phone_input }, ...{ email_input: this.email_input }, ...{ quants: this.g_quants }, ...order, ...{ selectedPayment: this.selectedPayment }, ...{ selectedReason: this.selectedReason }, ...{ new_plan_date: this.new_plan_date }, ...{ commentText: this.commentText }, ...{ check: this.checkBase64Image } };
      this.orderService.sendDelayedCall(order, newStatus);
      this.router.navigate(['courier']);
    }
  }

  public submitChange() {
    let self = this;
    this.storage.get('orders').then((orders) => {
      orders?.map((order: Order) => {
        if (String(order.id) == String(this.order.id)) {
          order.status_id = this.selectedStatus;
          this.data.saveOrders(orders);
          this.data.orders.next(orders);
        }
      });
    })
    let noSkip = true;
    switch (this.selectedStatus) {
      case 4:
        if (this.selectedReason != null) {
          let new_plan_date = new Date(this.new_plan_date);

          this.courier
            .changeStatus(
              this.selectedStatus,
              String(this.order.id),
              undefined,
              this.selectedReason,
              null,
              null,
              new_plan_date.toLocaleDateString()
            )
            .subscribe((data: any) => {
              if (data.success == "true") {
                self.changeWindow = false;
                self.state$.state.next("init");
                self.selectedPayment = "1";
                self.selectedReason = null;
                self.selectedStatus = null;
                self.router.navigate(["courier"]);
                self.state$.updateWayInfo.next("0");
              }
              localStorage.removeItem("drawImg");
            });
        }
        break;
      case 5:
        if (this.selectedPayment !== '2') {
          noSkip = false
        }
        this.sys.doOCR(this.checkBase64Image, noSkip).then((recognizedData) => {
          let text = (this.commentText ? this.commentText : "");
          this.courier
            .changeStatus(
              this.selectedStatus,
              String(this.order.id),
              text,
              undefined,
              undefined,
              this.selectedPayment,
              '',
              this.checkBase64Image,
              recognizedData
            )
            .subscribe((data: any) => {
              if (data.success == "true") {
                self.changeWindow = false;
                self.state$.state.next("init");
                self.selectedPayment = "1";
                self.selectedReason = null;
                self.selectedStatus = null;
                if (!self.pay_access) {
                  self.router.navigate(["courier"]);
                }
                self.initOrder();
                self.state$.updateWayInfo.next("0");
              }
              localStorage.removeItem("drawImg");
            });
        })
        break;
      case 6:

        if (this.selectedPayment !== '2') {
          noSkip = false
        }
        this.sys.doOCR(this.checkBase64Image, noSkip).then((recognizedData) => {
          this.courier
            .changeStatus(
              this.selectedStatus,
              String(this.order.id),
              undefined,
              undefined,
              this.g_quants,
              this.selectedPayment,
              '',
              this.checkBase64Image,
              recognizedData
            )
            .subscribe((data: any | null) => {
              if (data?.success == "true") {
                self.changeWindow = false;
                self.state$.state.next("init");
                self.selectedPayment = "1";
                self.selectedReason = null;
                self.selectedStatus = null;
                if (!self.pay_access) {
                  self.router.navigate(["courier"]);
                }
                self.initOrder();
                self.state$.updateWayInfo.next("0");
              } else {
                this.sys.presentToast(
                  "Нет товаров в заказе",
                  "danger",
                  "Частичная доставка невозможна"
                );
              }
              localStorage.removeItem("drawImg");
            });
        })
        break;
    }
  }

  public getSum() {
    if (this.order) {
      let price: number = 0;
      let quants = this.g_quants;
      for (let code in quants) {
        price += quants[code]["price"] * quants[code]["amount"];
      }

      this.order.rur = price;
    }
  }

  //подсчитывает сумму заказа
  public getPrice(order: Order) {
    if (order) {
      let price: number = 0;
      for (let i = 0; i < order.goods.length; i++) {
        let good = order.goods[i];
        price += Number(good.Price) * Number(good.kol_vo);
      }
      return price;
    }
  }

  public selectPayment(item: string) {
    this.selectedPayment = item;
  }

  public sendPay() {
    let goods = this.order.goods;
    let quants = this.g_quants;
    let callback_url =
      this.sys.proxy + "https://mobile.postsrvs.ru/mobile/pay_callback.php";
    let products = [];

    for (let code in quants) {
      if (quants[code]["amount"] > 0) {
        for (let i = 0; i < goods.length; i++) {
          if (goods[i]["Code"] == code) {
            let good_name = goods[i]["Name"];
            let good_amount = quants[code]["amount"];
            let good_price = Math.round(quants[code]["price"] * 100) / 100;
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

    var purchase = { products: products };
    console.log("goods_description\n", purchase);
    var self = this;

    if (this.pay_access) {

      let order_data = {
        apikey: String(this.pay_access_data.api_key),
        login: String(this.pay_access_data.phone),
        cashier_name:
          String(this.pay_access_data.name) +
          String(this.pay_access_data.phone),
        purchase: purchase,
        callback_url: callback_url,
        mode: "email",
        customer_email: this.email_input,
        customer_phone: this.phone_input,
        card_amount: '',
        cash_amount: ''
      };
      if (self.selectedPayment == "2") {
        order_data["card_amount"] = "#";
      } else {
        order_data["cash_amount"] = "#";
      }

      if (this.phone_input != "") {
        order_data["customer_phone"] = this.phone_input;
      }

      self.send_api_data(order_data);
    }
  }

  //Получаем api key & login
  public getPayData() {

    let url = "pay_order";
    let data = { action: "getData", orderId: this.clientId };
    let self = this;
    if (navigator.onLine) {
      this.auth.sendPost(url, data).subscribe((res: any) => {
        console.log("GET_PAY_DATA", res);
        if (res.success == "true") {
          self.pay_access = true;
          self.pay_access_data = res;
        } else {
          self.pay_access = false;
        }
      });
    } else {
      self.pay_access = false;
    }
  }

  public send_api_data(api_data: any) {
    let url = "pay_order";
    let self = this;
    this.order.rur = 0;

    api_data.purchase.products.forEach((product: any) => {
      this.order.rur += product.price * product.quantity;
    });

    var data = {
      action: "sendPay",
      orderData: api_data,
      orderId: this.order.id,
    };
    if (navigator.onLine) {
      this.auth.sendPost(url, data).subscribe((res: any) => {
        self.submitChange();
        self.checkPayment();
        self.hide_status = true;
      });
    } else {
      let requests: any[] = [];
      this.cache.getItem('requests').then((req) => {
        if (req !== undefined) {
          requests = req;
        }
        requests.push({ url: url, data: data });
        this.cache.saveItem('requests', requests);

        self.submitChange();
        self.checkPayment();
        self.hide_status = true;
      })

    }
  }


  public checkPayment() {
    var self = this;
    this.state$.interval_1ss.pipe(takeUntil(this.$codeStop)).subscribe(() => {
      self.ifPaid();
      console.log("paid_iter");
    });
  }

  public ifPaid() {
    var url = "pay_order";
    var data = { action: "checkPaid", orderId: this.order.id };
    var self = this;

    this.auth.sendPost(url, data).subscribe((data) => {
      if (data.success == "true" && data.barcode != null) {
        self.barcode_flag = true;
        self.barcode_url = data.barcode_url;
        self.barcode = data.barcode;
        self.$codeStop.next(null);
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

  public intentStart() {
    this.state$.intentStart(this.coords);
  }

  public showRoute() {
    this.sysMap.showRoute(this.order);

  }

  public doneOrder() {
    let drawedImg = localStorage.drawImg;
    if (this.drawNeedle && !drawedImg) {
      this.drawBtn(this.drawNeedle);
    } else {
      if (this.selectedPayment == '2') {
        this.sys.checkPhoto().then((imageData) => {
          this.checkBase64Image = 'data:image/jpeg;base64,' + imageData;
          this.sendPayCall();
        });
      } else {
        this.sendPayCall();
      }

    }
  }

  public saveNote() {
    localStorage.setItem(this.orderId, this.note);
    this.sysMap.infoUpdated.next(null);
  }

  public tapBlock() {
    this.openCompany = !this.openCompany;
  }

  public localModifyOrders(newStatus: number) {
    let meta: Meta = {
      label: 'localChanges'
    };
    this.storage.get('orders').then((orders) => {
      orders?.map((order: Order) => {
        if (order.id.toString() == this.order.id.toString()) {
          order.status_id = newStatus;
          this.data.saveOrders(orders).then(() => this.sysMap.infoUpdated.next(meta));
          this.data.orders.next(orders);
        }
      });
    })
  }

  public scanReturned() {
    this.bs.scan().then((data) => {
      const url = this.sys.proxy + 'https://mobile.postsrvs.ru/mobile/orders';
      let data1 = {
        "orderId": this.orderId,
        "box_barcode": data.text,
        "action": "get_box",
        "uuid": this.device.uuid
      };
      this.http.post(url, data1).subscribe((res: string[]) => {
        console.log(`sys:: ответ скана возврата: ${res}`);
        this.changeQuant(res[0], 'delete')
      })
    })
  }

  async presentNotDeliveredModal() {
    const modal = await this.modalController.create({
      component: NotDeliveredComponent,
      cssClass: 'done-order-modal',
      componentProps: {
        reasons: this.reasons
      },
      showBackdrop: true
    });
    await modal.present();
    const details = await modal.onDidDismiss();
    console.log('sys:: dismiss details: ', details);
    this.selectedReason = details.data.selectedReason;
    this.commentText = details.data.commentText;
    details.data && this.doneOrder();
  }

  async presentDeliveredModal() {
    const modal = await this.modalController.create({
      component: DeliveredComponent,
      cssClass: 'done-order-modal',
      componentProps: {
        goods: this.goods
      },
      showBackdrop: true
    });
    await modal.present();
    const details = await modal.onDidDismiss();
    console.log('sys:: dismiss details: ', details);
    this.drawNeedle = details.data.drawNeedle;
    this.selectedPayment = details.data.selectedPayment;
    this.email_input = details.data.email_input;
    this.phone_input = details.data.phone_input;
    this.commentText = details.data.commentText;
    if (details.data) {
      this.doneOrder();
    }

  }
}
