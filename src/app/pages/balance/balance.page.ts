import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CourierService } from '../../services/courier.service';
import { AuthService } from '../../services/auth.service';
import { MapService} from '../../services/map.service';
import { StateService } from '../../services/state.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {
  public info = null;
  public pageInit:boolean = false;
  public out_process:boolean = false;
  public out_counter = 0;
  public loader = true;
  public local_stop$:Subject<any> = new Subject();

  constructor(private courier:CourierService,
              private auth:AuthService,
              private router:Router,
              private map:MapService,
              private state$:StateService
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
      });
    }
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
}
