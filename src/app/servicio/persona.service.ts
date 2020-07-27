import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class PersonaService {

  constructor(private httpClient: HttpClient) { }
  obtenerTodasLasPersonas(){

  }
  
  agregarPersona(persona:any){
  
  }
  
  eliminarPersona(identificador){
    
  }
}

