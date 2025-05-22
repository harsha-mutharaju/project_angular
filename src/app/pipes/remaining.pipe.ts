import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining'
})
export class RemainingPipe implements PipeTransform {
  transform(input: any, maxlength: number = 100) {
    console.log('Remaining Pipe...')
    return maxlength - input.length;
  }
}