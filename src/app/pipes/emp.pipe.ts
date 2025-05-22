import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emp'
})
export class EmployeeFilterPipe implements PipeTransform {
  transform(value: any[], searchText: string): any[] {
    if (!value) return [];
    if (!searchText) return value;

    const lowerSearch = searchText.toLowerCase();
    return value.filter(emp =>
      emp.name.toLowerCase().includes(lowerSearch) ||
      emp.gender.toLowerCase().includes(lowerSearch)
    );
  }
}
