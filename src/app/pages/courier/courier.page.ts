import { Component, OnInit, Injectable } from '@angular/core';
import { CourierService } from '../../services/courier.service';
import { Router } from '@angular/router';


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
    this.getOrders();
    this.getStatuses();
  }

  ngOnInit() {
  }

  public getPrice(order){
    var price: number = 0;
    console.log('length',order.goods.length );
      for( var i = 0; i < order.goods.length; i++){
        var good = order.goods[i];
        console.log('unit_price',good.unit_price);
        price += Number(good.unit_price) ;
      }      
    return price;
  }

  public getOrders(){
    var self = this;
    this.courier.getOrders().subscribe((data) => {
      console.log('orders_data', data);

      self.orders = data;
      self.ordersInit = true;
    });
  }

  public getStatuses(){
    var self = this;
    this.courier.getStatuses().subscribe((data:any) => {
      console.log('statuses_data', data);

      if (data.success == 'true'){
        self.statuses = data.statuses;
      }
    });
  }

  public getStatus(order){
    for (var i = 0; i < this.statuses.length; i++ ){
      var status = this.statuses[i];
      if (status.status_id == order.del_status){
        return status.status;
      }
    }
  }

  public selectOrder(id){
    this.router.navigate(['/order', id]);
  }

}
