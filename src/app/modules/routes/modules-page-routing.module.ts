import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { ModulesPageComponent } from './../page/modules-page/modules-page.component';

const routes: Routes = [
  {
    path: '', component: ModulesPageComponent, children: [
      
      {
        path: 'product/:id', loadChildren: () => import('../product-detail/product-detail.module').then(m => m.ProductDetailModule)
      },
      {
        path: 'category/:id', loadChildren: () => import('../category/category.module').then(m => m.CategoryModule)
      },
      {
        path: 'notFound', loadChildren: () => import('../not-found/not-found.module').then(m => m.NotFoundModule)
      },
      {
        path: '', loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
      },
      {
        path: '**', redirectTo: 'notFound', pathMatch: 'full'
      }
    ]
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
export class ModulesPageRoutingModule { }
