import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//components
import { LoginComponent } from '../../pages/login/login.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
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
export class LoginRoutingModule { }
