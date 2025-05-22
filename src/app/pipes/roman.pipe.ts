import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roman'
})
export class RomanPipe implements PipeTransform {
  transform(value: number): string {
    
    const romanMap = [
      { val: 1000, sym: 'M' },
      { val: 900, sym: 'CM' },
      { val: 500, sym: 'D' },
      { val: 400, sym: 'CD' },
      { val: 100, sym: 'C' },
      { val: 90, sym: 'XC' },
      { val: 50, sym: 'L' },
      { val: 40, sym: 'XL' },
      { val: 10, sym: 'X' },
      { val: 9, sym: 'IX' },
      { val: 5, sym: 'V' },
      { val: 4, sym: 'IV' },
      { val: 1, sym: 'I' }
    ];

    let result = '';
    
    for (let item of romanMap) {
      while (value >= item.val) {
        result += item.sym;
        value -= item.val;
      }
    }

    return result;
  }
}
