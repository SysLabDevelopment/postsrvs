import { ErrorHandler, Injectable } from '@angular/core';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";

@Injectable({
    providedIn: 'root'
})
export class ErrorIntercept implements ErrorHandler {

    constructor(private firebase: FirebaseX) { }

    handleError(error: any): void {
        this.firebase.logEvent('app_exception', { fatal: error.message })
    }

}