import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-goods-table',
    templateUrl: './goods-table.component.html',
    styleUrls: ['./goods-table.component.scss'],
})
export class GoodsTableComponent {
    @Input() goods: any[];
    @Input() isChangeble: boolean = false;
    @Output() minusEvent = new EventEmitter();
    @Output() plusEvent = new EventEmitter();

    public minus() {
        this.minusEvent.emit()
    }

    public plus() {
        this.plusEvent.emit()
    }
}
