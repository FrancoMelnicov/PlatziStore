import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { AuthComponent } from './../../pages/auth/auth.component';

const routes: Routes = [
  {
    path: '', 
    component: AuthComponent,
    children: [
      {
        path: 'login', loadChildren: () => import('../../submodules/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'register', loadChildren: () => import('../../submodules/register/register.module').then(m => m.RegisterModule)
      },
      {
        path: 'recovery', loadChildren: () => import('../../submodules/recovery/recovery.module').then(m => m.RecoveryModule)
      },
      {
        path: '**', redirectTo: 'login', pathMatch: 'full'
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
export class AuthRoutingModule { }