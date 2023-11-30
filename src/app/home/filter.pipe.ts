import { Pipe, PipeTransform } from '@angular/core';
import { Idata } from '../interfaces';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value?: Idata[], filteredData?: string): any {
    if (!filteredData || filteredData === '') {
      return value;
    }
    return value?.filter((val) =>
      // val.title.toLowerCase().indexOf(filteredData.toLowerCase()) !== -1
      val.title.toLocaleLowerCase().includes(filteredData.toLocaleLowerCase())
    );
  }
}
