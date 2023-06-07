import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AgendarCitaComponent } from './agendar-cita.component';
import { AgendarCitaRoutingModule } from './agendar-cita.routing.module';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AgendarCitaComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AgendarCitaRoutingModule

  ]
})
export class AgendarCitaModule { }
