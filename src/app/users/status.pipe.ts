import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {
  public statuses = {
    active: '*',
    offline: '-'
  };


  transform(value: any, ...args: any): any {

    console.log(args);

    return this.statuses[value];
  }

}
