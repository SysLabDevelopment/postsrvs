import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-version',
  templateUrl: './version.page.html',
  styleUrls: ['./version.page.css'],
})
export class VersionPage implements OnInit {
  public versionNumber: string;
  constructor() {

    this.versionNumber = environment.CURRENT_VERSION;

  }

  ngOnInit() {
  }

}
