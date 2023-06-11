import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http: HttpClient) { }

  public getAllNames(){
    let url = `${environment.apiUrl}consultorios/medicos/nombres`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return lastValueFrom(this.http.get<any>(url, options));
  }

  public getAll(){
    let url = `${environment.apiUrl}medicos`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return this.http.get<any>(url, options);
  }
}
