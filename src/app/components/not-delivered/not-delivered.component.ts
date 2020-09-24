import { Component, Input, OnInit } from '@angular/core';
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
  public new_plan_date: string; //Дата переноса заказа

  constructor(public modalController: ModalController
  ) { }

  ngOnInit() {
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
  }

  dismiss(role = '') {
    const details = (role == 'cancel' ? undefined : {
      'commentText': this.commentText,
      'selectedReason': this.selectedReason,
      'new_plan_date': this.new_plan_date
    })
    this.modalController.dismiss(details);
  }

}
