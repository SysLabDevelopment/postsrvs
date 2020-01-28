import { Component, OnInit, ViewChild, EventEmitter, Input, Output, ViewChildren, QueryList } from '@angular/core';
import { OTTabPipePipe } from '../../../pipes/o-t-tab-pipe.pipe';
import { moveItemInArray, CdkDragDrop, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { CourierService } from '../../../services/courier.service';

@Component({
  selector: 'app-orders-list-second',
  templateUrl: './orders-list-second.component.html',
  styleUrls: ['./orders-list-second.component.scss'],
  providers: [OTTabPipePipe]
})
export class OrdersListSecondComponent implements OnInit {
  @Input()
  public orders_c;
  @Input()
  public selectedTab;
  @Input()
  public confirm_cond;
  @Output()
  orderSelected_E = new EventEmitter<any>();

  constructor(public courier: CourierService) { }
  public selectOrder(id) {
    this.orderSelected_E.emit(id);
  }
  ngOnInit() {
    this.orders_c = this.courier.ordersInfo;
  }

}
