import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oTTabPipe',
  pure: false
})
export class OTTabPipePipe implements PipeTransform {

  transform(orders: any[], tab: any): any {
    let o_resp:any[] = new Array();
    orders.forEach(order => {
      if( (order.status_id == 1 && tab == 1) ||
      (order.status_id == 5 && tab == 2) ||
      (order.status_id == 6 && tab == 2) ||
      (order.status_id == 4 && tab == 3)) {
        o_resp.push(order);
      }
    });
    return o_resp;
  }

}
