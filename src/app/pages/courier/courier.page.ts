import { Component, OnInit, Injectable, ViewChildren, ViewChild, QueryList } from '@angular/core';
import { CourierService } from '../../services/courier.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { StateService } from '../../services/state.service';
import { Subject } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';
import { moveItemInArray, CdkDragDrop, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { OTTabPipePipe } from '../../pipes/o-t-tab-pipe.pipe';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-courier',
  templateUrl: './courier.page.html',
  styleUrls: ['./courier.page.scss'],
})
export class CourierPage implements OnInit {
  @ViewChildren(CdkDrag) DragItems : QueryList<CdkDrag>;
  @ViewChild(CdkDropList,{static:false}) Drop_L:CdkDropList;


  public orders:any = null;
  public statuses:any = null;
  public selectedTab = 1;
  public ordersInit:boolean = false;
  public loader:boolean = false;
  public local_stop$:Subject<any> = new Subject();
  public localcheck:boolean = false;
  public g_done = 0;
  public g_process = 0;
  public g_fail = 0;
  public lvl_ind = {width : '0%'};
  public btn_go:boolean = false;
  public notification = null;
  public dragStarted:boolean = false;

  constructor(private courier:CourierService,
              private router:Router,
              private state$:StateService,
              private auth:AuthService,
              private bs:BarcodeScanner,
              private vbr:Vibration
              ) 
{
  var self = this;
  
  this.initContent();
  if (this.state$.position.getValue() != null){
    this.startRoute(false);
  }

  this.state$.state.pipe(takeUntil(this.local_stop$)).subscribe((state) => {
    if (state == 'orders_init'){
      self.initContent();
    }
  })
  }

  ngAfterViewInit(){}
  ngOnInit() {}

  public submitOrder(){
    var self = this;
    console.log('SUBMIT_ORDER_CALL');
    this.bs.scan().then((data) => {
      console.log('SCAN_RETURN_DATA', data);
      if (data.text != ""){
        self.loader = true;
        self.courier.findOrder(data.text).subscribe((res) => {
          if (res.success == 'true'){
            self.courier.sumbitOrder(res.order_id).subscribe((re_s) => {
              if (re_s){
                self.submitOrder();
              }
              self.loader = false;
            });
          } else {
            self.auth.showError(2);
            self.loader = false;
          }
          self.state$.confirmed = true;
          self.orders.forEach(order => {
            if (order.confirm == '0'){
              self.state$.confirmed = false;
            }
          });
        })
      } else {
        self.loader = false;
      }
    });
  }

  public ordersListChanged(orders){
    console.log('OrdesListChanges orders',orders);
    this.orders = orders;
    let way:any[] = new Array();
    orders.forEach(order => {
      if (order.status_id == 1){
        way.push(order.id);
      }
    });
    this.state$.old_way = way;
    console.log('OrdesListChanges newWay',way);
  }

  ngOnDestroy(){
    this.local_stop$.next();
    this.state$.orders_page_check = false;
  }

  public manualRoute(){
    if (this.state$.manual_route){
      this.courier.changeRouteMode('auto');
    } else {
      this.courier.changeRouteMode('manual');
    }
    this.vbr.vibrate(300);
  }


  public initContent(){
    console.log('INIT_CONTENT_CALL');
    var self = this;
    this.orders = this.state$.orders_data;
    this.statuses = this.state$.statuses.getValue();
    if (this.orders == null || this.statuses == null){
        this.loader = true;
        setTimeout(function(){
          self.initContent();
        }, 500);
        return false;
    } 
    this.loader = false;
    this.ordersInit = true;
    self.count_orders();
  }


  public getStatus(order){
    return this.courier.getStatus(order);
  }

  public selectOrder(id){
    for (var i=0; i < this.orders.length; i++){
      if (this.orders[i].id == id){
          if (this.orders[i].confirm ==  '0'){
            return false;
          }
      }
    }
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
      switch ( String(this.orders[i].status_id)){
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
    var data  = {'cid' : cid,
                 'lt'  : this.state$.position.getValue().lt,
                 'lg'  : this.state$.position.getValue().lg };
    if (start){
      data['start'] = '1';
    }
    if (stop){
      data['stop'] = '1';
    }
    var self = this;
    this.auth.sendPost(url, data).subscribe((data) => {
      if (data.success == true){
        self.btn_go = true;
        if (data.result == 'stop'){
          self.btn_go = false;
        }
      }
    });
  }

  public findOrder(){
    var self = this;
    this.bs.scan().then((data) => {
      self.courier.findOrder(data.text).subscribe((res) => {
        if (res.success == 'true'){
          this.orders.forEach((order) => {
            if (order.id == res.order_id){
            self.selectOrder(res.order_id);
            return false;   
            } 
          })
        } else {
          self.auth.showError(2);
        }
      })
    });
  }

}
