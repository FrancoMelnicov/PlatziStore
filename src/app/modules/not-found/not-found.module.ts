import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modules
import { NotFoundRoutingModule } from './routes/not-found-routing/not-found-routing.module';

//components
import { NotFoundComponent } from './page/not-found/not-found.component';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ]
})
export class NotFoundModule { }
