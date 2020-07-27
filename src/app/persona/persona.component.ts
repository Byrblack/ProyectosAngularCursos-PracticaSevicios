import { Component, OnInit } from '@angular/core';
import {PersonaService} from '../servicio/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  agregarPersonaRegistro:any={Nombre:'', Apellido:'',Edad:10};
  
  constructor(private perosnaService: PersonaService) { }

  ngOnInit(): void {
  }

  eliminarPersona(identificador){
    console.log("evento persona");
  }

  agregarPersona(){
    console.log("agregar personas");
  }

}
