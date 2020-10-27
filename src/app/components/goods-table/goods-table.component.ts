import{Component,Input}from'@angular/core';

@Component({
    selector: 'app-goods-table',
    templateUrl: './goods-table.component.html',
    styleUrls: ['./goods-table.component.scss'],
})
export class GoodsTableComponent{
@Input()goods:any[];
@Input() isChangeble:boolean = false;
}
