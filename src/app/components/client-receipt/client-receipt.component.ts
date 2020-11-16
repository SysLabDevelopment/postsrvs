import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DrawPage } from 'src/app/pages/draw/draw.page';

@Component({
    selector: 'app-client-receipt',
    templateUrl: './client-receipt.component.html',
    styleUrls: ['./client-receipt.component.scss']
})
export class ClientReceiptComponent {
    public drawNeedle = true;
    public selectedPayment = '1';
    public cardNums: string;
    public email_input = '';
    public phone_input = '';
    public waitingMinutes: string;

    @Input() pay_type_change_allowed: boolean;
    @Input() pay_type: string;

    constructor(public modalController: ModalController,
    ) { }

    public async draw() {
        const modal = await this.modalController.create({
            component: DrawPage,
            showBackdrop: false,
            mode: 'md',
            animated: false,
        });
        modal.present();
    }
    public isDisabled(payType: string): boolean {
        return this.pay_type_change_allowed ? false : (payType !== this.pay_type);
    }
    public selectPayment(id: string) {
        this.selectedPayment = id;
    }
}