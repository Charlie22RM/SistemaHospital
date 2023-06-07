import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  token: string='';
  private tokenSource = new Subject<string>();
  tokenChallange$ = this.tokenSource.asObservable();
  constructor(private ss: SessionService) { 
    if (this.ss.getItem('token') !== '') {
      this.token = this.ss.getItem('token');
      this.tokenSource.next(this.token);
    }
  }

  public setToken(nombre: string) {
    this.token = nombre;
    this.ss.setItem('token', nombre);
    this.tokenSource.next(nombre);
  }
  public delToken() {
    this.token = '';
    this.ss.setItem('token', '');
    this.tokenSource.next('');
  }
  public CerrarSesion(){
    this.delToken();
  }
}
