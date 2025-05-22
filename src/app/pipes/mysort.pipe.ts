import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mysort'
})
export class MySortPipe implements PipeTransform {
  transform(arr: any[]) {
    console.log('sort pipe called')
    return arr.sort((a, b) => a - b);
  }
}
