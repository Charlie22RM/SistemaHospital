import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarConsultorioComponent } from './editar-consultorio.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';

@NgModule({
  declarations: [EditarConsultorioComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class EditarConsultorioModule { }
