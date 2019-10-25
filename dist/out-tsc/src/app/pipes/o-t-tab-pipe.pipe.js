import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var OTTabPipePipe = /** @class */ (function () {
    function OTTabPipePipe() {
    }
    OTTabPipePipe.prototype.transform = function (orders, tab) {
        var o_resp = new Array();
        orders.forEach(function (order) {
            if ((order.status_id == 1 && tab == 1) ||
                (order.status_id == 5 && tab == 2) ||
                (order.status_id == 6 && tab == 2) ||
                (order.status_id == 4 && tab == 3)) {
                o_resp.push(order);
            }
        });
        return o_resp;
    };
    OTTabPipePipe = tslib_1.__decorate([
        Pipe({
            name: 'oTTabPipe',
            pure: false
        })
    ], OTTabPipePipe);
    return OTTabPipePipe;
}());
export { OTTabPipePipe };
//# sourceMappingURL=o-t-tab-pipe.pipe.js.map