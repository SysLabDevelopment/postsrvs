import { Component, OnInit } from '@angular/core';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { ModalController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { ReviewComponent } from '../../components/balance/review/review.component';
@Component({
  selector: 'app-version',
  templateUrl: './version.page.html',
  styleUrls: ['./version.page.css'],
})
export class VersionPage implements OnInit {
  public versionNumber: string;
  constructor(
    private firebase: FirebaseX,
    public modalController: ModalController
  ) {

    this.versionNumber = environment.CURRENT_VERSION;

  }

  ngOnInit() {
    this.firebase.setScreenName('version');
  }

  public async review() {
    const modal = await this.modalController.create({
      component: ReviewComponent,
      cssClass: 'done-order-modal',
      showBackdrop: true
    });
    await modal.present();

  }
}
