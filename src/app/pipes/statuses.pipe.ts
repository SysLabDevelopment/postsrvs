import { Pipe, PipeTransform } from '@angular/core';
import {CommonModule} from "@angular/common";
@Pipe({
  name: 'partFilter'
})
export class StatusesPipe implements PipeTransform {

  transform(order: any, flag?: any): any {
    if (order.status_id == '6'){
      if (flag == '0'){
        return null;
      }
    }
    return order;
  }

}
