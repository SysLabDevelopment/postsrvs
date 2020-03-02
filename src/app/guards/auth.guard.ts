
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { NavService } from '../services/nav.service';
import { StateService } from '../services/state.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private nav_s: NavService,
    private state: StateService,
    private router: Router,
    private auth: AuthService
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    let url = next.routeConfig.path;

    switch (url) {
      case 'courier':
        console.log('next tab  3');
        this.nav_s.tabNav.next(3);
        break;
      case 'map':
        console.log('next tab  2');
        this.nav_s.tabNav.next(2);
        break;
      case 'balance':
        console.log('next tab  2');
        this.nav_s.tabNav.next(1);
        break;
      case 'login':
        console.log('login_guard');
        if (this.state.g_state.getValue() == 'login') {
          return false;
        }

      default:
        this.nav_s.tabNav.next(0);
        break;
    }
    return true;
  }

}