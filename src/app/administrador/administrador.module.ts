import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from './administrador.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [AdministradorComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class AdministradorModule { }
