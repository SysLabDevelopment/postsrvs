import { Component, OnInit, Injectable } from '@angular/core';
import { CourierService } from '../../services/courier.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-courier',
  templateUrl: './courier.page.html',
  styleUrls: ['./courier.page.scss'],
})
export class CourierPage implements OnInit {
  public orders:any = null;
  public statuses:any = null;

  public ordersInit:boolean = false;

  constructor(private courier:CourierService,
              private router:Router) { 
                this.initContent();
  }

  ngOnInit() {
   
  }

  public initContent(){
    var self = this;

    if (this.courier.state.getValue() == 'orders_init'){
      this.orders = this.courier.orders.getValue();
      this.statuses = this.courier.statuses.getValue();
      this.ordersInit = true;
      console.log('cp_initContent.orders', this.orders);
    } else {
      this.courier.state.subscribe((state) => {
        if (state == "orders_init"){
          self.orders = self.courier.orders.getValue();
          self.statuses = self.courier.statuses.getValue();
          self.ordersInit = true;
        }
      })
    }

    this.courier.orders.pipe(takeUntil(this.courier.$stop)).subscribe((orders) => {
      if (this.courier.o_status.getValue() == "init"){
        self.orders = self.courier.orders.getValue();
        self.statuses = self.courier.statuses.getValue();
        self.ordersInit = true;
        console.log('cp_initContent-courier-statuses',self.courier.statuses.getValue());
        console.log('cp_initContent-courier-o_status',self.courier.o_status.getValue());
      }
      console.log('cp_initContent.orders_subscribe', self.orders);
    })
  }

  public getPrice(order){
    if (order){
      var price: number = 0;
      console.log('length',order.goods.length );
        for( var i = 0; i < order.goods.length; i++){
          var good = order.goods[i];
          console.log('unit_price',good.Price);
          price += Number(good.Price) * Number(good.kol_vo) ;
        }      
      return price;
    }
  }

  public getStatus(order){
    console.log('get_status', order);
    console.log('get_status_statuses', this.statuses);

    if (this.ordersInit){
      for (var i = 0; i < this.statuses.length; i++ ){
        var status = this.statuses[i];
        if (status.id == order.del_status){
          return status.status;
        }
      }
    }
  }

  public selectOrder(id){
    this.router.navigate(['/order', id]);
  }

}
