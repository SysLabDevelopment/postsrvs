import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import {FirebaseX} from '@ionic-native/firebase-x/ngx';

@Component({
  selector: 'app-version',
  templateUrl: './version.page.html',
  styleUrls: ['./version.page.css'],
})
export class VersionPage implements OnInit {
  public versionNumber: string;
  constructor(private firebase: FirebaseX) {

    this.versionNumber = environment.CURRENT_VERSION;

  }

  ngOnInit() {
    this.firebase.setScreenName('version');
  }

}
