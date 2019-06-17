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

  }

  ngOnInit() {
    this.initContent();
  }

  public initContent(){
    if (this.courier.o_status.getValue() == 'init'){
      this.orders = this.courier.orders.getValue();
      this.statuses = this.courier.statuses.getValue();
      this.ordersInit = true;
    }
    
    var self = this;
    this.courier.orders.pipe(takeUntil(this.courier.$stop)).subscribe((orders) => {
      self.orders = orders;
      self.ordersInit = true;
    })
  }

  public getPrice(order){
    if (order){
      var price: number = 0;
      console.log('length',order.goods.length );
        for( var i = 0; i < order.goods.length; i++){
          var good = order.goods[i];
          console.log('unit_price',good.unit_price);
          price += Number(good.unit_price) ;
        }      
      return price;
    }
  }

  public getStatus(order){
    console.log('get_status', order);
    console.log('get_status_statuses', this.statuses);

      for (var i = 0; i < this.statuses.length; i++ ){
        var status = this.statuses[i];
        if (status.id == order.del_status){
          return status.status;
        }
      }

  }

  public selectOrder(id){
    this.router.navigate(['/order', id]);
  }

}
