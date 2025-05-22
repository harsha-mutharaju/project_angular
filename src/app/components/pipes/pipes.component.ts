import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';
import { MySortPipe } from '../../pipes/mysort.pipe';
import { CardinaltoordinalPipe } from '../../pipes/cardinaltoordinal.pipe';
import { RomanPipe } from '../../pipes/roman.pipe';
import { AgePipe } from '../../pipes/age.pipe';
import { GenderPipe } from '../../pipes/gender.pipe';
import { EmployeeFilterPipe } from '../../pipes/emp.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule,FormsModule , RemainingPipe , MySortPipe, CardinaltoordinalPipe , RomanPipe,AgePipe, GenderPipe, EmployeeFilterPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  userName :string = 'Sai Sriharsha';
  salary : number = 5000;
  today : Date = new Date();
  user:object = {name:'harsha' , age: 100 , gender : 'male' }

  numberArray : number[] = [10,20,30,40,50]

  msg:string='';
    msg2: string = '';

  num: number = 21;

  arr = [10, 50, 30, 40, 20]
  arr2 = [10, 50, 30, 40, 20]

dob: string = '';

employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];

  searchText:string=''
  
}
