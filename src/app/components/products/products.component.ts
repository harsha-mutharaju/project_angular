import { Component } from '@angular/core';
import productData from './products_data';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgxPaginationModule, CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productsArr = productData;
  filteredProducts = [...this.productsArr];  // clone of the original array
  searchTerm: string = '';
  p: number = 1;

  sortAsc() {
    this.filteredProducts.sort((a, b) => a.id - b.id);
  }

  sortDesc() {
    this.filteredProducts.sort((a, b) => b.id - a.id);
  }

  searchProducts() {
    const search = this.searchTerm;
    this.filteredProducts = this.productsArr.filter(product =>
      product.title.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search)
    );
    this.p = 1; 
  }
}
