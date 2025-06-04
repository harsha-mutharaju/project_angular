import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeesubjectService } from '../../services/employeesubject.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employeesubject',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './employeesubject.component.html',
  styleUrl: './employeesubject.component.css'
})
export class EmployeesubjectComponent {

  employeeObservable: Observable<{ id: number; name: string; role: string; salary: number }[]>;
  newEmployee = { id: 0, name: '', role: '', salary: 0 };

  constructor(private employeeService: EmployeesubjectService) {
    this.employeeObservable = this.employeeService.employeeObservable;
  }

  addEmployee() {
    if (this.newEmployee.name && this.newEmployee.role) {
      this.employeeService.addEmployee({ ...this.newEmployee });
      this.newEmployee = { id: 0, name: '', role: '', salary: 0 };
    }
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id);
  }

  clearEmployees() {
    this.employeeService.clearEmployee();
  }
}
