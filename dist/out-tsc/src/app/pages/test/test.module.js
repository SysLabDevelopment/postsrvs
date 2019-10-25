import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TestPage } from './test.page';
import { ScrollingModule } from '@angular/cdk/scrolling';
var routes = [
    {
        path: '',
        component: TestPage
    }
];
var TestPageModule = /** @class */ (function () {
    function TestPageModule() {
    }
    TestPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                DragDropModule,
                ScrollingModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TestPage]
        })
    ], TestPageModule);
    return TestPageModule;
}());
export { TestPageModule };
//# sourceMappingURL=test.module.js.map