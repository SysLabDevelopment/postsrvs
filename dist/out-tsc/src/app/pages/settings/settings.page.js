import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../services/state.service';
import { AuthService } from '../../services/auth.service';
import { CourierService } from '../../services/courier.service';
import { SettingsService } from '../../services/settings.service';
let SettingsPage = class SettingsPage {
    constructor(router, auth, state, courier, settings) {
        this.router = router;
        this.auth = auth;
        this.state = state;
        this.courier = courier;
        this.settings = settings;
        this.modes = [];
        this.activeMode = (this.settings.val.mode ? this.settings.val.mode : 'hand');
        this.pswdInp = '';
        this.pswdError = false;
        this.pswdView = true;
        this.newMode = null;
        this.scanModes = [];
        this.scanMode = '';
        this.newScanMode = '';
        this.defaultRouteBuilding = false; //Режим построения маршрута по умолчанию
        this.auto = this.auth.getRoutingMode(); //Тип построения маршрута авто/магистраль
        this.cl = '';
        this.checkout = this.settings.checkout;
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
    initModes() {
        this.activeMode = this.auth.getMode();
        this.scanMode = this.auth.getScanMode();
        this.modes = [
            { val: 'Авто', value: 'auto', isChecked: this.activeMode == 'auto' ? true : false },
            { val: 'Авто(без приема заказов)', value: 'auto_wo', isChecked: this.activeMode == 'auto_wo' ? true : false },
            { val: 'Ручной режим(с приемом заказов)', value: 'fullHand', isChecked: this.activeMode == 'fullHand' ? true : false },
            { val: 'Ручной режим(без приема заказов)', value: 'hand', isChecked: this.activeMode == 'hand' ? true : false },
        ];
        this.scanModes = [
            { val: 'Камера', value: 'camera', isChecked: this.scanMode == 'camera' ? true : false },
            { val: 'Сканнер', value: 'scan', isChecked: this.scanMode == 'scan' ? true : false }
        ];
    }
    getA() {
        let url = "orders";
        let data = { 'action': 'get_a' };
        return this.auth.sendPost(url, data);
    }
    navToBalance() {
        this.router.navigate(['balance']);
    }
    pswdChange() {
        if (this.pswdInp == this.ps)
            this.pswdView = false;
    }
    modeChange($event) {
        console.log('mode_changed', $event);
        this.newMode = $event.detail.value;
    }
    scanChange($event) {
        console.log('scanMode_changed', $event);
        this.newScanMode = $event.detail.value;
    }
    saveSetings() {
        if (this.newMode == 'fullHand' || this.newMode == 'hand') {
            this.courier.changeRouteMode('fullHand');
        }
        else {
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
};
SettingsPage = __decorate([
    Component({
        selector: 'app-settings',
        templateUrl: './settings.page.html',
        styleUrls: ['./settings.page.scss'],
    }),
    __metadata("design:paramtypes", [Router,
        AuthService,
        StateService,
        CourierService,
        SettingsService])
], SettingsPage);
export { SettingsPage };
//# sourceMappingURL=settings.page.js.map