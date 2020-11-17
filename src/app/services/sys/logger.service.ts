import { Injectable } from '@angular/core';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private colors: { [key: string]: string } = {
    'map': '#ced408'
  }
  constructor(private firebase: FirebaseX) { }

  private colorOf(pageName: string) {
    return this.colors[pageName]
  }
  public log(description?: string, logObj?: any, color?: string) {
    const prefix = 'sys:: ';
    console.log(`%c${prefix} ${description}`, 'background: #ced408; color:black', logObj);
    console.groupCollapsed('Подробнее');
    if (Array.isArray(logObj)) console.table(logObj);
    console.count(description);
    console.trace();
    console.groupEnd();
    this.firebase.logEvent('log', `${description}: ${JSON.stringify(logObj)}`);
  }

  public debug(logObj: any, ...params: any) {
    const prefix = 'dbg:: ';
    console.debug(prefix, logObj, params);
    console.groupCollapsed('Стек вызовов');
    console.trace('Стек вызовов');
    console.groupEnd();
  }

  public profile(label: string, end?: boolean) {
    const prefix = 'profile:: ';
    end ? console.profileEnd(`${prefix} ${label}`) : console.profile(`${prefix} ${label}`)
  }
}
