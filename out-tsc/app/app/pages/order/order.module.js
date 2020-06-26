import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';
import { IonicModule } from '@ionic/angular';
import { OrderPage } from './order.page';
const routes = [
    {
        path: '',
        component: OrderPage
    }
];
let OrderPageModule = class OrderPageModule {
};
OrderPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            QRCodeModule,
            RouterModule.forChild(routes)
        ],
        declarations: [OrderPage]
    })
], OrderPageModule);
export { OrderPageModule };
//# sourceMappingURL=order.module.js.map