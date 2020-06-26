import { __decorate } from "tslib";
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
import { OrdersListGuessComponent } from '../../components/courier/orders-list-guess/orders-list-guess.component';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu, 'ru');
const routes = [
    {
        path: '',
        component: CourierPage
    }
];
let CourierPageModule = class CourierPageModule {
};
CourierPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            DragDropModule,
            IonicModule,
            ScrollingModule,
            RouterModule.forChild(routes)
        ],
        declarations: [CourierPage, OrdersListFirstComponent, OrdersListSecondComponent, OrdersListGuessComponent],
        providers: [
            { provide: LOCALE_ID, useFactory: () => 'ru' }
        ]
    })
], CourierPageModule);
export { CourierPageModule };
//# sourceMappingURL=courier.module.js.map