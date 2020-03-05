//Отдельный сервис для лучших реализаций функционала
//Если есть выбор велосипедов для решения задаи в этом приложении - выбирай велосипеды из этого комплекта

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  //Записывает настройку в локалстораж
  public set(setting: string, value: any) {
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
}
