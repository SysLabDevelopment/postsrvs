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
  public orders;
  @Input()
  public selectedTab;
  @Input()
  public confirm_cond;
  @Output()
  orderSelected_E = new EventEmitter<any>();


  public orders_c: Array<any>;

  private tabs: object = {
    1: 1,
    2: 5 || 6,
    3: 4
  };

  constructor(
    public courier: CourierService,
    public auth: AuthService
  ) { }

  public selectOrder(id) {
    this.orderSelected_E.emit(id);
  }

  ngOnChanges() {
    this.tabFilterOrders();
  }

  ngOnInit() {
    this.orders;
    console.log('sys:: исходный массив заказов в компоненте: ', this.orders);
  }

  private tabFilterOrders(tab = this.selectedTab) {
    this.orders_c = this.orders?.filter(
      order => order.status_id == this.tabs[tab]
    );
    if (this.auth.routingModeAuto == true && tab == 1) {
      this.orders_c?.splice(1)
    }

  }

}
