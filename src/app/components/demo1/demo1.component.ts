import { Component } from '@angular/core';
import Swal from 'sweetalert2';
 import Snackbar from 'awesome-snackbar';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'
})
export class Demo1Component {

  openAlert() {
    Swal.fire({title: "The Internet?",text: "That thing is still around?",icon: "question"});

  }

  
  openConfirmation() {
    Swal.fire({
  title: "Do you want to save the changes?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Save",
  denyButtonText: `Don't save`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    Swal.fire("Saved!", "", "success");
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
  }
});

  }

  openSnackBar(){
    new Snackbar('Hello world! 👋');
  }

}
