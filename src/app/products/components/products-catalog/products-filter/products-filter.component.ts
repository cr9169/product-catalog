import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../models/product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-filter',
  imports: [FormsModule],
  templateUrl: './products-filter.component.html',
  styleUrl: './products-filter.component.scss',
})
export class ProductsFilterComponent {
  @Input()
  products!: Product[];

  @Output()
  categorySelected = new EventEmitter<string>();

  selectedCategory: string = '';

  get uniqueCategories() {
    return [...new Set(this.products.map((product) => product.category))];
  }

  onSelectCategory() {
    this.categorySelected.emit(this.selectedCategory);
  }
}
