import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../models/product.model';
import { map, Observable, switchMap } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Box, LucideAngularModule, Star } from 'lucide-angular';

@Component({
  selector: 'app-product-details',
  imports: [AsyncPipe, LucideAngularModule, RouterLink, CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  product$!: Observable<Product>;

  readonly StarIcon = Star;
  readonly BoxIcon = Box;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.product$ = this.route.paramMap.pipe(
      map((params) => Number(params.get('id'))),
      switchMap((id) => this.productService.getProductById(id))
    );
  }
}
