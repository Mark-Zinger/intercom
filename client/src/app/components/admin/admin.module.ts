import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { AdminComponent } from './admin.component';
import {MaterialUiModule} from "../../material-ui/material-ui.module";


@NgModule({
  declarations: [
    HeaderComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialUiModule
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
