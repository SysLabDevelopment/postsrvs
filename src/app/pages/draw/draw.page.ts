import { Component, OnInit, ViewChild, Renderer } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Location } from '@angular/common';
@Component({
  selector: 'app-draw',
  templateUrl: './draw.page.html',
  styleUrls: ['./draw.page.scss'],
})
export class DrawPage implements OnInit {
  ngOnInit(){}

  @ViewChild('myCanvas',{static: true}) canvas: any;

  canvasElement: any;
  lastX: number;
  lastY: number;
  isClear:boolean = true;
  error_mes:boolean = false;
  currentColour: string = '#000000';
  brushSize: number = 10;

  public save_process:boolean = false;
  constructor(private platform:Platform,public router:Router, public renderer: Renderer, private orientation:ScreenOrientation, private location : Location){

  }
  ngAfterViewInit(){

    this.canvasElement = this.canvas.nativeElement;

    this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
    this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');

}

handleStart(ev){

    this.lastX = ev.touches[0].pageX;
    this.lastY = ev.touches[0].pageY;
}

clearCanvas(){
  this.isClear = true;
  let ctx = this.canvasElement.getContext('2d');
  ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);

}

handleMove(ev){
    this.isClear = false;
    this.error_mes = false;
    let ctx = this.canvasElement.getContext('2d');
    let currentX = ev.touches[0].pageX;
    let currentY = ev.touches[0].pageY;

    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.moveTo(this.lastX, this.lastY);
    ctx.lineTo(currentX, currentY);
    ctx.closePath();
    ctx.strokeStyle = this.currentColour;
    ctx.lineWidth = this.brushSize;
    ctx.stroke();       

    this.lastX = currentX;
    this.lastY = currentY;

}

public saveImage(){
  if (this.isClear){
    this.error_mes = true;
    return false;
  }
  console.log('save_image_call');
  var code = this.canvasElement.toDataURL();
  code = code.split(',')[1];
  localStorage.setItem('drawImg', code);
  this.back();
}

public back(){
  this.location.back();
}

}
