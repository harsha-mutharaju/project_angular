import { Component } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math1',
  imports: [],
  templateUrl: './math1.component.html',
  styleUrl: './math1.component.css'
})
export class Math1Component {


constructor(private mathService : MathService){

}
ngOnInit(){
  console.log("I am ngoninit from math1 component");
  console.log(this.mathService.add(2,3));
  console.log(this.mathService.sub(5,1));
}
}
