import { __decorate, __metadata } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
let ReviewComponent = class ReviewComponent {
    constructor() {
        this.close_E = new EventEmitter();
        this.send_E = new EventEmitter();
        this.r_text = null;
    }
    ngOnInit() { }
    close() {
        this.close_E.emit();
    }
    send() {
        this.send_E.emit(this.r_text);
    }
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], ReviewComponent.prototype, "close_E", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ReviewComponent.prototype, "send_E", void 0);
ReviewComponent = __decorate([
    Component({
        selector: 'app-review',
        templateUrl: './review.component.html',
        styleUrls: ['./review.component.scss'],
    }),
    __metadata("design:paramtypes", [])
], ReviewComponent);
export { ReviewComponent };
//# sourceMappingURL=review.component.js.map