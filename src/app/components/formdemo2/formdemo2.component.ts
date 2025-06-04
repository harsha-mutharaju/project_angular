import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-formdemo2',
  imports: [FormsModule , CommonModule],
  templateUrl: './formdemo2.component.html',
  styleUrl: './formdemo2.component.css'
})
export class Formdemo2Component {

  user = {
    name: 'bbbg',
    gender: 'nfzgn',
    email: 'zdgfgn',
    address: {
      street: 'bhhhhhh',
      city: 'sfhdhdh',
      pincode: '5374568'
    }
  };

   submitUserForm(form: NgForm): void {
    console.log('Form Submitted!', form.value);
   }

}
