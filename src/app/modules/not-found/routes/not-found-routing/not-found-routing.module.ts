import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//components
import { NotFoundComponent } from '../../page/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', component: NotFoundComponent
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
export class NotFoundRoutingModule { }
