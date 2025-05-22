import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(name: string, gender: string): string {
    const prefix = gender === 'male' ? 'Mr.' : 'Miss.';
    return `${prefix} ${name}`;
  }
  
  

}
