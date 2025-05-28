import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
// assignment - employee service should have 1 variable and 3 methods

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];
// methods - getAllEmployees , getMaleEmployees , getFemaleEmployees

getAllEmployees(){
  return this.employees;

}

getMaleEmployees(){
return this.employees.filter(e=> e.gender==='male');
}

getFemaleEmployees(){
  return this.employees.filter(e=>e.gender==='female');
}











}
