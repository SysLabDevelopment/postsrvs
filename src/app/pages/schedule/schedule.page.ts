import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

    public workDates: Array<string> = [];

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
    //Добавление рабочей даты курьера
    public addWorkDate(workDate) {
    workDate = workDate.el.value.replace('T', ' ').substr('', 19);
    let onConfirm = ()=>{this.workDates.push(workDate)};
    let datePresent:(Date|string) = new Date (workDate);
    datePresent = formatDate(datePresent,'d.MM.yyyy H:mm','ru');
    this.presentAlertConfirm(datePresent, onConfirm);
  }

async presentAlertConfirm(date: string, confirmHandler:any) {
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
            confirmHandler();
          }
        }
      ]
    });
     await alert.present();
  }
}
