import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesubjectService {

  private employee = new BehaviorSubject<{ id: number; name: string; role: string; salary: number }[]>([]);
  public employeeObservable = this.employee.asObservable();

  constructor() {}

  addEmployee(employee: { id: number; name: string; role: string; salary: number }) {
    const current = this.employee.value;
    this.employee.next([...current, employee]);
  }

  deleteEmployee(id: number) {
    const current = this.employee.value;
    this.employee.next(current.filter(emp => emp.id !== id));
  }

  clearEmployee() {
    this.employee.next([]);
  }
}
