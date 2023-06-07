import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';


interface Consultorio {
  value: string;
  viewValue: string;
}

interface Horario {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class AgendarCitaComponent {
  consultorios: Consultorio[] = [
    { value: 'conslt-medicina', viewValue: 'Medicina General' },
    { value: 'conslt-odontologia', viewValue: 'Odontología' },
    { value: 'conslt-pediatria', viewValue: 'Pediatría' },
    { value: 'conslt-cardiologia', viewValue: 'Cardiología' },
    { value: 'conslt-oftamologia', viewValue: 'Oftamología' },
    { value: 'conslt-neurocirugia', viewValue: 'Neurocirugía' },
    { value: 'conslt-fisioterapia', viewValue: 'Fisioterapia' },
    { value: 'conslt-nutricion', viewValue: 'Nutrición' },
    { value: 'conslt-infectologia', viewValue: 'Infectología' },
    { value: 'conslt-reumotologia', viewValue: 'Reumatología' },

  ];

  horarios: Horario[] = [
    { value: 'horario1', viewValue: '06:00 am - 12:00 am' },
    { value: 'horario2', viewValue: '13:00 pm - 18:00 pm' },
    { value: 'horario3', viewValue: '20:00 pm - 23:59 pm' },

  ];
}

