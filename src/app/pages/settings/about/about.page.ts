import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.css'],
})
export class AboutPage implements OnInit {
  public app: any;
  params: Params;

  constructor(
    private route: ActivatedRoute,
    private appVersion: AppVersion
  ) { }

  ngOnInit() {
    this.params = this.route.snapshot.params;
    this.app.name = this.appVersion.getAppName();
    this.app.packageName = this.appVersion.getPackageName();
    this.app.versionCode = this.appVersion.getVersionCode();
    this.app.versionNumber = this.appVersion.getVersionNumber();
  }

}
