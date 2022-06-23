import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modules
import { AuthRoutingModule } from './routes/auth-routing/auth-routing.module';

//components
import { AuthComponent } from './pages/auth/auth.component';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
