import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import {ClienteRoutingModule} from './cliente-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ClienteRoutingModule
  ],
  declarations: [
    ClienteComponent
  ]
})
export class ClienteModule { }
