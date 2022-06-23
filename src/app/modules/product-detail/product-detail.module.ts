import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modules
import { ProductDetailRoutingModule } from './routes/product-detail-routing/product-detail-routing.module';

//componentes
import { ProductDetailComponent } from './page/product-detail/product-detail.component';

@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductDetailRoutingModule
  ]
})
export class ProductDetailModule { }
