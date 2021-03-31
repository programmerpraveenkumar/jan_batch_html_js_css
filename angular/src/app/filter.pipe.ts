import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: [], ...args: any[]): unknown {
      //filter->array iterate->return array
      //console.log(data);
      //return data;;
     // console.log(args.length,args);
      if(args[0] == ""){
        return [];
      }
      let tmp = data.filter((obj:any)=>(obj['name'].indexOf(args) == 0))
      return tmp;
  }

}
