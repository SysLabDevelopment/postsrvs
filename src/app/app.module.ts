import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Device } from '@ionic-native/device/ngx';
import { WebIntent } from '@ionic-native/web-intent/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { QRCodeModule } from 'angularx-qrcode';
import { CallNumber } from '@ionic-native/call-number/ngx';
import {NgxMaskModule} from 'ngx-mask'


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,BrowserAnimationsModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule,NgxMaskModule.forRoot(), ScrollingModule],
  providers: [
    StatusBar,
    BarcodeScanner,
    SplashScreen,
    Geolocation,
    Device,
    WebIntent,
    QRCodeModule,
    InAppBrowser,
    CallNumber,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
