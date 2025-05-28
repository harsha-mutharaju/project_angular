import { Component , inject } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math2',
  imports: [],
  templateUrl: './math2.component.html',
  styleUrl: './math2.component.css'
})
export class Math2Component {

  //mathService = this.inject(MathService);
 mathService = inject(MathService);

 ngOnInit(){
  console.log("I am ngoninit from math2 component");
  console.log(this.mathService.mul(2,3));
  
 }
  }


