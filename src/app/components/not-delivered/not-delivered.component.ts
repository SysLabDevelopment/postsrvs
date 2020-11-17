import { Component, Input, OnInit } from '@angular/core';
import { IntroJsService } from '@esfaenza/ngx-introjs';
import { ModalController } from '@ionic/angular';
import { Reason } from 'src/app/interfaces/reason';

@Component({
  selector: 'app-not-delivered',
  templateUrl: './not-delivered.component.html',
  styleUrls: ['./not-delivered.component.scss']
})
export class NotDeliveredComponent implements OnInit {
  @Input() reasons: Reason[];
  public commentText: string = '';
  public selectedReason: number;
  public today = new Date();
  public tomorrow = new Date();
  // Дата переноса заказа
  public new_plan_date: string;
  public introItems = {
    Group: '4',
    1: 'Выберите причину, почему заказ не доставлен',
    2: 'Дополните комментарием, если необходимо',
    3: 'Закройте заказ как не доставленный'
  };

  constructor(
    public modalController: ModalController,
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

  ngOnInit() {
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
  }

  dismiss(role = '') {
    const details = (role === 'cancel' ? undefined : {
      commentText: this.commentText,
      selectedReason: this.selectedReason,
      new_plan_date: this.new_plan_date
    })
    this.modalController.dismiss(details);
  }

  public showHelp() {
    this.introService.start(null, '4');
  }
}
