import { Location } from '@angular/common';
import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
@Component({
  selector: 'app-draw',
  templateUrl: './draw.page.html',
  styleUrls: ['./draw.page.scss'],
})
export class DrawPage implements OnInit {
  ngOnInit() { }

  @ViewChild('myCanvas', { static: true }) canvas: any;

  canvasElement: any;
  lastX: number;
  lastY: number;
  isClear: boolean = true;
  error_mes: boolean = false;
  currentColour: string = '#000000';
  brushSize: number = 10;

  public save_process: boolean = false;
  constructor(
    private platform: Platform,
    public router: Router,
    public renderer: Renderer2,
    private location: Location,
    private modal: ModalController
  ) {

  }
  ngAfterViewInit() {

    this.canvasElement = this.canvas.nativeElement;

    __ngRendererSetElementAttributeHelper(this.renderer, this.canvasElement, 'width', this.platform.width() + '');
    __ngRendererSetElementAttributeHelper(this.renderer, this.canvasElement, 'height', this.platform.height() + '');

  }

  handleStart(ev: any) {

    this.lastX = ev.touches[0].pageX;
    this.lastY = ev.touches[0].pageY;
  }

  clearCanvas() {
    this.isClear = true;
    let ctx = this.canvasElement.getContext('2d');
    ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);

  }

  handleMove(ev: any) {
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

  public saveImage() {
    if (this.isClear) {
      this.error_mes = true;
      return false;
    }
    var code = this.canvasElement.toDataURL();
    code = code.split(',')[1];
    localStorage.setItem('drawImg', code);
    this.back();
  }

  public back() {
    this.modal.dismiss()
  }

}

type AnyDuringRendererMigration = any;

function __ngRendererSplitNamespaceHelper(name: AnyDuringRendererMigration) {
  if (name[0] === ":") {
    const match = name.match(/^:([^:]+):(.+)$/);
    return [match[1], match[2]];
  }
  return ["", name];
}

function __ngRendererSetElementAttributeHelper(renderer: AnyDuringRendererMigration, element: AnyDuringRendererMigration, namespaceAndName: AnyDuringRendererMigration, value?: AnyDuringRendererMigration) {
  const [namespace, name] = __ngRendererSplitNamespaceHelper(namespaceAndName);
  if (value != null) {
    renderer.setAttribute(element, name, value, namespace);
  }
  else {
    renderer.removeAttribute(element, name, namespace);
  }
}
