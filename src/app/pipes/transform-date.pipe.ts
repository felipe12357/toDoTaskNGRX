import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformDate',
  standalone:true
})
export class TransformDatePipe implements PipeTransform {

  transform(value: string): Date {
    const date = new Date(value)
    return date;
  }

}
