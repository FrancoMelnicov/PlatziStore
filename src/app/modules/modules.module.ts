import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modules
import { ModulesPageRoutingModule } from './routes/modules-page-routing.module';
import { SharedModule } from './../shared/shared.module';

//compoenents
import { ModulesPageComponent } from './page/modules-page/modules-page.component';

@NgModule({
  declarations: [
    ModulesPageComponent
  ],
  imports: [
    CommonModule,
    ModulesPageRoutingModule,
    SharedModule
  ]
})
export class ModulesModule { }
