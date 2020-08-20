import { ScrollingModule } from "@angular/cdk/scrolling";
import { registerLocaleData } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import localeRu from "@angular/common/locales/ru";
import { LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouteReuseStrategy } from "@angular/router";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { CallNumber } from "@ionic-native/call-number/ngx";
import { Camera } from "@ionic-native/camera/ngx";
import { Device } from "@ionic-native/device/ngx";
import { Diagnostic } from "@ionic-native/diagnostic/ngx";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { GoogleMaps } from "@ionic-native/google-maps";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { Network } from '@ionic-native/network/ngx';
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Vibration } from "@ionic-native/vibration/ngx";
import { WebIntent } from "@ionic-native/web-intent/ngx";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { IonicStorageModule } from "@ionic/storage";
import { CacheModule } from "ionic-cache";
import { NgxMaskModule } from "ngx-mask";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CashoutFailOComponent } from "./components/balance/cashout-fail-o/cashout-fail-o.component";
import { CashoutWComponent } from "./components/balance/cashout-w/cashout-w.component";
import { HelpComponent } from './components/help/help.component';
import { NoteComponent } from './components/note/note.component';
import { IconsModule } from './icons/icons.module';
import { HttpErrorInterceptor } from "./interceptors/http.interceptor";
registerLocaleData(localeRu, "ru");
@NgModule({
  declarations: [AppComponent, CashoutFailOComponent, CashoutWComponent, HelpComponent, NoteComponent],
  entryComponents: [],
  imports: [
    FormsModule,
    IconsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    ScrollingModule,
    IonicStorageModule.forRoot(),
    CacheModule.forRoot({ keyPrefix: 'offlineData' })
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
    Network,
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
export class AppModule { }
