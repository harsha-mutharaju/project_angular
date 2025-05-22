import { Component, ViewEncapsulation } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { MymodalComponent } from "../mymodal/mymodal.component";
import { Demo1Component } from "../demo1/demo1.component";
import { EmployeecrudComponent } from '../employeecrud/employeecrud.component';
import { PipesComponent } from '../pipes/pipes.component';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-body',
  imports: [
    ProductsComponent,
    DatabindingComponent,
    DirectivesComponent,
    MymodalComponent,
    Demo1Component,
    EmployeecrudComponent,
    PipesComponent,
    ParentComponent

],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {

}
