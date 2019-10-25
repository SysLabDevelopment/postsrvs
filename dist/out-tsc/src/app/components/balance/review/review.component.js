import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
var ReviewComponent = /** @class */ (function () {
    function ReviewComponent() {
        this.close_E = new EventEmitter();
        this.send_E = new EventEmitter();
        this.r_text = null;
    }
    ReviewComponent.prototype.ngOnInit = function () { };
    ReviewComponent.prototype.close = function () {
        this.close_E.emit();
    };
    ReviewComponent.prototype.send = function () {
        this.send_E.emit(this.r_text);
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ReviewComponent.prototype, "close_E", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ReviewComponent.prototype, "send_E", void 0);
    ReviewComponent = tslib_1.__decorate([
        Component({
            selector: 'app-review',
            templateUrl: './review.component.html',
            styleUrls: ['./review.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ReviewComponent);
    return ReviewComponent;
}());
export { ReviewComponent };
//# sourceMappingURL=review.component.js.map