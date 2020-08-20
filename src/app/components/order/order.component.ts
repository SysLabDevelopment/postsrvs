import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderComponent implements OnInit {

  @Input() public content: string;
  constructor() {
    console.log('sys:: content: ', this.content);
  }

  ngOnInit() {
    document.querySelector('#content').innerHTML = this.content;
    let options = {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    };
    let slides = document.querySelector('ion-slides');
    slides.options = options;

  }

}
