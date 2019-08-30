import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  @Output()
  close_E = new EventEmitter();
  @Output()
  send_E = new EventEmitter<String>();

  r_text:String = null;
  constructor() { }

  ngOnInit() {}

  public close(){
    this.close_E.emit();
  }

  public send(){
    this.send_E.emit(this.r_text);
  }

}
