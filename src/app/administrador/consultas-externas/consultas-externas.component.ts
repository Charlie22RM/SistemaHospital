import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Consultorio } from 'src/app/models/consultorio';
import { UserDisplay } from 'src/app/models/user';
import { ConsultorioService } from 'src/app/services/consultorio.service';
import { MedicoDisplay } from 'src/app/models/medico';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-consultas-externas',
  templateUrl: './consultas-externas.component.html',
  styleUrls: ['./consultas-externas.component.css'],

})

export class ConsultasExternasComponent implements OnInit {
  data!: Consultorio[];
  displayedColumns: string[] = [
    'id',
    'especialidad',
    'nombre_medico',
    'apellido_medico',
  ];


  dataSource = new MatTableDataSource<Consultorio>();;
  filterValue: string = '';
  constructor(
    private router: Router,
    private consultorioService: ConsultorioService
  ) { }
  ngOnInit(): void {
    this.consultorioService.getAll().subscribe(
      {
        next: async (res) => {
          console.log(res);
          this.data = res;
          this.dataSource = new MatTableDataSource(this.data);
        },
      }
    );
  }



}
