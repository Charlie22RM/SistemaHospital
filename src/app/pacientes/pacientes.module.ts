import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PacientesComponent } from './pacientes.component';
import { PacientesRoutingModule } from './pacientes.routing.module';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    PacientesComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    PacientesRoutingModule

  ]
})
export class PacientesModule { }
