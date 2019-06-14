import { Component, OnInit } from '@angular/core';
import { CourierService } from '../../services/courier.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {
  public info = null;
  public pageInit:boolean = false;

  constructor(private courier:CourierService) {
    this.getInfo();
   }

  ngOnInit() {
  }

  public getInfo(){
    var self = this;
    
    this.courier.getBalance().subscribe((data) => {
      console.log('balance_data', data);
      self.info =data;
      self.pageInit = true;
    });
  }
}
