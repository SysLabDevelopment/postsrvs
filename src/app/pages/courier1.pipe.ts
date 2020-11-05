import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courier1'
})
export class Courier1Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
