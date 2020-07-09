import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  public tabNav = new BehaviorSubject(0);
  constructor() { }
}
