import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args) return value;
    args.toLowerCase();
    return value.filter((item:any) =>{
     
     return item.name.toLowerCase().startsWith(args)
    })
    
  }

}
//difference between observable and promise . various methods in observable. subject.
