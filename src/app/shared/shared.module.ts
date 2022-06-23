import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HeaderComponent } from './components/header/header.component';
import { ShopCarComponent } from './components/shop-car/shop-car.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    HeaderComponent,
    ShopCarComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProductCardComponent,
    HeaderComponent,
    ProductsListComponent
  ]
})
export class SharedModule { }
