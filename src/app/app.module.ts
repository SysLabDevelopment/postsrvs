import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { NgxMaskModule } from 'ngx-mask';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { CashoutFailOComponent } from './components/balance/cashout-fail-o/cashout-fail-o.component';
import { CashoutWComponent } from './components/balance/cashout-w/cashout-w.component';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { HttpErrorInterceptor } from './interceptors/http.interceptor';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, CashoutFailOComponent, CashoutWComponent],
  entryComponents: [],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule, NgxMaskModule.forRoot(), ScrollingModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [
    StatusBar,
    BarcodeScanner,
    SplashScreen,
    Geolocation,
    Device,
    WebIntent,
    QRCodeModule,
    Vibration,
    InAppBrowser,
    AndroidPermissions,
    Diagnostic,
    Camera,
    CallNumber,
    AppVersion,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
