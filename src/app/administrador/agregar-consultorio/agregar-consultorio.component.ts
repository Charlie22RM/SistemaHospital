import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-consultorio',
  templateUrl: './agregar-consultorio.component.html',
  styleUrls: ['./agregar-consultorio.component.css'],
})
export class AgregarConsultorioComponent implements OnInit {
  validateFrm!: FormGroup;
  opcionesMedicos = [
    { id: 1, label: 'Pepe' },
    { id: 2, label: 'Juan' },
    { id: 3, label: 'Alexa' },
  ];
  constructor(private router: Router, private fb: FormBuilder) {}
  ngOnInit() {
    this.validateFrm = this.fb.group({
      especialidad: [null, [Validators.required]],
      medico: [null, [Validators.required, this.validateSeleccionEspecialidad]],
    });
  }

  validateSeleccionEspecialidad(control: AbstractControl) {
    if (control.value === null || control.value === '') {
      return { required: true };
    }
    return null;
  }

  submitForm() {
    if (this.validateFrm.valid) {
      this.addConsultorio(this.validateFrm.value);
    } else {
      Object.values(this.validateFrm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  addConsultorio(formData: any) {
    const medicoSeleccionada = this.validateFrm.value.medico;
      console.log('Medico seleccionado:', medicoSeleccionada);
      console.log(formData);
  }

  regresar() {
    this.router.navigate(['/administrador']);
  }
}
