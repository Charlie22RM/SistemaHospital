import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(paramsData:any): Observable<any>{
    let url = `${environment.apiUrl}auth/login`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return this.http.post<any>(url,paramsData,options);
  }
}