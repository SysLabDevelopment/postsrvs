import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

import { AuthService } from '../../services/auth.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public disLogin:boolean = true;

  constructor(private auth:AuthService,
              private router:Router,
              private alert:AlertController,
              private plt:Platform,
              private state$:StateService
              ) {
    var self = this;
    
    //проверяет авторизован ли пользователь на сервере

    this.plt.ready().then(() => {
      this.auth.checkAuth().subscribe((data:any) => {  
          console.log('check_auth_data', data);
            if (data.success == 'true'){
              self.router.navigate(['courier']);
              self.auth.initLogin();
            } else {
              self.disLogin = false;
            }
        });
    })
  }

  ngOnInit() {
    
  }


  public scanAuth(){
    var self = this;

    this.auth.scanData().then((data) => {
      console.log('data', data);
      
      var id = data.text.slice(0, -4);
      console.log('cid', id);
      localStorage.setItem('cId', id);
      var a_data = {  'action'  : 'auth',
                      'barcode' : data.text,
                      //'barcode' : '33dbcda2db5311e39760309e88d17f08,3431',
                      };
      
                      console.log('request_auth_data', a_data);

      self.auth.login(a_data).subscribe((data:any) => {
        console.log('authResponse', data);

        if (data.success == "true"){
          self.router.navigate(['courier']);
          self.auth.initLogin();
        } else {
          self.showError(1);
        }
      });
    });
  }

  public async showError(err){
    switch (err){
      case 1:
          const alert = await this.alert.create({
            header: 'Ошибка',
            message: 'Ошибка авторизации, повторите попытку позже.',
            buttons: ['OK']
          });
      
          await alert.present();
      break;
    }
  }
}
