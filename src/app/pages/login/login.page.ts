import { Component, OnInit } from '@angular/core';
import { AuthService }       from '../../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth:AuthService,
              private router:Router,
              private alert:AlertController) {
   }

  ngOnInit() {
  }

  public scanAuth(){
    var self = this;

    this.auth.scanData().then((data) => {
      console.log('data', data);

      var auth_id = data.text.slice(-4);
      // auth_id = "0031";
      // console.log('auth_id', auth_id);
      // if (auth_id.length != 0){
      //   var i = 1;
      //   while (i < auth_id.length){
      //     if (auth_id.substr(0,i) == '0' ){
      //       auth_id = auth_id.substr(i);
      //     } else {
      //       break;
      //     }
      //     i++;
      //   }
      // }
      console.log('auth_after_while', auth_id);

      var a_data = {  'action'  : 'auth',
                      'barcode' : auth_id};

      self.auth.login(a_data).subscribe((data:any) => {
        console.log('authResponse', data);
        var resp = JSON.parse(data);
        console.log('authResponseObj', data);
        if (resp.success == "true"){
          self.auth.setUser(resp.sync_id);
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
