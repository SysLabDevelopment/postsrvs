import { Component, OnInit } from '@angular/core';
declare var AppVersion: { version: string, build: number };

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.css'],
})
export class AboutPage implements OnInit {

  public app: {
    name: string,
    packageName: string,
    versionCode: string,
    versionNumber: string
  } =
    {
      name: undefined,
      packageName: undefined,
      versionCode: undefined,
      versionNumber: undefined
    };

  constructor(
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.app.versionCode = String(AppVersion.build);
    this.app.versionNumber = AppVersion.version;
  }


}
