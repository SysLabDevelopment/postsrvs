import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../services/state.service';
import { AuthService } from '../../services/auth.service';
import { CourierService } from '../../services/courier.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public modes: any[] = [];
  public activeMode: String = 'auto';
  public pswdInp = '';
  public pswdError: boolean = false;
  public pswdView: boolean = true;
  private ps;
  private newMode = null;

  public scanModes: any = [];
  public scanMode: string = '';
  public newScanMode: string = '';
  public guessMode = this.auth.getGuessMode(); //Режим приема заказов по штрихкоду
  public defaultRouteBuilding = this.auth.getDefaultRouteBuilding(); //Режим построения маршрута по умолчанию
  constructor(private router: Router, private auth: AuthService, public state: StateService, private courier: CourierService) {
    this.initModes();
    this.getA().subscribe((ps) => {
      if (ps.success) {
        this.ps = ps.pswd;
      }
    });
  }

  ngOnInit() {
  }

  public initModes() {
    this.activeMode = this.auth.getMode();
    this.scanMode = this.auth.getScanMode();
    this.modes = [
      { val: 'Авто', value: 'auto', isChecked: this.activeMode == 'auto' ? true : false },
      { val: 'Авто(без приема заказов)', value: 'auto_wo', isChecked: this.activeMode == 'auto_wo' ? true : false },
      { val: 'Ручной режим(с приемом заказов)', value: 'manual', isChecked: this.activeMode == 'manual' ? true : false },
      { val: 'Ручной режим(без приема заказов)', value: 'manual_wo', isChecked: this.activeMode == 'manual_wo' ? true : false },
    ]
    this.scanModes = [
      { val: 'Камера', value: 'camera', isChecked: this.scanMode == 'camera' ? true : false },
      { val: 'Сканнер', value: 'scan', isChecked: this.scanMode == 'scan' ? true : false }
    ]
  }

  private getA() {
    let url = "orders"
    let data = { 'action': 'get_a' }
    return this.auth.sendPost(url, data);
  }

  public navToBalance() {
    this.router.navigate(['balance']);
  }

  public pswdChange() {
    if (this.pswdInp == this.ps) this.pswdView = false;
  }

  public modeChange($event) {
    console.log('mode_changed', $event);
    this.newMode = $event.detail.value;
  }

  public scanChange($event) {
    console.log('scanMode_changed', $event);
    this.newScanMode = $event.detail.value;
  }

  public saveSetings() {
    if (this.newMode == 'manual' || this.newMode == 'manual_wo') {
      this.courier.changeRouteMode('manual');
    } else {
      this.courier.changeRouteMode('auto');
    }
    this.auth.setScanMode(this.newScanMode);
    this.auth.setMode(this.newMode);
    this.auth.showError(10);
    this.auth.setGuessMode(this.guessMode);
    this.auth.setDefaultRouteBuilding(this.defaultRouteBuilding);
  }
}
