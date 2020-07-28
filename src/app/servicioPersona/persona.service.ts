import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private httpClient: HttpClient) {

   }

   obtenerTodasLasPersonas(): Observable<any>{
     return this.httpClient.get("http://localhost:3000/");
   }

   agregarPersona(persona:any){
    let json = JSON.stringify(persona);
    let headers = new HttpHeaders().set('Content-Type','applicaton/json')
    console.log(json)
    return this.httpClient.post("http://localhost:3000/persona",json,{headers:headers});
  }

  eliminarPersonas(identificador): Observable<any>{
    return this.httpClient.delete("http://localhost:3000/"+identificador);
  }
}
