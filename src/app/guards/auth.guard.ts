
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { NavService } from '../services/nav.service';
import { StateService } from '../services/state.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private nav_s: NavService,
    private state: StateService,
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    let url = next.routeConfig.path;
    console.debug(`sys:: navigate to ${url}`);
    switch (url) {
      case 'courier':
        this.nav_s.tabNav.next(3);
        break;
      case 'map':
        this.nav_s.tabNav.next(2);

        break;
      case 'balance':
        this.nav_s.tabNav.next(1);
        break;
      case 'login':
        this.nav_s.tabNav.next(0);
        let authState = this.state.g_state.getValue();
        console.log('sys:: состояние аутентификации: ', authState);
        break;
      default:
        break;
    }
    return true;
  }

}