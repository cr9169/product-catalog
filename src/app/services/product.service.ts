import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../products/models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}/${id}`);
  }
}
