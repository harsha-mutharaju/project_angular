import { Component } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [Child1Component,Child2Component,FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  a:number;
  b:number;
  address_parent: string='';
 // @ViewChild('mybox1') myBox1: any;

receiveDataFromChild(addressDataFromChild: string) {
  this.address_parent = addressDataFromChild;
}

constructor() {
  this.a=10; // initialize class variables
  this.b=20;
    console.log("Parent constructor");
    console.log("Parent constructor");
    //console.log(this.myBox1);
  }
  ngOnInit() {
    console.log('Parent ngOnInit');
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }
  ngDoCheck() {
    console.log('Parent ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('Parent ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('Parent ngAfterContentChecked')
  }
  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit');
   // console.log(this.myBox1);
   // this.myBox1.nativeElement.focus();
  }
  ngAfterViewChecked() {
    console.log('Parent ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('Parent ngOnDestory');
  }


}
