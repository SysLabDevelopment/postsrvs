import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
declare var AppVersion:{version:string, build:number};

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
  ) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.app.versionCode = AppVersion.build;
    this.app.versionNumber = AppVersion.version;
  }

}
