import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from './administrador.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AdministradorRoutingModule } from './administrador.routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ListarConsultoriosModule } from './listar-consultorios/listar-consultorios.module';




@NgModule({
  declarations: [AdministradorComponent, NavbarComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AdministradorRoutingModule,
    ListarConsultoriosModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class AdministradorModule { }
