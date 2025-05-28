import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employeemodel';
import { EmployeemodelService } from '../../services/employeemodel.service';


@Component({
  selector: 'app-httpdemo2',
  standalone: true, // if you're using standalone
  imports: [],
  templateUrl: './httpdemo2.component.html',
  styleUrls: ['./httpdemo2.component.css']
})
export class Httpdemo2Component implements OnInit {
  employees: Employee[] = [];

  // constructor(private employeeService: EmployeeService, private httpClient: HttpClient) {}
constructor(private employeeService: EmployeemodelService, private httpClient: HttpClient) {}

  ngOnInit() {
    this.fetchEmployees();
    this.fetchUsers();
  }

  fetchEmployees() {
    this.employeeService.getEmployees().subscribe((response: Employee[]) => {
      console.log(response);
      this.employees = response;
    });
  }

  fetchUsers() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(response => {
      console.log(response);
    });
  }
}
