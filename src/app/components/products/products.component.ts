import { Component } from '@angular/core';
import productData from './products_data';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ZoominDirective } from '../../directives/zoomin.directive';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgxPaginationModule, CommonModule, FormsModule , ZoominDirective],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productsArr = productData;
  filteredProducts = [...this.productsArr];
  searchTerm: string = '';
  p: number = 1;

  sortAsc() {
    this.filteredProducts.sort((a, b) => a.price - b.price);
  }

  sortDesc() {
    this.filteredProducts.sort((a, b) => b.price - a.price);
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
