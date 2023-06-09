import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Consultorio } from 'src/app/models/consultorio';
import { UserDisplay } from 'src/app/models/user';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: UserDisplay[] = [
  {id: 1, email: 'alex@gmail.com', nombre: 'alex', apellido: 'gomwz',direccion:'su casa',rol:1},
  {id: 2, email: 'alex@gmail.com', nombre: 'alex', apellido: 'gomwz',direccion:'su casa',rol:1},
];

@Component({
  selector: 'app-listar-consultorios',
  templateUrl: './listar-consultorios.component.html',
  styleUrls: ['./listar-consultorios.component.css']
})
export class ListarConsultoriosComponent {
  displayedColumns: string[] = ['id', 'email', 'nombre', 'apellido','direccion','actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  filterValue: string = '';
  constructor( private router: Router) {}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editElement(consultorio:Consultorio){
    const consultorio_id = consultorio.id;
    this.router.navigate([
      'administrador/editar-consultorio',
      consultorio_id,
    ]);
  }

  addConsultorio(){
    this.router.navigate(['administrador/agregar-consultorio']);
  }
}
