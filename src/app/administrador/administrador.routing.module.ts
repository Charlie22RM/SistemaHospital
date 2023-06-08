import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador.component';
import { ListarConsultoriosComponent } from './listar-consultorios/listar-consultorios.component';

const routes: Routes = [
  { path: '', component: AdministradorComponent, children: [
    { path: '', component: ListarConsultoriosComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorRoutingModule {}
