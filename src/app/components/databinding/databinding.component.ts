import { Component , ViewEncapsulation} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone:true,
  imports: [
    FormsModule
  ],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  userName: string = 'Sachin Tendulkar';
  img_url: string = 'https://media.gettyimages.com/id/110022215/photo/group-b-2011-icc-world-cup.jpg?s=612x612&w=gi&k=20&c=EE4JlD8exE33eH498PFA9hGxFmecnwbIy0MAGQn_toA=';

  myColSpanVal: number = 2;

  flag: boolean = false;
  f1() {
    alert("I am f1...")
  }

  num1: number = 1;
  num2: number = 1;

  addResult: number = 0;
  addition(val1: string | number, val2: string | number) {
    this.addResult = +val1 + +val2;
  }
}