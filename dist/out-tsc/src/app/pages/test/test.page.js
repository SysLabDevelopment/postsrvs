import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { StateService } from '../../services/state.service';
let TestPage = class TestPage {
    constructor(state) {
        this.state = state;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
};
TestPage = __decorate([
    Component({
        selector: 'app-test',
        templateUrl: './test.page.html',
        styleUrls: ['./test.page.scss'],
    }),
    __metadata("design:paramtypes", [StateService])
], TestPage);
export { TestPage };
//# sourceMappingURL=test.page.js.map