import{Component,Input}from'@angular/core';
@Component({selector:'app-goods-table', templateUrl:'./goods-table.component.html',styles:[]})
export class GoodsTableComponent{
@Input()goods:any[];
}
