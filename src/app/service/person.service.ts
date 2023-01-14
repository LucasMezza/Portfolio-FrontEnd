import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Person } from '../model/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  URL = 'https://portfolio-backend-production-1688.up.railway.app/persona/';

  constructor(private http:HttpClient) { }

  public getPersonas(): Observable<Person[]>{
    return this.http.get<Person[]>(this.URL + 'lista');
  }

 public getPersona(id: number): Observable<Person>{
    return this.http.get<Person>(this.URL + 'detail/' + id);
 }

  public guardarPersona(persona: Person): Observable<any>{
   return this.http.post(this.URL + 'create', persona);
 }

 public actualizarPersona(id: number , persona: Person): Observable<any>{
  return this.http.put(this.URL + 'update/' + id, persona);
}

public borrarPersona(id: number): Observable<any>{
  return this.http.delete<any>(this.URL + 'delete/' + id);
}
}