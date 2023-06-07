import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

export interface PeriodicElement {
  turno: number;
  consultorio: string;
  fecha: Date;
  horario: string;
}

const ELEMENT_DATA: PeriodicElement[] = [

];



@Component({
  selector: 'app-cita-agendada',
  templateUrl: './cita-agendada.component.html',
  styleUrls: ['./cita-agendada.component.css']
})
export class CitaAgendadaComponent {

  displayedColumns: string[] = ['turno', 'consultorio', 'fecha', 'horario'];
  dataSource = ELEMENT_DATA;

  formatDate(date: Date): string {
    return date.toLocaleDateString();
  }

}
