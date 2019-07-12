import { Component, OnInit, Injectable } from '@angular/core';
import { CourierService } from '../../services/courier.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { StateService } from '../../services/state.service';
import { Subject } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-courier',
  templateUrl: './courier.page.html',
  styleUrls: ['./courier.page.scss'],
})
export class CourierPage implements OnInit {
  public orders:any = null;
  public statuses:any = null;
  public selectedTab = 1;
  public ordersInit:boolean = false;

  public local_stop$:Subject<any> = new Subject();
  public localcheck:boolean = false;
  public g_done = 0;
  public g_process = 0;
  public g_fail = 0;
  public lvl_ind = {width : '0%'};
  public btn_go:boolean = false;

  constructor(private courier:CourierService,
              private router:Router,
              private state$:StateService,
              private auth:AuthService
              ) 
{
    this.initContent();
    var self = this;

    this.startRoute(false);

    self.state$.interval_3.pipe(takeUntil(self.local_stop$)).subscribe(() => {
      self.initContent();
      self.count_orders();
    })

    this.state$.stop$.subscribe(() => {
      self.local_stop$.next();
    });

    this.lvl_ind.width = this.state$.load_lvl.getValue()+'%'; 

    this.state$.load_lvl.pipe(takeUntil(this.local_stop$)).subscribe((lvl) => {
      console.log('lvl_ind', lvl);
      self.lvl_ind.width = lvl+'%';
    })
  }

  ngOnInit() {
   
  }

  ngOnDestroy(){
    this.local_stop$.next();
    this.state$.orders_page_check = false;
  }

  public initContent(){
    var self = this;

    if (this.state$.state.getValue() == 'orders_init'){
      this.orders = this.state$.orders.getValue();
      this.statuses = this.state$.statuses.getValue();
      this.ordersInit = true;
      self.count_orders();
    } 

    if (!this.state$.orders_page_check){
      this.state$.state.pipe(takeUntil(this.state$.stop$)).subscribe((state) => {
        if (state == "orders_init"){
          self.orders = self.state$.orders.getValue();
          self.statuses = self.state$.statuses.getValue();
          self.ordersInit = true;
          self.count_orders();
          console.log('cp_initContent.orders_subscribe', self.orders);
        }
      })
      this.state$.orders_page_check = true;
    }
  }


  public getStatus(order){
    return this.courier.getStatus(order);
  }

  public selectOrder(id){
    this.router.navigate(['/order', id]);
  }

  public tabSelect(tab){
    this.selectedTab = tab;
  }

  customTrackBy(index: number, obj: any): any{
    return index;
  }

  public getCondition(status){

    switch (this.selectedTab){
      case 1:
          if (status == 1) return true;   
          break;
      case 2:
          if (status == 5 || status == 6 ) return true;  
          break;  
      case 3:
          if (status == 4) return true;  
          break;
    }

    return false;
  }

  public count_orders(){
    let g_done = 0;
    let g_process = 0;
    let g_fail = 0;

    for (let i = 0; i < this.orders.length; i++ ){
      console.log('ORDERS_STATUSES_CAE',this.orders[i].status_id );
      switch ( this.orders[i].status_id){
        case '4' :
          g_fail++;
          break;
        case '5':
          g_done++;
          break;
        case '6':
          g_done++;
          break;   
        case '1':
          g_process++;
          break;  
      }
    }

    this.g_done = g_done;
    this.g_process = g_process;
    this.g_fail = g_fail;
    console.log('ORDERS_STATE_PROCESS', this.g_done, this.g_process, this.g_fail);
  }

  public startRoute(start = true, stop = false){
    var self = this;
    this.auth.checkAuth().subscribe((data) => {
      if (data.success == 'true'){
       
        self.sendStartRoute(data.sync_id, start, stop);
      }
    })
    
  }

  public stopRoute(){
    this.startRoute(false, true);
  }


  public sendStartRoute(cid, start, stop){
    var url   = "geo/route_start.php";
    var data  = {'cid' : cid };
    if (start){
      data['start'] = '1';
    }

    if (stop){
      data['stop'] = '1';
    }
    var self = this;
    console.log('SEND_CALL', data);
    this.auth.sendPost(url, data).subscribe((data) => {
      console.log('GO_ROUTE_DATA', data);
      if (data.success == true){
        self.btn_go = true;
        if (data.result == 'stop'){
          self.btn_go = false;
        }
      }

    });
  }

}
