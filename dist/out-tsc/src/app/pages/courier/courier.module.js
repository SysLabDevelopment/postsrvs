import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { IonicModule } from '@ionic/angular';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CourierPage } from './courier.page';
import { OrdersListFirstComponent } from '../../components/courier/orders-list-first/orders-list-first.component';
import { OrdersListSecondComponent } from '../../components/courier/orders-list-second/orders-list-second.component';
import { OTTabPipePipe } from '../../pipes/o-t-tab-pipe.pipe';
var routes = [
    {
        path: '',
        component: CourierPage
    }
];
var CourierPageModule = /** @class */ (function () {
    function CourierPageModule() {
    }
    CourierPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                DragDropModule,
                IonicModule,
                ScrollingModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CourierPage, OrdersListFirstComponent, OTTabPipePipe, OrdersListSecondComponent]
        })
    ], CourierPageModule);
    return CourierPageModule;
}());
export { CourierPageModule };
//# sourceMappingURL=courier.module.js.map