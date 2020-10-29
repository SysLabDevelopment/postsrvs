import { ErrorHandler, Injectable } from '@angular/core';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Platform } from '@ionic/angular';
@Injectable({
    providedIn: 'root'
})
export class ErrorIntercept implements ErrorHandler {

    constructor(private firebase: FirebaseX, private platform: Platform) { }

    handleError(error: any): void {
        if (!this.platform.is('mobileweb')) {
            this.firebase.logEvent('app_exception', { fatal: error.message })
        } else {
            console.error(error)
        }

    }

}