import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SysService } from 'src/app/services/sys.service';
import { OrderService } from 'src/app/services/sys/order.service';
import { ClientReceiptComponent } from '../client-receipt/client-receipt.component';
import { GoodsTableComponent } from '../goods-table/goods-table.component';
import { IntroJsService } from '@esfaenza/ngx-introjs';

@Component({
  selector: 'app-part-delivered',
  templateUrl: './part-delivered.component.html',
  styleUrls: ['./part-delivered.component.scss'],
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
  public introItems = {
    Group: '5',
    1: 'Ручное изменение принятых товаров',
    2: 'Отсканируйте штрих-код товара на возврат',
    3: 'Отредактируйте прочие детали',
    4:'Закройте заказ'
  };

  constructor(
    public modalController: ModalController,
    private order: OrderService,
    private sys: SysService,
    public introService: IntroJsService
  ) { 
    this.introService.intro
    .setOption('prevLabel', 'Назад')
    .setOption('nextLabel', 'Далее')
    .setOption('skipLabel', 'Пропустить')
    .setOption('doneLabel', 'Завершить')
    .setOption('scrollToElement', true)
    .setOption('scrollTo', 'element');

  }

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
  public showHelp() {
    this.introService.start(null, '5');
  }
}
