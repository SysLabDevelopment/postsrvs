import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../services/state.service';
import { AuthService } from '../../services/auth.service';
import { CourierService } from '../../services/courier.service';
import { SettingsService } from '../../services/settings.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public modes: any[] = [];
  public activeMode: String = (this.settings.val.mode ? this.settings.val.mode : 'hand');
  public pswdInp = '';
  public pswdError: boolean = false;
  public pswdView: boolean = true;
  private ps;
  private newMode = null;

  public scanModes: any = [];
  public scanMode: string = '';
  public newScanMode: string = '';
  public guessMode: boolean; //Режим приема заказов по штрихкоду
  public defaultRouteBuilding: boolean = false; //Режим построения маршрута по умолчанию
  public auto = this.auth.getRoutingMode();//Тип построения маршрута авто/магистраль
  public cl: string = '';
  public checkout: boolean = this.settings.checkout;

  constructor(
    private router: Router,
    private auth: AuthService,
    public state: StateService,
    private courier: CourierService,
    public settings: SettingsService
  ) {

    this.initModes();
    this.getA().subscribe((ps) => {
      if (ps.success) {
        this.ps = ps.pswd;
      }
    });
  }

  ngOnInit() {
    console.log('sys:: settings Boolean(this.auth.getDefaultRouteBuilding())', Boolean(this.auth.getDefaultRouteBuilding()));
    this.defaultRouteBuilding = Boolean(this.auth.getDefaultRouteBuilding());
    this.cl = this.settings.get('cl');
    this.guessMode = Boolean(this.auth.getGuessMode());

  }

  public initModes() {
    this.activeMode = this.auth.getMode();
    this.scanMode = this.auth.getScanMode();
    this.modes = [
      { val: 'Авто', value: 'auto', isChecked: this.activeMode == 'auto' ? true : false },
      { val: 'Авто(без приема заказов)', value: 'auto_wo', isChecked: this.activeMode == 'auto_wo' ? true : false },
      { val: 'Ручной режим(с приемом заказов)', value: 'fullHand', isChecked: this.activeMode == 'fullHand' ? true : false },
      { val: 'Ручной режим(без приема заказов)', value: 'hand', isChecked: this.activeMode == 'hand' ? true : false },
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
    if (this.newMode == 'fullHand' || this.newMode == 'hand') {
      this.courier.changeRouteMode('fullHand');
    } else {
      this.courier.changeRouteMode('auto');
    }
    this.auth.setScanMode(this.scanMode);
    this.auth.setMode(this.activeMode);
    this.auth.showError(10);
    this.auth.setGuessMode(this.guessMode);
    this.auth.setDefaultRouteBuilding(this.defaultRouteBuilding);
    this.auth.setRoutingMode(this.auto);
    this.state.state.next('init');
    this.settings.set('cl', this.cl);
    this.settings.set('checkout', this.checkout);
  }
}
