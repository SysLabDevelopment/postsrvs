import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-goods-table',
    templateUrl: './goods-table.component.html',
    styleUrls: ['./goods-table.component.scss'],
})

interface Good {
    ClientBarCode: string,
    Code: number,
    Final_kol_vo: unknown,
    Name: string,
    Price: number,
    ReturnCnt: unknown,
    kol_vo: number
}
export class GoodsTableComponent {
    @Input() goods: Good[];
    @Input() isChangeble: boolean = false;
    @Output() goodsChanges = new EventEmitter();

    public minusGood(code: number) {
        const index = this.goods.findIndex(good => good.Code == code);
        if (this.goods[index].kol_vo == 0) return false;

        --this.goods[index].kol_vo;
        this.goodsChanges.emit(this.goods)
    }

    public plusGood(code: number) {
        const index = this.goods.findIndex(good => good.Code == code);
        const max = this.goods[index].kol_vo;
        if (this.goods[index].kol_vo == max) return false;

        ++this.goods[index].kol_vo;
        this.goodsChanges.emit(this.goods)
    }


}
