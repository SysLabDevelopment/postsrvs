import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';
import { IonicModule } from '@ionic/angular';
import { StatusesPipe } from '../../pipes/statuses.pipe';
import { OrderPage } from './order.page';
var routes = [
    {
        path: '',
        component: OrderPage
    }
];
var OrderPageModule = /** @class */ (function () {
    function OrderPageModule() {
    }
    OrderPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                QRCodeModule,
                RouterModule.forChild(routes)
            ],
            declarations: [OrderPage, StatusesPipe]
        })
    ], OrderPageModule);
    return OrderPageModule;
}());
export { OrderPageModule };
//# sourceMappingURL=order.module.js.map