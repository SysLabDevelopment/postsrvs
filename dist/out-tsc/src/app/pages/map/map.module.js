import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MapPage } from './map.page';
const routes = [
    {
        path: '',
        component: MapPage
    }
];
let MapPageModule = class MapPageModule {
};
MapPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [MapPage]
    })
], MapPageModule);
export { MapPageModule };
//# sourceMappingURL=map.module.js.map