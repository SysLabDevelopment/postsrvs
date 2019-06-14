import { Injectable } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user:boolean = false;

  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private bScan:BarcodeScanner,
              private http:HttpClient) { 

  this.barcodeScannerOptions = {
    showTorchButton: true,
    showFlipCameraButton: true
  };       
  this.setUser('3431');
}

  public sendPost(url, data){
    var host = "https://postsrvs.ru/mobile/";
    url = host+url;
    data = JSON.stringify(data);
    const httpOptions = {
		  headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin': '*'
		  })
		};

    return this.http.post(url, data);
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
