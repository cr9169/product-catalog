import { Component } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../models/product.model';
import { ProductsFilterComponent } from './products-filter/products-filter.component';

@Component({
  selector: 'app-products-catalog',
  imports: [ProductCardComponent, ProductsFilterComponent],
  templateUrl: './products-catalog.component.html',
  styleUrl: './products-catalog.component.scss',
})
export class ProductsCatalogComponent {
  products!: Product[];
  filteredProducts!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = products;
    });
  }

  filterProducts(category: string) {
    this.filteredProducts = category
      ? this.products.filter((p) => p.category === category)
      : this.products;
  }
}
