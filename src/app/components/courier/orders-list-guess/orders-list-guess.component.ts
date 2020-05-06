import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SysService } from '../../../services/sys.service';

@Component({
  selector: 'app-orders-list-guess',
  templateUrl: './orders-list-guess.component.html',
  styleUrls: ['./orders-list-guess.component.css'],
})
export class OrdersListGuessComponent implements OnInit {
  private headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  };
  public orders: Array<any>;

  constructor(
    private http: HttpClient,
    public sys: SysService
  ) { }

  ngOnInit() {

  }

  public segmentChanged(event) {
    let shopId = event.detail.value;
    console.log(shopId);
    const url = this.sys.proxy + 'https://pdata.flexcore.ru/data/';
    let data = {
      'tok': '#def@wfF1',
      'shopId': shopId
    }
    this.http.post(url, data, { headers: this.headers }).subscribe((response: any) => {
      if (response.success) {
        console.log('sys:: guess resp ', response)
      }
    })
  }

}
