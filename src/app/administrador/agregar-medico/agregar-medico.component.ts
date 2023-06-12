import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-agregar-medico',
  templateUrl: './agregar-medico.component.html',
  styleUrls: ['./agregar-medico.component.css']
})
export class AgregarMedicoComponent implements OnInit{
  validateFrm!: FormGroup;
  durationInSeconds = 5;
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private router: Router,
    private fb: FormBuilder,
  
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.validateFrm= this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      cedula: [null, [Validators.required]],
      nombre: [null, [Validators.required]],
      apellido: [null, [Validators.required]],
      direccion: [null, [Validators.required]],
    });
  }
  

  submitForm(){
 
  }


  crearcuenta() {
    
  }

  

  regresar() {
    this.router.navigate(['/administrador/listar-medicos']);
  }
}
