import { Injectable } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Device } from '@ionic-native/device/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user:boolean = false;
  public auth_state:BehaviorSubject<any> = new BehaviorSubject('not_login');

  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private bScan:BarcodeScanner,
              private http:HttpClient,
              private device: Device,
              private plt:Platform) { 

  this.barcodeScannerOptions = {
    showTorchButton: true,
    showFlipCameraButton: true
  };  
  console.log('Device UUID is: ' + this.device.uuid);  
}
  public checkAuth(){
    var url = 'orders';
    var data = {
      'action' : 'checkAuth',
    }

    return this.sendPost(url, data);
  }

  public sendPost(url, data){
      var host = "https://postsrvs.ru/mobile/";
      url = host+url;
      data['uuid'] = this.getUuid();
  
      console.log('sendpostData', data)
      
      data = JSON.stringify(data);
      const httpOptions = {
        headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': '*'
        })
      };
  
      return this.http.post(url, data);
  }
  public getUuid(){
    return this.device.uuid;
  }

  public setUser(id){
    localStorage.setItem('user', id);
    this.user = true;
  }

  public getUserId() {
    return localStorage.getItem('user');
  }

  public scanData(){
    return this.bScan.scan();
  }

  public login(code){
    return this.sendPost('auth', code);
  }
  


  auth_by_scan(){

 }

}
