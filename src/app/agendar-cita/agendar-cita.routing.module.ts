import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendarCitaComponent } from './agendar-cita.component';

const routes: Routes = [
    { path: '', component: AgendarCitaComponent, children: [
    ]  
  },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendarCitaRoutingModule { }