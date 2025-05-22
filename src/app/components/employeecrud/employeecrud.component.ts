import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Snackbar from 'awesome-snackbar';
import Swal from 'sweetalert2';
import { Messages } from '../../constants/message.constants'; 

@Component({
  selector: 'app-employeecrud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employeecrud.component.html',
  styleUrls: ['./employeecrud.component.css']
})
export class EmployeecrudComponent {
  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];

  newEmployee = { eId: 0, name: '', sal: 0, gender: '' };
  selectedEmployee: any = null;

  addEmployee() {
  this.employees.push({ ...this.newEmployee });

  new Snackbar(Messages.EMPLOYEE_ADDED, {
    position: 'top-center',
    theme: 'light',
    style: {
      background: '#28a745',
      color: '#fff',
      fontWeight: 'bold'
    }
  });

  this.newEmployee = { eId: 0, name: '', sal: 0, gender: '' };
}


  deleteEmployee(eId: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this employee?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.employees = this.employees.filter(emp => emp.eId !== eId);
        Swal.fire('Deleted!', 'Employee has been deleted.', 'success');
      }
    });
  }

  viewEmployee(emp: any) {
    this.selectedEmployee = emp;
    const modal = new (window as any).bootstrap.Modal(
      document.getElementById('empModal')
    );
    modal.show();
  }
}


