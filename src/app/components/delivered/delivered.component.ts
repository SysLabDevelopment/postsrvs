import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
// @ts-ignore
import * as introJs from 'intro.js/intro.js';
import { DrawPage } from '../../pages/draw/draw.page';
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
  public selectedPayment: string = '1';
  public email_input: string = ''
  public phone_input: string = '';
  public drawPage = DrawPage;
  public cardNums: number;

  constructor(
    public modalController: ModalController,
    public router: Router,
    public nav: NavController,

  ) { }

  ngOnInit() { }

  ngAfterViewInit() { }
  ionViewDidEnter() {
    introJs().start();
  }
  dismiss(role = '') {
    const details = (role == 'cancel' ? undefined : {
      'drawNeedle': this.drawNeedle,
      'selectedPayment': this.selectedPayment,
      'email_input': this.email_input,
      'phone_input': this.phone_input,
      'commentText': this.commentText,
      'cardNums': this.cardNums
    })
    this.modalController.dismiss(details);
  }

  public selectPayment(id: string) {
    this.selectedPayment = id;
  }

  public async draw() {
    const DIV = document.createElement("div");
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
