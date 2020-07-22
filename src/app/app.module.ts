import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { Device } from "@ionic-native/device/ngx";
import { WebIntent } from "@ionic-native/web-intent/ngx";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { CallNumber } from "@ionic-native/call-number/ngx";
import { NgxMaskModule } from "ngx-mask";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { Diagnostic } from "@ionic-native/diagnostic/ngx";
import { Camera } from "@ionic-native/camera/ngx";
import { Vibration } from "@ionic-native/vibration/ngx";
import { CashoutFailOComponent } from "./components/balance/cashout-fail-o/cashout-fail-o.component";
import { CashoutWComponent } from "./components/balance/cashout-w/cashout-w.component";
import { HttpErrorInterceptor } from "./interceptors/http.interceptor";
import { registerLocaleData } from "@angular/common";
import localeRu from "@angular/common/locales/ru";
import { GoogleMaps } from "@ionic-native/google-maps";
import { AppUpdate } from "@ionic-native/app-update/ngx";
registerLocaleData(localeRu, "ru");
import { IonicStorageModule } from "@ionic/storage";
import { CacheModule } from "ionic-cache";
import { Network } from '@ionic-native/network/ngx';
import { FirebaseVision } from '@ionic-native/firebase-vision/ngx';
import {IconsModule} from './icons/icons.module';
// import {AppVersion} from 'cordova-plugin-appversion'

@NgModule({
  declarations: [AppComponent, CashoutFailOComponent, CashoutWComponent],
  entryComponents: [],
  imports: [
    IconsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    ScrollingModule,
    IonicStorageModule.forRoot(),
    CacheModule.forRoot({keyPrefix:'offlineData'})
  ],
  providers: [
    StatusBar,
    BarcodeScanner,
    SplashScreen,
    Geolocation,
    Device,
    WebIntent,
    Vibration,
    InAppBrowser,
    AndroidPermissions,
    Diagnostic,
    Camera,
    CallNumber,
    GoogleMaps,
    AppUpdate,
    Network,
    FirebaseVision,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    { provide: LOCALE_ID, useFactory: () => "ru" },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
