import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modules
import { CategoryRoutingModule } from './routes/category-routing/category-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

//components
import { CategoryComponent } from './page/category/category.component';
@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule
  ]
})
export class CategoryModule { }
