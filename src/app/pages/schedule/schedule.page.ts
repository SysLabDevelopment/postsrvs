import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SysService } from 'src/app/services/sys.service';
import {FirebaseX} from '@ionic-native/firebase-x/ngx';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  public workDates: Array<string> = [];
  public notWorkRules: { [key: string]: string } = {};
  public nonWorkDates: Array<any> = [];

  constructor(
    public alertController: AlertController,
    private sys: SysService,
    private firebase: FirebaseX
  ) { }

  ngOnInit() {
    this.sys.getNotWorkRules().subscribe((data: any) => {
      this.notWorkRules = data;
    });

    this.firebase.setScreenName('schedule');
  }
  //Добавление рабочей даты курьера
  public addWorkDate(workDate: any) {
    workDate = workDate.el.value.replace('T', ' ').substr('', 19);
    let onConfirm = () => { this.workDates.push(workDate) };
    let datePresent: (Date | string) = new Date(workDate);
    datePresent = formatDate(datePresent, 'd.MM.yyyy', 'ru');

    this.presentAlertConfirm(datePresent, onConfirm);
  }

  //Добавление даты НЕ выхода на работу
  public addNonWorkDate(date: any) {
    date = date.el.value.replace('T', ' ').substr('', 10);
    let datePresent: (Date | string) = new Date(date);
    datePresent = formatDate(datePresent, 'd.MM.yyyy', 'ru');
    this.presentAlertRadio(date);

  }


  async presentAlertConfirm(date: string, confirmHandler: any, index = '') {
    const alert = await this.alertController.create({
      cssClass: 'alert',
      header: `Сделать ${date} рабочим днем?`,
      message: `Подтвердив изменения,  ${date} станет рабочим днем`,
      buttons: [
        {
          text: 'Отмена',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Подтвердить',
          handler: () => {
            confirmHandler(index);
          }
        }
      ]
    });
    await alert.present();
  }

  public delWorkDate(index: string, date: string) {
    this.presentAlertConfirmDel(date, this.delDate, index)

  }
  public delNonWorkDate(index: number) {
    this.nonWorkDates.splice(index, 1);
  }

  async presentAlertRadio(date: any) {
    const alert = await this.alertController.create({
      cssClass: 'non-work-alert',
      header: `Укажите причину пропуска ${date}`,
      message: `Подтвердив изменения,  ${date} станет нерабочим днем`,
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: this.notWorkRules['1'],
          value: '1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: this.notWorkRules['2'],
          value: '2'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: this.notWorkRules['3'],
          value: '3'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: this.notWorkRules['4'],
          value: '4'
        }
      ],
      buttons: [
        {
          text: 'Отмена',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Подтвердить',
          handler: (data) => {

            console.log('sys:: radio', data);
            this.confirmNonWork(date, data);
          }
        }
      ]
    });

    await alert.present();
  }

  confirmNonWork(date: any, reason: unknown) {
    this.nonWorkDates.push({ date, reason })
  }

  delDate(index: number) {
    this.workDates.splice(index, 1);
  }
  async presentAlertConfirmDel(date: string, confirmHandler: any, index = '') {
    const alert = await this.alertController.create({
      cssClass: 'alertDel',
      header: `Удалить рабочий день ${date}?`,
      message: `Подтвердив удаление,  его нельзя отменить`,
      buttons: [
        {
          text: 'Отмена',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Подтвердить',
          handler: () => {
            this.delDate(Number(index));
          }
        }
      ]
    });
    await alert.present();
  }
  public goToWork() {
    this.sys.goToWork(this.workDates).subscribe((data: { success: boolean }) => {
      console.log('sys:: gotoWork resp', data);
      if (data.success) {
        this.sys.presentToast('Рабочие часы записаны', 'success');
      }

    });
  }
  public stopWork() {
    this.sys.stopWork(this.nonWorkDates).subscribe((data: { success: boolean }) => {
      console.log('sys:: stopWork resp', data);
      if (data.success) {
        this.sys.presentToast('Нерабочие дни записаны', 'success');
      }

    });
  }


}
