import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    // console.log(args[0]*10);
    return parseInt(value)*parseInt(value);
    //parseInt->string to int
    //parseFloat->string to float.
  }

}
