import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface DatosPacientes{
  id:number,
  email: string;
  nombre: string;
  apellido: string;
  direccion: string;
}

const ELEMENT_DATA: DatosPacientes[] = [
  {id:1,email:"prueba",nombre:"al",apellido:"casas",direccion:"su casa"},
];
@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent {

  constructor(
    private router: Router,
    ){}
  displayedColumns: string[] = [
    'id',
    'email',
    'nombre',
    'apellido',
    'direccion',
    'actions',
  ];
  dataSource = ELEMENT_DATA;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editElement(){
    this.router.navigate(['/medicos/historial']);
  }
}


