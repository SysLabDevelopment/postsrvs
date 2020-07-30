import { Order } from 'src/app/interfaces/order';
import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Route, Router } from "@angular/router";
import { NavService } from "./services/nav.service";
import { CourierService } from "./services/courier.service";
import { AuthService } from "./services/auth.service";
import { SettingsService } from "./services/settings.service";
import { environment } from "../environments/environment";
import { Environment } from "@ionic-native/google-maps";
import { CacheService } from "ionic-cache";
import { Network } from '@ionic-native/network/ngx';
import {OrderService } from './services/sys/order.service';

declare var AppVersion:{version:string};
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent {
  public nav: any = 2;
  public routingModeAuto: boolean;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nav_s: NavService,
    private router: Router,
    public courier: CourierService,
    public auth: AuthService,
    public settings: SettingsService,
    cache: CacheService,
    private network: Network,
    private order: OrderService
  ) {
    this.initializeApp();
    console.log(this.platform.platforms());
  
      
      
    cache.setDefaultTTL(60*60*24);
     cache.itemExists('syncRequests').then((exist)=>{
        if(!exist){
          cache.saveItem('syncRequests',[])
        }
        this.network.onConnect().subscribe(()=>{
      console.warn('network connected!');
      cache.getItem('syncRequests').then((syncRequests:Array<{order:Order,status:number}>)=>{
        syncRequests && syncRequests.forEach((syncRequest)=>{
          this.order.sendDelayedCall(syncRequest.order,syncRequest.status);
        });
        cache.clearGroup('delayedCalls');
      })
      
    });
    this.network.onDisconnect().subscribe(()=>{
      console.warn('sys:: disconnected');
    })
       })
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (this.settings.rules.typeRoute == "standart") {
        this.routingModeAuto = false;
      }
      Environment.setEnv({
        // api key for server
        API_KEY_FOR_BROWSER_RELEASE: "AIzaSyDSWxDW_twugay-5q2T3aEuER8Lph5d164",
        // api key for local development
        API_KEY_FOR_BROWSER_DEBUG: "AIzaSyDSWxDW_twugay-5q2T3aEuER8Lph5d164",
      });
    });
    const self = this;
    this.nav_s.tabNav.subscribe((data) => {
      self.nav = data;
    });
    
  }

  public navTo(index) {
    switch (index) {
      case 1:
        this.router.navigate(["balance"]);
        break;
      case 2:
        this.router.navigate(["map"]);
        break;
      case 3:
        this.router.navigate(["courier"]);
        break;
      case 0:
        this.router.navigate(["login"]);
        break;
    }
  }
}
