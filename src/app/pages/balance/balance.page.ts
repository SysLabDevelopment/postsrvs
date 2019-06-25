import { Component, OnInit } from '@angular/core';
import { CourierService } from '../../services/courier.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {
  public info = null;
  public pageInit:boolean = false;

  constructor(private courier:CourierService, private auth:AuthService) {
    var self = this;
    this.auth.checkAuth().subscribe((data:any) => {
      if (data.success = 'true'){
        self.getInfo(data.sync_id);
      }
    })
   }

  ngOnInit() {
   
  }

  public getInfo(sync_id){
    var self = this;
    
    this.courier.getBalance(sync_id).subscribe((data) => {
      console.log('balance_data', data);
      self.info =data;
      self.pageInit = true;
    });
  }
}
