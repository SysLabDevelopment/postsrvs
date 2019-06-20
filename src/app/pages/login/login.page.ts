import { Component, OnInit } from '@angular/core';
import { AuthService }       from '../../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth:AuthService,
              private router:Router,
              private alert:AlertController,
              private plt:Platform,
              ) {
        var self = this;
        this.plt.ready().then(() => {
          self.auth.checkAuth().subscribe((data:any) => {
            if (data.success = 'true'){
              self.auth.auth_state.next('login_true');
              self.router.navigate(['balance']);
            }
          })
        });
   }

  ngOnInit() {
  }


  public scanAuth(){
    var self = this;

    this.auth.scanData().then((data) => {
      console.log('data', data);

      var a_data = {  'action'  : 'auth',
                      'barcode' : data.text,
                      };
      
                      console.log('request_auth_data', a_data);

      self.auth.login(a_data).subscribe((data:any) => {
        console.log('authResponse', data);
       
        console.log('authResponseObj', data);
        if (data.success == "true"){
          self.router.navigate(['balance']);
        } else {
          this.showError(1);
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

  public tryAuth(){
    var code = {'login' : '123'};
    this.auth.login(code).subscribe((data) => {
      console.log('loginData', data);
    });
  }



}
