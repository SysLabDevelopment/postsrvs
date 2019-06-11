import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CourierService } from '../../services/courier.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  public orderId: string = null;
  public status: string = null;
  public goods:any = null;
  public address:any = null;
  public order:any = null;
  public name:string = null;
  public timeFrom:string = null;
  public timeTo:string = null;
  public phone:string = null;
  public pageInit:boolean = false;
  public statuses:any = null;


  constructor(private router:Router,
              private route:ActivatedRoute,
              private courier:CourierService,
              private menu:MenuController) {

              this.orderId = this.route.snapshot.paramMap.get('id');
              console.log('id', this.route.snapshot.paramMap.get('id'));
              this.getOrderInfo();
   }

  ngOnInit() {
  }

  public getOrderInfo(){
    var self = this;
    this.courier.getOrderInfo(this.orderId).subscribe((data:any) => {
      console.log('orderOnfoDATA', data);
      if (data.success = "true"){
        self.order = data.order;
        self.goods = data.order.goods;
        self.address = data.order.client_address
        self.name = data.order.client_name
        self.timeFrom = data.order.del_time_from;
        self.timeTo = data.order.del_time_to;
        self.phone = data.order.client_phone;
        self.getStatuses();
        self.pageInit = true;
      }
    })
  }

  public openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  public navBack(){
    this.router.navigate(['/courier']);
  }

  public getStatuses(){
    var self = this;
    this.courier.getStatuses().subscribe((data:any) => {
      console.log('statuses_data', data);

      if (data.success == 'true'){
        self.statuses = data.statuses;
        self.status = self.getStatus();
      }
    });
  }

  public getStatus():string{
    console.log('this.statses', this.statuses);
    console.log('this.order', this.order);
    for (var i = 0; i < this.statuses.length; i++ ){
      var status = this.statuses[i];
      if (status.status_id == this.order.del_status){
        console.log('this.status',status.status );
        return status.status;
      }

    }
  }

}
