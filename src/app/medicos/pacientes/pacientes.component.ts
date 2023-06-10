import { Component } from '@angular/core';

export interface DatosPacientes{
  cedula: string;
  nombre: string;
  apellido: string;
  direccion: string;
}

const ELEMENT_DATA: DatosPacientes[] = [

];
@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent {

  displayedColumns: string[] = ['cedula', 'nombre', 'apellido', 'direccion'];
  dataSource = ELEMENT_DATA;

}