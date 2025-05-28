import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employeeserviceassignment',
  templateUrl: './employeeserviceassignment.component.html',
  styleUrls: ['./employeeserviceassignment.component.css'],
  imports:[FormsModule , CommonModule]
})
export class EmployeeserviceassignmentComponent {

  employees: any[] = [];
  selectedFilter: string = 'all';

  constructor(private employeeService: EmployeeService) {
    this.employees = this.employeeService.employees;
  }

  onFilterChange() {
    if (this.selectedFilter === 'male') {
      this.employees = this.employeeService.getMaleEmployees();
    } else if (this.selectedFilter === 'female') {
      this.employees = this.employeeService.getFemaleEmployees();
    } else {
      this.employees = this.employeeService.getAllEmployees();
    }
  }
}
