import { Component, OnInit, OnChanges, EventEmitter, Input, Output, ViewChildren, QueryList } from '@angular/core';
import { OTTabPipePipe } from '../../../pipes/o-t-tab-pipe.pipe';
import { moveItemInArray, CdkDragDrop, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { CourierService } from '../../../services/courier.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-orders-list-second',
  templateUrl: './orders-list-second.component.html',
  styleUrls: ['./orders-list-second.component.scss'],
  providers: [OTTabPipePipe]
})
export class OrdersListSecondComponent implements OnChanges, OnInit {
  @Input()
  public orders_c;
  @Input()
  public selectedTab;
  @Input()
  public confirm_cond;
  @Output()
  orderSelected_E = new EventEmitter<any>();

  constructor(
    public courier: CourierService,
    public auth: AuthService
  ) { }

  public selectOrder(id) {
    this.orderSelected_E.emit(id);
  }

  ngOnChanges() {
    console.log('sys::ngOnChanges исходный массив заказов в компоненте: ', this.orders_c);
    if (this.auth.routingModeAuto == true && this.orders_c) {
      this.orders_c = this.orders_c
        .filter(order => order.status_id == 1);
      this.orders_c.splice(1)
    }
    console.log('sys:: orders-list', this.orders_c);
  }

  ngOnInit() {
    console.log('sys:: исходный массив заказов в компоненте: ', this.orders_c);
    if (this.auth.routingModeAuto == true && this.orders_c) {
      this.orders_c = this.orders_c
        .filter(order => order.status_id == '1');
      this.orders_c.splice(1)
    }
    console.log('sys:: orders-list', this.orders_c);
  }

}
