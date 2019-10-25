import * as tslib_1 from "tslib";
import { Component, ViewChildren, ViewChild, QueryList } from '@angular/core';
import { CourierService } from '../../services/courier.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { StateService } from '../../services/state.service';
import { Subject } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { Vibration } from '@ionic-native/vibration/ngx';
var CourierPage = /** @class */ (function () {
    function CourierPage(courier, router, state$, auth, bs, vbr) {
        this.courier = courier;
        this.router = router;
        this.state$ = state$;
        this.auth = auth;
        this.bs = bs;
        this.vbr = vbr;
        this.orders = null;
        this.statuses = null;
        this.selectedTab = 1;
        this.ordersInit = false;
        this.loader = false;
        this.local_stop$ = new Subject();
        this.localcheck = false;
        this.g_done = 0;
        this.g_process = 0;
        this.g_fail = 0;
        this.lvl_ind = { width: '0%' };
        this.btn_go = false;
        this.notification = null;
        this.dragStarted = false;
        var self = this;
        this.initContent();
        if (this.state$.position.getValue() != null) {
            this.startRoute(false);
        }
        this.state$.state.pipe(takeUntil(this.local_stop$)).subscribe(function (state) {
            if (state == 'orders_init') {
                self.initContent();
            }
        });
    }
    CourierPage.prototype.ngAfterViewInit = function () { };
    CourierPage.prototype.ngOnInit = function () { };
    CourierPage.prototype.submitOrder = function () {
        var self = this;
        console.log('SUBMIT_ORDER_CALL');
        this.bs.scan().then(function (data) {
            console.log('SCAN_RETURN_DATA', data);
            if (data.text != "") {
                self.loader = true;
                self.courier.findOrder(data.text).subscribe(function (res) {
                    if (res.success == 'true') {
                        self.courier.sumbitOrder(res.order_id).subscribe(function (re_s) {
                            if (re_s) {
                                self.submitOrder();
                            }
                            self.loader = false;
                        });
                    }
                    else {
                        self.auth.showError(2);
                        self.loader = false;
                    }
                    self.state$.confirmed = true;
                    self.orders.forEach(function (order) {
                        if (order.confirm == '0') {
                            self.state$.confirmed = false;
                        }
                    });
                });
            }
            else {
                self.loader = false;
            }
        });
    };
    CourierPage.prototype.ordersListChanged = function (orders) {
        console.log('OrdesListChanges orders', orders);
        this.orders = orders;
        var way = new Array();
        orders.forEach(function (order) {
            if (order.status_id == 1) {
                way.push(order.id);
            }
        });
        this.state$.old_way = way;
        console.log('OrdesListChanges newWay', way);
    };
    CourierPage.prototype.ngOnDestroy = function () {
        this.local_stop$.next();
        this.state$.orders_page_check = false;
    };
    CourierPage.prototype.manualRoute = function () {
        if (this.state$.manual_route) {
            this.courier.changeRouteMode('auto');
        }
        else {
            this.courier.changeRouteMode('manual');
        }
        this.vbr.vibrate(300);
    };
    CourierPage.prototype.initContent = function () {
        console.log('INIT_CONTENT_CALL');
        var self = this;
        this.orders = this.state$.orders_data;
        this.statuses = this.state$.statuses.getValue();
        if (this.orders == null || this.statuses == null) {
            this.loader = true;
            setTimeout(function () {
                self.initContent();
            }, 500);
            return false;
        }
        this.loader = false;
        this.ordersInit = true;
        self.count_orders();
    };
    CourierPage.prototype.getStatus = function (order) {
        return this.courier.getStatus(order);
    };
    CourierPage.prototype.selectOrder = function (id) {
        for (var i = 0; i < this.orders.length; i++) {
            if (this.orders[i].id == id) {
                if (this.orders[i].confirm == '0') {
                    return false;
                }
            }
        }
        this.router.navigate(['/order', id]);
    };
    CourierPage.prototype.tabSelect = function (tab) {
        this.selectedTab = tab;
    };
    CourierPage.prototype.customTrackBy = function (index, obj) {
        return index;
    };
    CourierPage.prototype.getCondition = function (status) {
        switch (this.selectedTab) {
            case 1:
                if (status == 1)
                    return true;
                break;
            case 2:
                if (status == 5 || status == 6)
                    return true;
                break;
            case 3:
                if (status == 4)
                    return true;
                break;
        }
        return false;
    };
    CourierPage.prototype.count_orders = function () {
        var g_done = 0;
        var g_process = 0;
        var g_fail = 0;
        for (var i = 0; i < this.orders.length; i++) {
            switch (String(this.orders[i].status_id)) {
                case '4':
                    g_fail++;
                    break;
                case '5':
                    g_done++;
                    break;
                case '6':
                    g_done++;
                    break;
                case '1':
                    g_process++;
                    break;
            }
        }
        this.g_done = g_done;
        this.g_process = g_process;
        this.g_fail = g_fail;
    };
    CourierPage.prototype.startRoute = function (start, stop) {
        if (start === void 0) { start = true; }
        if (stop === void 0) { stop = false; }
        var self = this;
        this.auth.checkAuth().subscribe(function (data) {
            if (data.success == 'true') {
                self.sendStartRoute(data.sync_id, start, stop);
            }
        });
    };
    CourierPage.prototype.stopRoute = function () {
        this.startRoute(false, true);
    };
    CourierPage.prototype.sendStartRoute = function (cid, start, stop) {
        var url = "geo/route_start.php";
        var data = { 'cid': cid,
            'lt': this.state$.position.getValue().lt,
            'lg': this.state$.position.getValue().lg };
        if (start) {
            data['start'] = '1';
        }
        if (stop) {
            data['stop'] = '1';
        }
        var self = this;
        this.auth.sendPost(url, data).subscribe(function (data) {
            if (data.success == true) {
                self.btn_go = true;
                if (data.result == 'stop') {
                    self.btn_go = false;
                }
            }
        });
    };
    CourierPage.prototype.findOrder = function () {
        var _this = this;
        var self = this;
        this.bs.scan().then(function (data) {
            self.courier.findOrder(data.text).subscribe(function (res) {
                if (res.success == 'true') {
                    _this.orders.forEach(function (order) {
                        if (order.id == res.order_id) {
                            self.selectOrder(res.order_id);
                            return false;
                        }
                    });
                }
                else {
                    self.auth.showError(2);
                }
            });
        });
    };
    tslib_1.__decorate([
        ViewChildren(CdkDrag),
        tslib_1.__metadata("design:type", QueryList)
    ], CourierPage.prototype, "DragItems", void 0);
    tslib_1.__decorate([
        ViewChild(CdkDropList, { static: false }),
        tslib_1.__metadata("design:type", CdkDropList)
    ], CourierPage.prototype, "Drop_L", void 0);
    CourierPage = tslib_1.__decorate([
        Component({
            selector: 'app-courier',
            templateUrl: './courier.page.html',
            styleUrls: ['./courier.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CourierService,
            Router,
            StateService,
            AuthService,
            BarcodeScanner,
            Vibration])
    ], CourierPage);
    return CourierPage;
}());
export { CourierPage };
//# sourceMappingURL=courier.page.js.map