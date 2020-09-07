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
  public selectedReason: Reason;
  constructor(public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'commentText': this.commentText,
      'selectedReason': this.selectedReason
    });
  }

}
