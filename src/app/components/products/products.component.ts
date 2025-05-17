import { Component } from '@angular/core';
import productData from './products_data';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-products',
    imports: [NgxPaginationModule , CommonModule , FormsModule],
    templateUrl: './products.component.html',
    styleUrl: './products.component.css'
})
export class ProductsComponent {
  productsArr = productData;
  p: number = 1;

}
