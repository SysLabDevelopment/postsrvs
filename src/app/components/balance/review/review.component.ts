import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  @Output()
  close_E = new EventEmitter();
  @Output()
  send_E = new EventEmitter<String>();

  r_text: String = null;
  constructor(
    private auth: AuthService,
    public modalController: ModalController

  ) { }

  ngOnInit() { }

  public close() {
    this.modalController.dismiss()
  }

  public sendReview() {
    const url = 'orders',
      data = {
        action: 'writeReview',
        text: this.r_text
      },
      self = this;
    this.auth.sendPost(url, data).subscribe((resp: any) => {
      if (resp.success === 'true') {
        self.auth.showError(7);
      } else {
        self.auth.showError(8);
      }
      this.modalController.dismiss()
    });
  }


}
