import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginPerson } from '../model/login-person';
import { NewPerson } from '../model/new-person';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'https://app-portfolio0027.herokuapp.com/auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NewPerson): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginPerson): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }

  public getUsuarioById(id: number): Observable<LoginPerson>{
    return this.httpClient.get<LoginPerson>(this.authURL + 'detail/' + id);
 }

 public getEducaciones(): Observable<LoginPerson[]>{
  return this.httpClient.get<LoginPerson[]>(this.authURL + 'lista');
}

public getUsuarioByName(nombre: string): Observable<NewPerson>{
  return this.httpClient.get<NewPerson>(this.authURL + 'detailname/' + nombre);
}
}