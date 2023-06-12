import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador.component';
import { ListarConsultoriosComponent } from './listar-consultorios/listar-consultorios.component';
import { EditarConsultorioComponent } from './editar-consultorio/editar-consultorio.component';
import { AgregarConsultorioComponent } from './agregar-consultorio/agregar-consultorio.component';
import { ListarMedicosComponent } from './listar-medicos/listar-medicos.component';
import { AgregarMedicoComponent } from './agregar-medico/agregar-medico.component';
import { EditarMedicoComponent } from './editar-medico/editar-medico.component';

const routes: Routes = [
  {
    path: '',
    component: AdministradorComponent,
    children: [
      { path: '', component: ListarConsultoriosComponent },
      {
        path: 'editar-consultorio/:consultorio_id',
        component: EditarConsultorioComponent,
      },
      { path: 'agregar-consultorio', component: AgregarConsultorioComponent },
      { path: 'listar-medicos', component: ListarMedicosComponent },
      { path: 'agregar-medico', component: AgregarMedicoComponent },
      { path: 'editar-medico', component: EditarMedicoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorRoutingModule {}
