import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Consultorio } from 'src/app/models/consultorio';

@Component({
  selector: 'app-editar-consultorio',
  templateUrl: './editar-consultorio.component.html',
  styleUrls: ['./editar-consultorio.component.css'],
})
export class EditarConsultorioComponent implements OnInit {
  validateFrm!: FormGroup;
  public consultorio!: Consultorio;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.consultorio = this.activatedRoute.snapshot.params['consultorio_id'];
    console.log(this.consultorio);
    this.validateFrm = this.fb.group({
      especialidad: [null, [Validators.required]],
    });
  }

  regresar() {
    this.router.navigate(['/administrador']);
  }
}
