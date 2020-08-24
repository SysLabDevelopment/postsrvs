import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appLongPress]',
  outputs: ['longPress']
})

export class LongPressDirective {

  @Output()
  longPress = new EventEmitter();

  private _timeout: any;

  @HostListener('mousedown', ['$event']) onMouseDown($event) {
    console.log('touchstarted!', $event);
    this._timeout = setTimeout(() => {
      this.longPress.emit($event);
    }, 400);
  }

  @HostListener('touchend') onMouseLeave() {
    clearTimeout(this._timeout);
  }

  @HostListener('mouseleave') onMouseUp() {
    clearTimeout(this._timeout);
  }
}