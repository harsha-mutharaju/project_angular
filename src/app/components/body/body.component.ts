import { Component, ViewEncapsulation } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { MymodalComponent } from "../mymodal/mymodal.component";
import { Demo1Component } from "../demo1/demo1.component";
import { EmployeecrudComponent } from '../employeecrud/employeecrud.component';
import { PipesComponent } from '../pipes/pipes.component';
import { ParentComponent } from '../parent/parent.component';
import { TrafficlightComponent } from "../trafficlight/trafficlight.component";
import { Math1Component } from '../math1/math1.component';
import { Math2Component } from '../math2/math2.component';
import { EmployeeserviceassignmentComponent } from '../employeeserviceassignment/employeeserviceassignment.component';
import { Httpdemo1Component } from '../httpdemo1/httpdemo1.component';
import { Httpdemo2Component } from '../httpdemo2/httpdemo2.component';
import { UserComponent } from '../user/user.component';
import { Observabledemo1Component } from '../observabledemo1/observabledemo1.component';
import { Observabledemo2Component } from '../observabledemo2/observabledemo2.component';
import { Observabledemo3Component } from '../observabledemo3/observabledemo3.component';

@Component({
  selector: 'app-body',
  imports: [
    // ProductsComponent,
    // DatabindingComponent,
    // DirectivesComponent,
    // MymodalComponent,
    // Demo1Component,
    // EmployeecrudComponent,
    // PipesComponent,
    // ParentComponent,
    // TrafficlightComponent
    // Math1Component,
    // Math2Component
    // EmployeeserviceassignmentComponent,
    // Httpdemo1Component
    // Httpdemo2Component,
    // UserComponent
    // Observabledemo1Component
    Observabledemo2Component
    // Observabledemo3Component
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {
  flag:boolean = true;

}
