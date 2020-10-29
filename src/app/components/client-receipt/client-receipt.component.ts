import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-client-receipt',
    templateUrl: './client-receipt.component.html',
    styleUrls: ['./client-receipt.component.scss']
})
export class ClientReceiptComponent {
    @Input() IntroItems
    @Input() draw
    @Input() drawNeedle
    @Input() $event
    constructor() { }
}