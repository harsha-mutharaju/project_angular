import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formdemo3',
  imports: [ReactiveFormsModule, CommonModule] ,
  templateUrl: './formdemo3.component.html',
  styleUrl: './formdemo3.component.css',
  standalone:true
})
export class Formdemo3Component {
  userForm:FormGroup;

 constructor() {
  this.userForm = new FormGroup({
    name: new FormControl('hhh' , [Validators.required,Validators.minLength(5)]),
    email: new FormControl('w34634'),
    gender: new FormControl('male'),
    address:new FormGroup({
      street: new FormControl('knox'),
      city:new FormControl('k oaerngiqner'),
      pincode:new FormControl('3246'),
    })
  });

  
}
submitUserForm(){
    console.log(this.userForm)
  }


}
