import { Component, OnInit } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version/ngx';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.css'],
})
export class AboutPage implements OnInit {

  public app = {
    name: undefined,
    packageName: undefined,
    versionCode: undefined,
    versionNumber: undefined
  };

  constructor(
    private appVersion: AppVersion
  ) { }

  ngOnInit() {
    this.appVersion.getAppName().then(resp => this.app.name = resp);
    this.appVersion.getPackageName().then(resp => this.app.packageName = resp);
    this.appVersion.getVersionCode().then(resp => this.app.versionCode = resp);
    this.appVersion.getVersionNumber().then(resp => this.app.versionNumber = resp);
  }


}
