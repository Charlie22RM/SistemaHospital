import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  validateFrm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateFrm = this.fb.group({
      email: [null, [Validators.required,Validators.email]],
      password: [null, [Validators.required]],
    });
  }


  submitForm(){
    if(this.validateFrm.valid){
      this.ingresar();
    }else {
      Object.values(this.validateFrm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  ingresar() {
    console.log('prueba');
  }

  registrar() {
    this.router.navigate(['/register']);
  }
}