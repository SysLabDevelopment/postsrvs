import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var StatusesPipe = /** @class */ (function () {
    function StatusesPipe() {
    }
    StatusesPipe.prototype.transform = function (order, flag) {
        if (order.status_id == '6') {
            if (flag == '0') {
                return null;
            }
        }
        return order;
    };
    StatusesPipe = tslib_1.__decorate([
        Pipe({
            name: 'partFilter'
        })
    ], StatusesPipe);
    return StatusesPipe;
}());
export { StatusesPipe };
//# sourceMappingURL=statuses.pipe.js.map