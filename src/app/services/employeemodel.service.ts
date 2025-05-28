import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from '../models/employeemodel';

@Injectable({
  providedIn: 'root'
})
export class EmployeemodelService {
  private url = 'http://localhost:3000/employees';

  constructor(private httpClient: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.url).pipe(
      map((response: any[]) => {
        return response.map(emp => new Employee(emp.id, emp.firstName, emp.lastName, emp.sal, emp.gender));
      })
    );
  }
}
