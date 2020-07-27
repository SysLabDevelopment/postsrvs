import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { SysService } from 'src/app/services/sys.service';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

    public workDates: Array<string> = [];
    public notWorkRules = {};
    public nonWorkDates: Array<any> = [];

  constructor(
    public alertController: AlertController,
    private sys: SysService
    ) { }

  ngOnInit() {
    this.sys.getNotWorkRules().subscribe((data) => {
      this.notWorkRules = data;
    })
  }
    //Добавление рабочей даты курьера
  public addWorkDate(workDate) {
    workDate = workDate.el.value.replace('T', ' ').substr('', 19);
    let onConfirm = ()=>{this.workDates.push(workDate)};
    let datePresent:(Date|string) = new Date (workDate);
    datePresent = formatDate(datePresent,'d.MM.yyyy','ru');
    
    this.presentAlertConfirm(datePresent, onConfirm);
  }

    //Добавление даты НЕ выхода на работу
    public addNonWorkDate(date){
      date = date.el.value.replace('T', ' ').substr('', 10);
      let datePresent:(Date|string) = new Date (date);
      datePresent = formatDate(datePresent,'d.MM.yyyy','ru');
      this.presentAlertRadio(date, this.confirmNonWork);

  }


async presentAlertConfirm(date: string, confirmHandler:any, index= '') {
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

  public delWorkDate(index,date){
    this.presentAlertConfirmDel(date, this.delDate, index)
    
  }
    public delNonWorkDate(index){
    this.nonWorkDates.splice(index,1);
  }

  async presentAlertRadio(date, confirmHandler:any) {
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
            this.confirmNonWork(date ,data);
          }
        }
      ]
    });

    await alert.present();
  }

  confirmNonWork(date,reason){
    this.nonWorkDates.push({date, reason})
  }

  delDate(index){
    this.workDates.splice(index,1);
  }
  async presentAlertConfirmDel(date: string, confirmHandler:any, index= '') {
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
            this.delDate(index);
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
