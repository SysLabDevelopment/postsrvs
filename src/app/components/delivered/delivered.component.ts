import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { DrawPage } from '../../pages/draw/draw.page';
@Component({
  selector: 'app-delivered',
  templateUrl: './delivered.component.html',
  styleUrls: ['./delivered.component.scss'],
})
export class DeliveredComponent implements OnInit {
  public root = DeliveredComponent;
  public commentText: string;
  @Input() goods: any[];
  public drawNeedle: boolean = true;
  public selectedPayment: string = '1';
  public email_input: string = ''
  public phone_input: string = '';
  public drawPage = DrawPage;
  constructor(
    public modalController: ModalController,
    public router: Router,
    public nav: NavController,

  ) { }

  ngOnInit() { }
  dismiss(role = '') {
    const details = (role == 'cancel' ? undefined : {
      'drawNeedle': this.drawNeedle,
      'selectedPayment': this.selectedPayment,
      'email_input': this.email_input,
      'phone_input': this.phone_input,
      'commentText': this.commentText,
    })
    this.modalController.dismiss(details);
  }

  public selectPayment(id: string) {
    this.selectedPayment = id;
  }

  public async draw() {
    const modal = await this.modalController.create({
      component: DrawPage,
      showBackdrop: false
    });
    modal.present();
  }
}
