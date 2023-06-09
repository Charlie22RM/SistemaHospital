import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial-clinico',
  templateUrl: './historial-clinico.component.html',
  styleUrls: ['./historial-clinico.component.css']
})
export class HistorialClinicoComponent {

  tipoEnfermedades: string = '';
  enfermedades: string[] = ['Diabetes', 'Enfermedades Tiroideas', 'Hipertensión Arterial', 'Cardiopatías', 'Traumatismos', 'Cancer', 'Otros'];

  constructor(private router: Router) {}

  crearcuenta() {

  }

  regresar() {
    this.router.navigate(['/login']);
  }



}