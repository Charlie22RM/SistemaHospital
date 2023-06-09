import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarConsultorioComponent } from './editar-consultorio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [EditarConsultorioComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class EditarConsultorioModule { }
