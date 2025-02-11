import { Component } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-products-catalog',
  imports: [ProductCardComponent, AsyncPipe],
  templateUrl: './products-catalog.component.html',
  styleUrl: './products-catalog.component.scss',
})
export class ProductsCatalogComponent {
  products$!: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products$ = this.productService.getAllProducts();
  }
}
