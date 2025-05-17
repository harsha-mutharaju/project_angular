import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-assignment1',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './assignment1.component.html',
  styleUrl: './assignment1.component.css'
})
export class Assignment1Component {

  //1. toggle paragraph
  paragraphVisibility = true;
  toggleParagraph() {
    this.paragraphVisibility = !this.paragraphVisibility;
  }

  //2. Update remanining characters in text field

  maxLength = 100;
  textInput = '';

  // 3. Dropdown for States
  selectedState = '';
  states = ['Texas', 'Tenessee', 'Washington'];

   // 4. Arithmetic Operation
   num1 = 0;
   num2 = 0;
   operator = '+';
   result = 0;
   calculate() {
     switch (this.operator) {
       case '+': this.result = this.num1 + this.num2; 
                  break;
       case '-': this.result = this.num1 - this.num2; 
                  break;
       case '*': this.result = this.num1 * this.num2; 
                  break;
       case '/': this.result = this.num2 !== 0 ? this.num1 / this.num2 : 0; 
                  break;
     }
   }
   resetc() { this.result = 0; }
 
   // 5. Toggle Input Type (Password/Text)
   isPassword = true;
   togglePassword() {
     this.isPassword = !this.isPassword;
   }
 
   // 6. Counter Controls
   counter = 0;
   increment() { this.counter++; }
   decrement() { if (this.counter > 0) {
    this.counter--;
  }
}
   reset() { this.counter = 0; }

   //7. toggle theme
   isDarkMode = false;

  toggleTheme() {
  this.isDarkMode = !this.isDarkMode;
 
   
 }
}


