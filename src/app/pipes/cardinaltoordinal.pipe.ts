import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardinaltoordinal'
})
export class CardinaltoordinalPipe implements PipeTransform {

 transform(value: number): string {
    
    const lastDigit = value % 10;
    const lastTwoDigits = value % 100;

    let suffix = 'th';

    if (lastTwoDigits < 11 || lastTwoDigits > 13) {
      if (lastDigit === 1) suffix = 'st';
      else if (lastDigit === 2) suffix = 'nd';
      else if (lastDigit === 3) suffix = 'rd';
    }

    return value + suffix;
  }
}
