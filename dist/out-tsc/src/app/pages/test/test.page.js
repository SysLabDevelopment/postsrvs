import * as tslib_1 from "tslib";
import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { StateService } from '../../services/state.service';
import { moveItemInArray, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
var TestPage = /** @class */ (function () {
    function TestPage(state) {
        this.state = state;
        this.i = 0;
        this.dropStart = false;
        this.dropIndexStart = null;
        this.movies = [
            'Episode I - The Phantom Menace',
            'Episode II - Attack of the Clones',
            'Episode III - Revenge of the Sith',
            'Episode IV - A New Hope',
            'Episode V - The Empire Strikes Back',
            'Episode VI - Return of the Jedi',
            'Episode VII - The Force Awakens',
            'Episode VIII - The Last Jedi'
        ];
        this.td = this.state.testData;
        this.i = this.state.testData.length;
    }
    TestPage.prototype.ngOnInit = function () {
    };
    TestPage.prototype.ngAfterViewInit = function () {
        var self = this;
        // this.DragItems.forEach(DragItem => {
        //   self.ItemMove(DragItem);
        // });
        this.Drop_L.autoScrollDisabled = false;
        this.DragItems.changes.subscribe(function (r) {
            self.DragItems.forEach(function (DragItem) {
                DragItem.dragStartDelay = 500;
                console.log('DragItem', DragItem);
            });
        });
        // this.Drop_L.sorted.subscribe((item) => {
        //   console.log('is_dragged', item);
        //   self.ItemMove(item);
        // })
    };
    TestPage.prototype.ItemMove = function (DragItem) {
        this.VS.checkViewportSize();
        var c_ind = DragItem.currentIndex;
        var p_ind = DragItem.previousIndex;
        var delta = c_ind - p_ind;
        var item_size = 60;
        var offset_top = this.VS.measureScrollOffset('top');
        var offset_btm = this.VS.measureScrollOffset('bottom');
        var content_size = this.VS.measureRenderedContentSize();
        var viewport_size = content_size - (offset_btm + offset_top);
        var offset_top_to_item = c_ind * item_size;
        console.log('offsetToTop', offset_top);
        console.log('offsetToBottom', offset_btm);
        console.log('rendered_content', content_size);
        console.log('element_h', 60);
        console.log('viewport_size', viewport_size);
        console.log('offset_top_to_item', offset_top_to_item);
        if (delta < 0 && offset_top > 0) {
            if (offset_top_to_item < offset_top + 70) {
                console.log('ВМТ');
                var n_top_offset = item_size * 2;
                if (offset_top < n_top_offset) {
                    this.VS.scrollToOffset(0, 'smooth');
                    this.Drop_L.start();
                }
                else {
                    this.VS.scrollToOffset(offset_top - n_top_offset, 'smooth');
                    this.Drop_L.start();
                }
            }
        }
        else if (delta > 0 && offset_btm > 0) {
            if (offset_top_to_item > (offset_top + viewport_size - 70)) {
                console.log('НМТ');
                var n_btm_offset = item_size * 2;
                if (offset_btm < n_btm_offset) {
                    this.VS.scrollToOffset(content_size - viewport_size, 'smooth');
                    this.Drop_L.start();
                }
                else {
                    this.VS.scrollToOffset(offset_top + n_btm_offset, 'smooth');
                    this.Drop_L.start();
                }
            }
        }
        // console.log('range',self.VS.measureScrollOffset('top') );
        // console.log('item', DragItem.item);
        // console.log(delta);
        // if (Math.abs(delta) > 2){
        //   if (delta < 0){
        //     console.log('ВМТ');
        //   } else {
        //     console.log('НМТ');
        //   }
        // }
    };
    TestPage.prototype.drop = function (event) {
        moveItemInArray(this.td, event.previousIndex, event.currentIndex);
    };
    TestPage.prototype.initStates = function () {
        this.i = this.state.testData.length + 1;
        for (var i = this.i; i < this.i + 10; i++) {
            this.state.testData.push({ name: "test" + i });
        }
    };
    TestPage.prototype.scrollT = function () {
        var s_options = { top: 0, behavior: 'smooth' };
        this.VS.scrollTo(s_options);
    };
    TestPage.prototype.add = function () {
        this.i = this.state.testData.length + 1;
        this.state.testData.push({ name: "test" + this.i });
    };
    TestPage.prototype.delete = function () {
        this.td.pop();
    };
    tslib_1.__decorate([
        ViewChild(CdkVirtualScrollViewport, { static: false }),
        tslib_1.__metadata("design:type", CdkVirtualScrollViewport)
    ], TestPage.prototype, "VS", void 0);
    tslib_1.__decorate([
        ViewChildren(CdkDrag),
        tslib_1.__metadata("design:type", QueryList)
    ], TestPage.prototype, "DragItems", void 0);
    tslib_1.__decorate([
        ViewChild(CdkDropList, { static: false }),
        tslib_1.__metadata("design:type", CdkDropList)
    ], TestPage.prototype, "Drop_L", void 0);
    TestPage = tslib_1.__decorate([
        Component({
            selector: 'app-test',
            templateUrl: './test.page.html',
            styleUrls: ['./test.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [StateService])
    ], TestPage);
    return TestPage;
}());
export { TestPage };
//# sourceMappingURL=test.page.js.map