import { Component, OnInit, ViewChild, EventEmitter, Input, Output, ViewChildren, QueryList } from '@angular/core';
import { OTTabPipePipe } from '../../../pipes/o-t-tab-pipe.pipe';
import { moveItemInArray, CdkDragDrop, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { CourierService } from '../../../services/courier.service';
@Component({
  selector: 'app-orders-list-first',
  templateUrl: './orders-list-first.component.html',
  styleUrls: ['./orders-list-first.component.scss'],
  providers: [OTTabPipePipe]
})
export class OrdersListFirstComponent implements OnInit {
  // @Input()
  public orders_c;
  @Input()
  public confirm_cond;
  @Input()
  public selectedTab;
  @Output()
  ordersChange_E = new EventEmitter<any>();
  @Output()
  orderSelected_E = new EventEmitter<any>();
  @ViewChildren(CdkDrag)
  DragItems: QueryList<CdkDrag>;
  @ViewChild(CdkDropList, { static: false })
  Drop_L: CdkDropList;


  constructor(public courier: CourierService) { }

  ngOnInit() {
    this.orders_c = this.courier.ordersInfo;
  }

  ngAfterViewChecked() {
    var self = this;


    this.Drop_L.autoScrollDisabled = false;
    this.DragItems.changes.subscribe((r) => {
      self.DragItems.forEach(DragItem => {
        DragItem.dragStartDelay = 500;

      })
    });

  }
  ngAfterViewInit() {

  }

  public selectOrder(id) {
    this.orderSelected_E.emit(id);
  }

  drop(event: CdkDragDrop<any[]>) {

    moveItemInArray(this.orders_c, event.previousIndex, event.currentIndex);
    this.ordersChange_E.emit(this.orders_c);
  }
}
