import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'pacientes', loadChildren: () => import('./pacientes/pacientes.module').then(x => x.PacientesModule) },
    { path: 'agendar-cita', loadChildren: () => import('./agendar-cita/agendar-cita.module').then(x => x.AgendarCitaModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }