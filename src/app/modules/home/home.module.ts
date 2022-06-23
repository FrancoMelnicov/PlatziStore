import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modules
import { HomePageRoutingModule } from './routes/home-page-routing/home-page-routing.module';

//components
import { HomePageComponent } from './page/home-page/home-page.component';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
