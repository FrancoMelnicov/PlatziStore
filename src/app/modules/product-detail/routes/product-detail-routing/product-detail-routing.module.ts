import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

//components
import { ProductDetailComponent } from './../../page/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '', component: ProductDetailComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductDetailRoutingModule { }
