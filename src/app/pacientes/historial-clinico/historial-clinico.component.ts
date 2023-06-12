import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-historial-clinico',
  templateUrl: './historial-clinico.component.html',
  styleUrls: ['./historial-clinico.component.css']
})
export class HistorialClinicoComponent {
  enfermedades = this._formBuilder.group({
    diabetes: false,
    enf_tiroideas: false,
    hip_arterial: false,
    cardiopatias: false,
    traumatismos: false,
    cancer: false,
    otros: false

  })

  constructor(private router: Router, private _formBuilder: FormBuilder) { }
}