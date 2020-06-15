import { __decorate, __metadata } from "tslib";
import { Component, ViewChild, Renderer2 } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
let DrawPage = class DrawPage {
    constructor(platform, router, renderer, location) {
        this.platform = platform;
        this.router = router;
        this.renderer = renderer;
        this.location = location;
        this.isClear = true;
        this.error_mes = false;
        this.currentColour = '#000000';
        this.brushSize = 10;
        this.save_process = false;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.canvasElement = this.canvas.nativeElement;
        __ngRendererSetElementAttributeHelper(this.renderer, this.canvasElement, 'width', this.platform.width() + '');
        __ngRendererSetElementAttributeHelper(this.renderer, this.canvasElement, 'height', this.platform.height() + '');
    }
    handleStart(ev) {
        this.lastX = ev.touches[0].pageX;
        this.lastY = ev.touches[0].pageY;
    }
    clearCanvas() {
        this.isClear = true;
        let ctx = this.canvasElement.getContext('2d');
        ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    }
    handleMove(ev) {
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
    saveImage() {
        if (this.isClear) {
            this.error_mes = true;
            return false;
        }
        console.log('save_image_call');
        var code = this.canvasElement.toDataURL();
        code = code.split(',')[1];
        localStorage.setItem('drawImg', code);
        this.back();
    }
    back() {
        this.location.back();
    }
};
__decorate([
    ViewChild('myCanvas', { static: true }),
    __metadata("design:type", Object)
], DrawPage.prototype, "canvas", void 0);
DrawPage = __decorate([
    Component({
        selector: 'app-draw',
        templateUrl: './draw.page.html',
        styleUrls: ['./draw.page.scss'],
    }),
    __metadata("design:paramtypes", [Platform, Router, Renderer2, Location])
], DrawPage);
export { DrawPage };
function __ngRendererSplitNamespaceHelper(name) {
    if (name[0] === ":") {
        const match = name.match(/^:([^:]+):(.+)$/);
        return [match[1], match[2]];
    }
    return ["", name];
}
function __ngRendererSetElementAttributeHelper(renderer, element, namespaceAndName, value) {
    const [namespace, name] = __ngRendererSplitNamespaceHelper(namespaceAndName);
    if (value != null) {
        renderer.setAttribute(element, name, value, namespace);
    }
    else {
        renderer.removeAttribute(element, name, namespace);
    }
}
//# sourceMappingURL=draw.page.js.map