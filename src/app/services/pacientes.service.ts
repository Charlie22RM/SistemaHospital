import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private http: HttpClient) { }

  public getAll() {
    let url = `${environment.apiUrl}user/pacientes`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return this.http.get<any>(url, options);
  }
}
