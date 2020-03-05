import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    private http: HttpClient
  ) { }

  ngOnInit() {

  }

  public segmentChanged(event) {
    let shopId = event.detail.value;
    console.log(shopId);
    const url = 'https://pdata.flexcore.ru/data/';
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
