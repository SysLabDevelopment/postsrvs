import { ErrorHandler, Injectable } from '@angular/core';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";

@Injectable({
    providedIn: 'root'
})
export class ErrorIntercept implements ErrorHandler {

    constructor(private firebase: FirebaseX) { }

    handleError(error: Error) {
        this.firebase.logEvent('app_exception', { fatal: JSON.stringify(error) })
    }

}