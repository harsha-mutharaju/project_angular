import { Component, ViewEncapsulation } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';

@Component({
  selector: 'app-body',
  imports: [
    ProductsComponent,
    DatabindingComponent,
    DirectivesComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {

}


    // DatabindingComponent,
    // DirectivesComponent