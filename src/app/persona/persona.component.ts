import { Component, OnInit } from '@angular/core';
import {PersonaService} from '../servicioPersona/persona.service';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  agregarPersonaRegistro:any={_id:'',Nombre:'', Apellido:'',Edad:'',isProfesional:true};
  personas:any;

  constructor(private personaService: PersonaService) { 
    this.obternerPersonas();
    
  }

  ngOnInit(): void {
  }

  obternerPersonas(){
    this.personaService.obtenerTodasLasPersonas().subscribe(resultado=>{
      this.personas= resultado.personas;
    },error =>{
        console.log(JSON.stringify(error));
    })
  }

  eliminarPersona(identificador){
    console.log("evento persona");
  }

  agregarPersona(){
    this.personaService.agregarPersona(this.agregarPersonaRegistro).subscribe(
      resultado=>{
          this.obternerPersonas();
      },error=>{
        console.log("Error en agregar persona")
      }
    )
  }


}
