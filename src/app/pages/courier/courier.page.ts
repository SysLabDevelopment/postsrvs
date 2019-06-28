import { Component, OnInit, Injectable } from '@angular/core';
import { CourierService } from '../../services/courier.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { StateService } from '../../services/state.service';
import { Subject } from 'rxjs';

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
  

  constructor(private courier:CourierService,
              private router:Router,
              private state$:StateService,
              ) {
                this.initContent();
                var self = this;
                
                this.state$.interval_3.pipe(takeUntil(this.local_stop$)).subscribe(() => {
                  self.initContent();
                })

                this.state$.stop$.subscribe(() => {
                  self.local_stop$.next();
                });
  }

  ngOnInit() {
   
  }

  ngOnDestroy(){
    this.local_stop$.next();
  }

  public initContent(){
    var self = this;

    if (this.state$.state.getValue() == 'orders_init'){
      this.orders = this.state$.orders.getValue();
      this.statuses = this.state$.statuses.getValue();
      this.ordersInit = true;

    } 

    if (!this.state$.orders_page_check){
      this.state$.state.pipe(takeUntil(this.state$.stop$)).subscribe((state) => {
        if (state == "orders_init"){
          self.orders = self.state$.orders.getValue();
          self.statuses = self.state$.statuses.getValue();
          self.ordersInit = true;
          console.log('cp_initContent.orders_subscribe', self.orders);
        }
      })
      this.state$.orders_page_check = true;
    }
  }

  public getPrice(order){
    
    if (order){
      var price: number = 0;
        for( var i = 0; i < order.goods.length; i++){
          var good = order.goods[i];
          price += Number(good.Price) * Number(good.kol_vo) ;
        }      
      return price;
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

}
