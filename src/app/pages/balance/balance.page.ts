import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { CourierService } from '../../services/courier.service';
import { AuthService } from '../../services/auth.service';
import { MapService} from '../../services/map.service';
import { StateService } from '../../services/state.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AlertController } from '@ionic/angular';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';
import { domainToASCII } from 'url';

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
    ])
  ]
})
export class BalancePage implements OnInit {
  public info = null;
  public pageInit:boolean = false;
  public out_process:boolean = false;
  public out_counter = 0;
  public loader = true;
  public local_stop$:Subject<any> = new Subject();
  public confirmWindow:boolean = false;
  public commentText:any = null;
  public commentError:boolean = false;
  public cashCheck:boolean = false;
  public cashCheckData:any = null;


  constructor(private courier:CourierService,
              private auth:AuthService,
              private router:Router,
              private map:MapService,
              private state$:StateService,
              private alert:AlertController,
              private camera:Camera
             ) {
    if (this.info == null){
     this.loader = true;
    } else {
      this.loader = true;
    }
    this.state$.map_state.next('init');
    var self = this;
    if (!this.state$.balance_check){
      this.state$.interval_2s.pipe(takeUntil(this.state$.stop$)).subscribe(() => {
        self.updateInfo();
        self.initCashout();
      });
    }

    this.initCashout();
   }

  ngOnInit() {}
  
  ngOnDestroy(){
    this.local_stop$.next();
  }

  public updateInfo(){
    var self =this;

    this.auth.checkAuth().subscribe((data:any) => {
      console.log('update_info_data', data);
      if (data.success = 'true'){
        self.getInfo(data.sync_id);
      }
    })
  }

  public getInfo(sync_id){
    var self = this;
    
    this.courier.getBalance(sync_id).subscribe((data) => {
      console.log('balance_data', data);
      self.info =data;
      self.pageInit = true;
      self.loader = false;
    });
  }

  public p_btn(){
    setTimeout(() => {
      this.out_counter = 0;
      this.out_process = false;
      console.log('outprocess_die');
    }, 1000);

    if (this.out_process){
      this.out_counter++;
      console.log('outprocess_true', this.out_counter);
      if (this.out_counter == 2){
        this.logout();
      }
    } else {
      console.log('outprocess_false');
      this.out_process = true;
    }
  }

  public logout(){
    var url = 'orders';
    var data = {'action' : 'logout'}

    var self = this;
    this.auth.sendPost(url, data).subscribe((data:any) => {
      if (data.success == 'true' ){
        self.auth.logout();
      }
    })
  }

  public cashOut(){
    this.confirmWindow = !this.confirmWindow;
  }

  public sendCash(isFull, photo){
    this.loader = true;

    var url = 'orders';
    var data = {'action' : 'cashout','sum' : this.info.sumNal, 'image' : photo };

    if (!isFull){
      data['isFull']  = '0';
      data['comment'] = this.commentText;
    } else {
      data['isFull']  = '1';
    }

    var self = this;
    this.auth.sendPost(url, data).subscribe((resp:any) => {
        if (resp.success == 'true'){
          self.cashoutResult(true);
        } else {
          self.cashoutResult(false);
        }
    })
  }

  public checkCash(){
    var url = 'orders';
    var data = {'action' : 'checkCashout'}

    return this.auth.sendPost(url, data);
  }

  public initCashout(){
    var self = this;
    this.checkCash().subscribe((data:any) => {
      if (data.success == 'true'){
        self.cashCheck = true;
        self.cashCheckData = data; 
      } else {
        self.cashCheck = false;
      }
    })
  }

  public getPhoto(isFull){
    if (!isFull && (!this.commentText || this.commentText == '')){
      this.commentError = true;
      return false;
    }

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
      self.sendCash(isFull, base64Image);
    });
  }

  public async cashoutResult(result){
    this.loader = false;
    if (result){
      const alert = await this.alert.create({
        header: 'Сдача',
        message: 'Средства успешно сданы',
        buttons: ['OK']
      });
  
      await alert.present();
    } else {
      const alert2 = await this.alert.create({
        header: 'Ошибка',
        message: 'Ошибка сдачи средств',
        buttons: ['OK']
      });
  
      await alert2.present();
    }

    this.confirmWindow = false;
  }

  public commentInput(){
    this.commentError = false;
  }

}
