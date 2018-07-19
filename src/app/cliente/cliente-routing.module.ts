import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClienteComponent} from './cliente.component';

const ROUTES: Routes = [
  { path: '', component: ClienteComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ]
})
export class ClienteRoutingModule { }
