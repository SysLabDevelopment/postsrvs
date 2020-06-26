import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SchedulePageRoutingModule } from './schedule-routing.module';
import { SchedulePage } from './schedule.page';
let SchedulePageModule = class SchedulePageModule {
};
SchedulePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SchedulePageRoutingModule
        ],
        declarations: [SchedulePage]
    })
], SchedulePageModule);
export { SchedulePageModule };
//# sourceMappingURL=schedule.module.js.map