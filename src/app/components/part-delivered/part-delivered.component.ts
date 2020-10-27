import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-part-delivered',
  templateUrl: './part-delivered.component.html',
  styleUrls: ['./part-delivered.component.css'],
})
export class PartDeliveredComponent implements OnInit {
  private drawNeedle: any;
  private selectedPayment: any;
  private email_input: any;
  private phone_input: any;
  private commentText: any;
  private cardNums: any;
  @Input() goods:any[];
  constructor(public modalController: ModalController,
  ) { }

  ngOnInit() {}

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
}
