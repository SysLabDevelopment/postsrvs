import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { DrawPage } from '../../pages/draw/draw.page';
import { IntroJsService } from '@esfaenza/ngx-introjs';
@Component({
  selector: 'app-delivered',
  templateUrl: './delivered.component.html',
  styleUrls: ['./delivered.component.scss'],
})
export class DeliveredComponent implements OnInit, AfterViewInit {
  public root = DeliveredComponent;
  public commentText: string;
  @Input() goods: any[];
  @Input() pay_type: string;
  @Input() pay_type_change_allowed: boolean;
  public drawNeedle = true;
  public selectedPayment = '1';
  public email_input = '';
  public phone_input = '';
  public drawPage = DrawPage;
  public cardNums: number;
  public IntroItems = {
    Group: '1',
    '1': 'Установите, требуется ли подпись клиента',
    '2': 'Переход к редактированию подписи',
    '3': 'Здесь можно поменять способ оплаты',
    '4': 'При безналичной оплате обязательно укажите три последние цифры карты, с которой производилась оплата',
    '5': 'Кнопка закрытия заказа тут. Нажмите ее, когда укажете все важные детали заказа'
  };

  constructor(
    public modalController: ModalController,
    public router: Router,
    public nav: NavController,
    public introService: IntroJsService

  ) { }

  ngOnInit() { }

  ngAfterViewInit() { }
  ionViewDidEnter() {
    this.introService.start(null, '1');
  }
  dismiss(role = '') {
    const details = (role == 'cancel' ? undefined : {
      drawNeedle: this.drawNeedle,
      selectedPayment: this.selectedPayment,
      email_input: this.email_input,
      phone_input: this.phone_input,
      commentText: this.commentText,
      cardNums: this.cardNums
    });
    this.modalController.dismiss(details);
  }

  public selectPayment(id: string) {
    this.selectedPayment = id;
  }

  public async draw() {
    const DIV = document.createElement('div');
    const modal = await this.modalController.create({
      component: DrawPage,
      showBackdrop: false,
      mode: 'md',
      animated: false,
      presentingElement: DIV
    });
    modal.present();
  }

  public isDisabled(payType: string): boolean {
    return this.pay_type_change_allowed ? false : (payType !== this.pay_type);
  }
}
