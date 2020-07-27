import { Component, OnInit } from '@angular/core';
import {PersonaService} from '../servicioPersona/persona.service';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  agregarPersonaRegistro:any={Nombre:'', Apellido:'',Edad:''};
  personas:any;

  constructor() { 

    this.personas=[];
  }

  ngOnInit(): void {
  }

  eliminarPersona(identificador){
    console.log("evento persona");
  }

  agregarPersona(){
    console.log("agregar personas");
  }

}
