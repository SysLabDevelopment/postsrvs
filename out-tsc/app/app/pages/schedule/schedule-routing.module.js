import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SchedulePage } from './schedule.page';
const routes = [
    {
        path: '',
        component: SchedulePage
    }
];
let SchedulePageRoutingModule = class SchedulePageRoutingModule {
};
SchedulePageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SchedulePageRoutingModule);
export { SchedulePageRoutingModule };
//# sourceMappingURL=schedule-routing.module.js.map