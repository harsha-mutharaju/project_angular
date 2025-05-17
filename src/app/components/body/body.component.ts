import { Component, ViewEncapsulation } from '@angular/core';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-body',
  imports: [
    ProductsComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {

}


    // DatabindingComponent,
    // DirectivesComponent