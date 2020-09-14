import {
  animate, state,
  style,

  transition, trigger
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { AlertController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Response } from 'src/app/interfaces/response';
import { AuthService } from '../../services/auth.service';
import { CourierService } from '../../services/courier.service';
import { SettingsService } from '../../services/settings.service';
import { StateService } from '../../services/state.service';
import { SysService } from '../../services/sys.service';
import { MapService } from './../../services/sys/map.service';


@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        display: 'flex',
      })),
      state('closed', style({
        display: 'none',
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('openBtn', [
      // ...
      state('open', style({
        display: 'flex',
      })),
      state('closed', style({
        display: 'none',
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('closeConfirm', [
      // ...
      state('open', style({
        display: 'grid',
      })),
      state('closed', style({
        display: 'none',
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ])
  ]
})
export class BalancePage implements OnInit {
  public info: Response = null;
  public pageInit: boolean = false;
  public loader = true;
  public local_stop$: Subject<any> = new Subject();
  public confirmWindow: boolean = false;
  public commentText: any = null;
  public commentError: boolean = false;
  public cashCheck: boolean = false;
  public cashCheckData: any = null;
  public openBtn: boolean = false;
  public review_w: boolean = false;
  public failsOrder: boolean = false;
  public failsOrderNotFull: boolean = false;
  public failOrdersCount: number = 0;
  public fo_comment: string = ""; //комментарий к частичной сдаче заказов
  public schedule = Boolean(this.settings.rules.schedule);
  public isShowSchedule: boolean = false;
  public isGoToWork: boolean = false;
  public isStopWork: boolean = false;
  public nonWorkDates: Array<any> = [];
  public notWorkRules = {};

  constructor(private courier: CourierService,
    private auth: AuthService,
    private router: Router,
    public state$: StateService,
    private alert: AlertController,
    private camera: Camera,
    private AP: AndroidPermissions,
    public settings: SettingsService,
    public sys: SysService,
    private sysMap: MapService,
    private firebase: FirebaseX
  ) {
    this.AP.requestPermission(this.AP.PERMISSION.ACCESS_FINE_LOCATION);
    if (this.info == null) {
      this.loader = true;
    } else {
      this.loader = true;
    }
    this.state$.map_state.next('init');
    let self = this;
    self.updateInfo();
    self.initCashout();
    if (!this.state$.balance_check) {
      this.state$.interval_30.pipe(takeUntil(this.state$.stop$)).subscribe(() => {
        self.updateInfo();
        self.initCashout();
      });
    }

    this.initCashout();
  }

  ngOnInit() {
    this.schedule = Boolean(this.settings.rules.schedule);
    this.courier.getBalance(Number(this.auth.userId), 1).subscribe((data: any) => {
      this.firebase.setUserProperty('courier', data.name);
      this.courier.ordersInfo = data.res_more;
      this.courier.count_orders(data.res_more);
      this.courier.ordersShortData.next(data.res_more);
      this.state$.orders.next(data.res_more);
    });
  }

  ngOnDestroy() {
    this.local_stop$.next();
  }


  public updateInfo() {
    var self = this;

    this.auth.checkAuth().subscribe((data: any) => {
      if (data.success = 'true') {
        self.getInfo(data.sync_id);
      }
    })
  }

  public getInfo(sync_id: number) {
    var self = this;

    this.courier.getBalance(sync_id).subscribe((data: any) => {
      self.info = data;
      self.pageInit = true;
      self.loader = false;
      this.state$.filial = data.filial;

    });
  }


  public cashOut() {
    console.log('sys::cashOut()');
    console.log('sys::cashOut() info != null', this.info != null);
    console.log('sys::cashOut() !cashCheck', !this.cashCheck);
    this.confirmWindow = !this.confirmWindow;
    console.log('sys::cashOut() confirmWindow', this.confirmWindow);
    console.log('sys::cashOut() !openBtn && !failsOrder', !this.openBtn && !this.failsOrder);
  }

  public sendCash(photo: string) {
    this.loader = true;

    const url = 'orders';
    let data = { 'action': 'cashout', 'sum': this.info.sumNal, 'image': photo, 'isFull': '', 'ordersCount': 0, 'comment': '', 'ordersComment': '' };

    if (this.commentText != '' && this.commentText) {
      data['isFull'] = '0';
      data['comment'] = this.commentText;
    } else {
      data['isFull'] = '1';
    }

    if (this.failsOrderNotFull) {
      data['ordersCount'] = this.failOrdersCount;
      data['ordersComment'] = this.fo_comment;
    }
    console.log('o_c', data['ordersCount']);
    console.log('ocm', data['ordersComment']);

    var self = this;
    this.auth.sendPost(url, data).subscribe((resp: any) => {
      console.log('CASHOUT_RESPONSE', resp);
      if (resp.success == 'true') {
        self.cashoutResult(true);
      } else {
        self.cashoutResult(false);
      }
    })
  }

  public checkCash() {
    var url = 'orders';
    var data = { 'action': 'checkCashout' }

    return this.auth.sendPost(url, data);
  }

  public initCashout() {
    var self = this;
    this.checkCash().subscribe((data: any) => {
      if (data.success == 'true') {
        self.cashCheck = true;
        self.cashCheckData = data;
      } else {
        self.cashCheck = false;
      }
    })
  }

  public getPhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    var self = this;
    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log('image_str', base64Image);
      self.sendCash(base64Image);
    });
  }

  public async cashoutResult(result: boolean) {

    if (result) {
      const alert = await this.alert.create({
        header: 'Сдача',
        message: 'Средства успешно сданы',
        buttons: ['OK']
      });
      await alert.present();
      this.confirmWindow = false;
      this.loader = false;
    } else {
      const alert2 = await this.alert.create({
        header: 'Ошибка',
        message: 'Ошибка сдачи средств',
        buttons: ['OK']
      });
      await alert2.present();
      this.confirmWindow = false;
      this.loader = false;
    }
  }

  public answer(isFull: boolean) {
    console.log('sys:: answer');
    if (!isFull && (!this.commentText || this.commentText == '')) {
      this.commentError = true;
      return false;
    }
    this.failOrders();
  }

  //спрашивает, сколько заказов не сдано
  public failOrders() {
    console.log('sys:: failOrders');
    if (this.info.ordersFail == 0) {
      this.openBtn = true;
      return false;
    } else {
      this.failsOrder = true;
    }
  }

  public fo_answer(flag: boolean) {

    if (!this.failsOrderNotFull) {
      if (flag) {
        this.failsOrderNotFull = false;
        this.openBtn = true;
      } else {
        this.failsOrderNotFull = true;
      }
    } else {
      if (flag) {
        this.failsOrderNotFull = false;
      } else {
        if (this.failOrdersCount == 0 || this.fo_comment == "" || !this.fo_comment) {
          this.commentError = true;
        } else {
          this.openBtn = true;
        }
      }
    }
  }

  public commentInput() {
    this.commentError = false;
  }

  //отзыв о приложении
  public writeReview() {
    this.review_w = !this.review_w;
  }


  public sendReview(text: String) {
    this.loader = true;
    let url = 'orders';
    let data = {
      'action': 'writeReview',
      'text': text
    }
    let self = this;
    this.auth.sendPost(url, data).subscribe((resp: any) => {
      if (resp.success == 'true') {
        self.auth.showError(7);
      } else {
        self.auth.showError(8);
      }
      self.review_w = false;
      self.loader = false;
    });
  }

  public navToSettings() {
    this.sysMap.navigate(['/about']);
  }

  public showSchedule() {
    this.router.navigate(['schedule']);
  }

  navToMap() {
    this.router.navigate(['map'])
  }
}
