import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { HistorialClinicoComponent } from './historial-clinico.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';




@NgModule({
  declarations: [
    HistorialClinicoComponent
  ],
  imports: [
    CommonModule,
    NgFor,
    AngularMaterialModule,
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatGridListModule
  ]
})
export class HistorialClinicoModule { }
