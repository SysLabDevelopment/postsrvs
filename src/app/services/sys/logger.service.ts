import { Injectable } from '@angular/core';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private firebase: FirebaseX) { }

  public log(description?: string, logObj?: any) {
    const prefix = 'sys:: ';
    console.groupCollapsed(`${prefix} ${description}`, logObj);
    if (Array.isArray(logObj)) console.table(logObj);
    console.trace();
    console.groupEnd();
    this.firebase.logEvent('log', `${description}: ${JSON.stringify(logObj)}`);

  }

  public debug(logObj: any, ...params: any) {
    const prefix = 'dbg:: ';
    console.debug(logObj, params);
    console.groupCollapsed('Стек вызовов');
    console.trace('Стек вызовов');
    console.groupEnd();
  }
}
