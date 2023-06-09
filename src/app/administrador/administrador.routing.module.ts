import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador.component';
import { ListarConsultoriosComponent } from './listar-consultorios/listar-consultorios.component';
import { EditarConsultorioComponent } from './editar-consultorio/editar-consultorio.component';
import { AgregarConsultorioComponent } from './agregar-consultorio/agregar-consultorio.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorRoutingModule {}
