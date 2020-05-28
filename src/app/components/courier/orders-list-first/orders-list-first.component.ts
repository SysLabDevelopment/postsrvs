import { Component, OnInit, ViewChild, EventEmitter, Input, Output, ViewChildren, QueryList, OnChanges } from '@angular/core';
import { moveItemInArray, CdkDragDrop, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { CourierService } from '../../../services/courier.service';
import { AuthService } from '../../../services/auth.service';
import { SysService } from '../../../services/sys.service';
import { SettingsService } from '../../../services/settings.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateService } from '../../../services/state.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-orders-list-first',
  templateUrl: './orders-list-first.component.html',
  styleUrls: ['./orders-list-first.component.scss'],
  providers: []
})

export class OrdersListFirstComponent implements OnInit, OnChanges {
  // @Input()
  public orders_c: Observable<any>;
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
  private orders;
  public slicer: number = this.howSlice();
  private ordersIds;
  public isSkeleton: boolean = true;
  public searchString: string = '';
  private ord: Observable<any[]>;
  constructor(
    public courier: CourierService,
    public auth: AuthService,
    private sys: SysService,
    private settings: SettingsService,
    public state: StateService
  ) {
    this.ord = this.state.orders.asObservable();
    this.prepareOrdersList();
  }

  ngOnChanges() {

  }
  ngOnInit() {


    this.orders_c.subscribe((data: Array<any>) => {
      this.orders = data;

    });
    console.log('sys:: исходный список заказов', this.orders)
  }

  ngAfterViewChecked() {
    let self = this;
    this.Drop_L.autoScrollDisabled = false;
    this.DragItems.changes.subscribe((r) => {
      self.DragItems.forEach(DragItem => {
        DragItem.dragStartDelay = {
          touch: 500,
          mouse: 100
        }

      })
    });

  }
  ngAfterViewInit() {

  }

  public selectOrder(id) {
    this.orderSelected_E.emit(id);
  }

  drop(event: CdkDragDrop<any[]>) {

    moveItemInArray(this.orders, event.previousIndex, event.currentIndex);
    this.ordersChange_E.emit(this.orders);
    console.log('sys:: массив заказов после перетаскивания: ', this.orders);
    // this.prepareOrdersList(this.orders);
  }

  public howSlice(): number {
    return (this.settings.rules.typeRoute == 'standart' ? 0 : 1)
  }

  public prepareOrdersList() {

    this.orders_c = this.ord.pipe(
      map(orders => orders && orders.filter(order => Number(order.status_id) == 1).filter(
        order => order.client_address.toLowerCase().includes(this.searchString.toLowerCase()) || order.client_fio.toLowerCase().includes(this.searchString.toLowerCase())
      ).slice(this.slicer))
    );
  }

  public onSearchChange(event) {
    this.prepareOrdersList()
  }

}

