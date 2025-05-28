import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employeeadd',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employeeadd.component.html',
  styleUrls: ['./employeeadd.component.css'],
  outputs: ['onAdd']
})
export class EmployeeaddComponent {
  onAdd = new EventEmitter<any>();
  newEmployee = { name: '', sal: 0, gender: '' };

  submitForm() {
    this.onAdd.emit(this.newEmployee);
    this.newEmployee = { name: '', sal: 0, gender: '' };
  }
}
