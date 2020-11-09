import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SysService } from 'src/app/services/sys.service';
import { OrderService } from 'src/app/services/sys/order.service';
import { ClientReceiptComponent } from '../client-receipt/client-receipt.component';
import { GoodsTableComponent } from '../goods-table/goods-table.component';

@Component({
  selector: 'app-part-delivered',
  templateUrl: './part-delivered.component.html',
  styleUrls: ['./part-delivered.component.css'],
})
export class PartDeliveredComponent implements OnInit {
  public selectedPayment: any;
  private commentText: any;
  public cardNums: any;
  @Input() goods: any[];
  @Input() orderId: string;
  @Input() pay_type: string;
  @Input() pay_type_change_allowed: boolean;

  @ViewChild('goodsTable') goodsTable: GoodsTableComponent;
  @ViewChild('receipt') receiptComponent: ClientReceiptComponent;

  constructor(
    public modalController: ModalController,
    private order: OrderService,
    private sys: SysService
  ) { }

  ngOnInit() { }

  dismiss(role = '') {
    const details = (role == 'cancel' ? undefined : {
      drawNeedle: this.receiptComponent.drawNeedle,
      selectedPayment: this.receiptComponent.selectedPayment,
      email_input: this.receiptComponent.email_input,
      phone_input: this.receiptComponent.phone_input,
      commentText: this.commentText,
      cardNums: this.receiptComponent.cardNums,
      goods: this.goodsTable.goods,
      waitingMinutes: this.receiptComponent.waitingMinutes

    });
    this.modalController.dismiss(details);
  }

  public scanReturned() {
    this.order.scanReturned(this.orderId).then((goodCode) => {
      if (goodCode) {
        this.goodsTable.minusGood(+goodCode)
      } else {
        this.sys.presentToast('Товар не найден', 'danger')
      }
    });
  }
}
