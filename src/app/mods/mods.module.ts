import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ModalComponent } from './modal/modal.component';
import { ModsRoutingModule } from './mods-routing.module';
import { ModuleHomeComponent } from './module-home/module-home.component';

@NgModule({
  declarations: [
    ModuleHomeComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ModsRoutingModule,
    SharedModule
  ]
})
export class ModsModule { }
