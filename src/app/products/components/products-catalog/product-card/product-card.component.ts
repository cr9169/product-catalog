import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../models/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  constructor() {}

  @Input()
  product!: Product;
}
