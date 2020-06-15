//Отдельный сервис для лучших реализаций функционала
//Если есть выбор велосипедов для решения задаи в этом приложении - выбирай велосипеды из этого комплекта
import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SysService } from '../services/sys.service';
let SettingsService = class SettingsService {
    constructor(http, sys) {
        this.http = http;
        this.sys = sys;
        this.val = localStorage;
        this.rules = {
            appMode: "",
            scanMode: "",
            autoStartRoute: "",
            typeRoute: "",
            storeCheckMode: "",
            gess: undefined,
            schedule: undefined,
            phoneMode: ''
        };
    }
    //Записывает настройку в локалстораж
    set(setting, value) {
        setting && localStorage.removeItem(setting);
        if (setting !== '') {
            localStorage.setItem(setting, value);
        }
    }
    get(setting) {
        let value = localStorage.getItem(setting);
        if (value == null) {
            value = '';
        }
        return value;
    }
    //Получение настроек с сервака
    //@cid - id курьера
    getSettings(cid) {
        let self = this;
        let data = {
            cid: cid
        };
        let mapSettings = {
            'appMode': 'activeMode',
            'scanMode': 'scanMode',
            'autoStartRoute': 'defaultRouteBuilding',
            'typeRoute': 'routingModeAuto',
            'storeCheckMode': 'checkout'
        };
        const url = this.sys.proxy + 'https://postsrvs.ru/mobile/getRules.php';
        this.http.post(url, data).subscribe((data) => {
            if (data.success == true) {
                this.rules = data.rules;
                if (data.rules.typeRoute == 'standart') {
                    this.routingModeAuto = false;
                }
            }
        });
    }
};
SettingsService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient,
        SysService])
], SettingsService);
export { SettingsService };
//# sourceMappingURL=settings.service.js.map