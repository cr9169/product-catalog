import { Routes } from '@angular/router';
import { ProductsCatalogComponent } from './products/components/products-catalog/products-catalog.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductsCatalogComponent,
      },
      {
        path: ':id',
        component: ProductDetailsComponent,
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
