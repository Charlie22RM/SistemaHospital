import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consultorio } from 'src/app/models/consultorio';

@Component({
  selector: 'app-editar-consultorio',
  templateUrl: './editar-consultorio.component.html',
  styleUrls: ['./editar-consultorio.component.css']
})
export class EditarConsultorioComponent implements OnInit {
  
  public consultorio!: Consultorio;
  constructor( private router: Router,private activatedRoute: ActivatedRoute) {}


  ngOnInit(){
    this.consultorio= this.activatedRoute.snapshot.params['consultorio_id'];
    console.log(this.consultorio);
  }

  regresar() {
    this.router.navigate(['/administrador']);
  }
}
