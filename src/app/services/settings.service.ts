//Отдельный сервис для лучших реализаций функционала
//Если есть выбор велосипедов для решения задаи в этом приложении - выбирай велосипеды из этого комплекта

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public val = localStorage;
  public activeMode: string;
  public scanMode: string;
  public defaultRouteBuilding: boolean;
  public routingModeAuto: boolean;
  public rules: {
    appMode: string,
    scanMode: string
    autoStartRoute: string
    typeRoute: string
    storeCheckMode: any
  } = {
      appMode: "",
      scanMode: "",
      autoStartRoute: "",
      typeRoute: "",
      storeCheckMode: ""
    };
  public checkout: boolean;

  constructor(
    private http: HttpClient
  ) {

  }

  //Записывает настройку в локалстораж
  public set(setting: string, value: any) {

    setting && localStorage.removeItem(setting);
    if (setting !== '') {
      localStorage.setItem(setting, value);
    }
  }

  public get(setting: string) {
    let value: string = localStorage.getItem(setting);
    if (value == null) {
      value = '';
    }
    return value
  }

  //Получение настроек с сервака
  //@cid - id курьера
  public getSettings(cid) {
    let self = this;
    let data = {
      cid: cid
    }
    let mapSettings: object = {
      'appMode': 'activeMode',
      'scanMode': 'scanMode',
      'autoStartRoute': 'defaultRouteBuilding',
      'typeRoute': 'routingModeAuto',
      'storeCheckMode': 'checkout'
    };
    this.http.post('https://postsrvs.ru/mobile/getRules.php', data).subscribe((data: { success: boolean, rules: any }) => {
      if (data.success == true) {
        this.rules = data.rules;
        if (data.rules.typeRoute == 'standart') {
          this.routingModeAuto = false;
        }
      }
    })
  }
}
