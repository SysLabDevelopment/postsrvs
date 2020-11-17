import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IntroJsService } from '@esfaenza/ngx-introjs';
import { ModalController, NavController } from '@ionic/angular';
import { ClientReceiptComponent } from '../client-receipt/client-receipt.component';
@Component({
  selector: 'app-delivered',
  templateUrl: './delivered.component.html',
  styleUrls: ['./delivered.component.scss'],
})
export class DeliveredComponent implements AfterViewInit {
  public root = DeliveredComponent;
  public commentText: string;
  @Input() goods: any[];
  @Input() pay_type: string;
  @Input() pay_type_change_allowed: boolean;
  public cardNums: string;
  public selectedPayment = '1';
  public IntroItems = {
    Group: '1',
    1: 'Установите, требуется ли подпись клиента',
    2: 'Переход к редактированию подписи',
    3: 'Здесь можно поменять способ оплаты',
    4: `При безналичной оплате обязательно укажите три последние цифры карты,
     с которой производилась оплата`,
    5: 'Кнопка закрытия заказа тут. Нажмите ее, когда укажете все важные детали заказа'
  };
  @ViewChild('receipt') receiptComponent: ClientReceiptComponent;
  constructor(
    public modalController: ModalController,
    public router: Router,
    public nav: NavController,
    public introService: IntroJsService
  ) {

  }

  ngAfterViewInit(): void {
    this.cardNums = this.receiptComponent.cardNums;
  }
  dismiss(role = '') {
    const details = (role == 'cancel' ? undefined : {
      drawNeedle: this.receiptComponent.drawNeedle,
      selectedPayment: this.receiptComponent.selectedPayment,
      email_input: this.receiptComponent.email_input,
      phone_input: this.receiptComponent.phone_input,
      commentText: this.commentText,
      cardNums: this.receiptComponent.cardNums,
      waitingMinutes: this.receiptComponent.waitingMinutes
    });
    this.modalController.dismiss(details);
  }


}
