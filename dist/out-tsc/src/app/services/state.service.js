import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject, interval, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var StateService = /** @class */ (function () {
    function StateService() {
        this.testData = [{ name: "test1" }, { name: "test2" }, { name: "test3" }];
        // переменные состояний 
        //GLOBAL
        this.login_state = new BehaviorSubject('not_login');
        this.stop$ = new Subject(); // останаливает все подписки;
        /* Режим работы с маршрутом
            auto    - маршрут с бека
            manual  - курьер рисует сам
        */
        this.manual_route = false;
        this.old_way = null;
        this.confirmed = false;
        //INTERVALS
        this.interval_3 = interval(4000);
        this.interval_1 = interval(3000);
        this.interval_30 = interval(30000);
        this.interval_1s = interval(2000);
        this.interval_2s = interval(15000);
        this.interval_3m = interval(3000);
        this.interval_1m = interval(60000);
        this.interval_1ss = interval(1000);
        //MAP
        this.position = new BehaviorSubject(null);
        this.points = new BehaviorSubject(null);
        this.map_state = new BehaviorSubject(null);
        this.route_state = new BehaviorSubject('not_init');
        this.change_state = new BehaviorSubject('not_init');
        this.map_event = new BehaviorSubject(null);
        this.point_check = new BehaviorSubject('not_init');
        this.geo_check = new BehaviorSubject('not_init');
        this.init_params_state = new BehaviorSubject('not_init');
        this.init_map_state = false;
        this.check_changes_state = new BehaviorSubject('not_init');
        this.linkPoints = new BehaviorSubject('not_init');
        this.link_init = false;
        this.map_state_watch = false;
        this.disLink = true;
        //COURIER
        this.orders = new BehaviorSubject(null);
        this.statuses = new BehaviorSubject(null);
        this.way = new BehaviorSubject(null);
        this.reasons = null;
        this.o_status = new BehaviorSubject(null);
        this.state = new BehaviorSubject(null);
        this.s_state = new BehaviorSubject(null);
        this.$stop = new Subject();
        this.check_state = false;
        this.g_state = new BehaviorSubject('unLogin');
        this.courier_init = false;
        this.orders_page_check = false;
        this.status_changed = new Subject();
        this.sc_flag = false;
        this.page_orders_check = false;
        this.client_states = new BehaviorSubject(null);
        //STATUS-BAR
        this.load_lvl = new BehaviorSubject(0);
        this.c_update_content_f = false;
        //BALANCE
        this.balance_check = false;
        // BROADCAST
        //обновляем все данные с сервера
        this.updateWayInfo = new Subject();
        // DATA
        this.orders_data = null;
        this.reasons_data = null;
        this.statuses_data = null;
        //NOTIFICATIONS
        this.notifications = [];
        this.notificationStr = null;
        console.log("INIT_STATE_SERVICE");
        var self = this;
        /* Подписываемся на все сабжекты поставляющие данные и запоминаем в переменных
            для отрисовки на страницах (дабы убрать подписки со страниц)
        */
        this.orders.pipe(takeUntil(this.stop$)).subscribe(function (od) {
            if (od != null) {
                self.orders_data = od;
            }
        });
        this.statuses.pipe(takeUntil(this.stop$)).subscribe(function (st) {
            if (st != null) {
                self.statuses_data = st;
            }
        });
    }
    StateService.prototype.setNotification = function (tag, mes) {
        console.log('set_notification', tag, mes);
        this.notifications[tag] = mes;
        this.setNotificationStr();
    };
    StateService.prototype.unsetNotification = function (tag) {
        console.log('unset_notification', tag);
        delete (this.notifications[tag]);
        this.setNotificationStr();
    };
    StateService.prototype.getNotification = function (tag) {
        return this.notifications[tag];
    };
    StateService.prototype.setNotificationStr = function () {
        var n_s = "";
        for (var tag in this.notifications) {
            n_s += this.notifications[tag];
        }
        this.notificationStr = n_s;
        console.log('set_notificationStr', this.notificationStr);
    };
    //при выходе возвращаем приложение в иходное состояние
    StateService.prototype.logout = function () {
        this.stop$.next();
        // map
        this.position.next(null);
        this.points.next(null);
        this.l_route = null;
        this.l_map = null;
        this.duration = null;
        this.map_state.next(null);
        this.route_state.next('not_init');
        this.change_state.next('not_init');
        this.map_event.next('not_init');
        this.point_check.next('not_init');
        this.geo_check.next('not_init');
        this.init_params_state.next('not_init');
        this.check_changes_state.next('not_init');
        this.linkPoints.next('not_init');
        this.link_init = false;
        this.map_state_watch = false;
        this.init_map_state = false;
        //courier
        this.orders.next(null);
        this.statuses.next(null);
        this.way.next(null);
        this.reasons = null;
        this.o_status.next(null);
        this.state.next(null);
        this.s_state.next(null);
        this.check_state = false;
        this.courier_init = false;
        this.orders_page_check = false;
        this.sc_flag = false;
        this.page_orders_check = false;
        this.balance_check = false;
        this.c_update_content_f = false;
        this.load_lvl.next(0);
        this.old_way = null;
    };
    StateService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], StateService);
    return StateService;
}());
export { StateService };
//# sourceMappingURL=state.service.js.map