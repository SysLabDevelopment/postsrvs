import { Component, OnInit, OnChanges, EventEmitter, Input, Output, ViewChildren, QueryList } from '@angular/core';
import { OTTabPipePipe } from '../../../pipes/o-t-tab-pipe.pipe';
import { moveItemInArray, CdkDragDrop, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { CourierService } from '../../../services/courier.service';
import { AuthService } from '../../../services/auth.service';
import { SettingsService } from '../../../services/settings.service';
import { StateService } from '../../../services/state.service';

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
    public auth: AuthService,
    private settings: SettingsService,
    private state: StateService
  ) { }

  public selectOrder(id) {
    this.orderSelected_E.emit(id);
  }

  ngOnChanges() {
    this.tabFilterOrders();
  }

  ngOnInit() {
    this.state.orders.asObservable().subscribe((orders) => {
      this.orders = orders;
    });
    this.orders;
    console.log('sys:: исходный массив заказов в компоненте: ', this.orders);
  }

  private tabFilterOrders(tab = this.selectedTab) {
    if (tab == 2) {
      this.orders_c = this.orders?.filter(
        order => order.status_id == 5 || order.status_id == 6
      )
    } else {
      this.orders_c = this.orders?.filter(
        order => order.status_id == this.tabs[tab]
      )
    }

    if (this.settings.rules.typeRoute !== 'standart' && tab == 1) {
      this.orders_c?.splice(1)
    }

  }

}
