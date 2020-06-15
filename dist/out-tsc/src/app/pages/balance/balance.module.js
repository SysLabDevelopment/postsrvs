import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { IonicModule } from '@ionic/angular';
import { ReviewComponent } from '../../components/balance/review/review.component';
import { BalancePage } from './balance.page';
const routes = [
    {
        path: '',
        component: BalancePage
    }
];
let BalancePageModule = class BalancePageModule {
};
BalancePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ScrollingModule,
            RouterModule.forChild(routes)
        ],
        declarations: [BalancePage, ReviewComponent]
    })
], BalancePageModule);
export { BalancePageModule };
//# sourceMappingURL=balance.module.js.map