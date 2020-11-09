import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggerService } from '../../services/sys/logger.service';
interface Good {
    ClientBarCode: string,
    Code: number,
    Final_kol_vo: unknown,
    Name: string,
    Price: number,
    ReturnCnt: unknown,
    kol_vo: number
}
@Component({
    selector: 'app-goods-table',
    templateUrl: './goods-table.component.html',
    styleUrls: ['./goods-table.component.scss'],
})


export class GoodsTableComponent implements OnInit {
    @Input() goods: Good[];
    @Input() isChangeble: boolean = false;
    @Output() goodsChanges = new EventEmitter();
    public $sum: Observable<string>;

    constructor(
        private logger: LoggerService
    ) {
        this.$sum = new Observable((sum) => {
            this.goodsChanges.subscribe(() => sum.next(this.getSum()))
        });

    }

    ngOnInit(): void {
        // this.goodsChanges.emit(this.getSum());
    }

    public minusGood(code: number, count = 1) {
        const index = this.goods.findIndex((good) => good.Code == code);
        if (this.goods[index].kol_vo == 0) return false;

        this.goods[index].kol_vo -= 1 * count;
        this.goodsChanges.emit(this.goods)
    }

    public plusGood(code: number) {
        const index = this.goods.findIndex((good) => good.Code == code);

        ++this.goods[index].kol_vo;
        this.goodsChanges.emit(this.goods);
    }

    private getSum() {
        let sum = 0;
        this.goods.forEach((good) => sum += good.kol_vo * good.Price);
        this.logger.log(`Итоговая сумма заказа: ${sum}`);
        return sum.toFixed(2);
    }

}
