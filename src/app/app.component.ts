import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import {ProductosService} from './servicio/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formulario:FormGroup;
   title = 'ProyectoAngularCursoForm';

   constructor(private frmBuilder:FormBuilder){
      this.formulario= this.frmBuilder.group({
        Name: ['Name for default', Validators.required],
        Email: ['Email@fordefault', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]], 
        Adress: ['Adress for default', Validators.required],
        City: ['City for default', Validators.required],
        State: ['State for default', Validators.required],
        Country: ['Country for default', Validators.required],
        PhoneNumber: ['Phone Number for default', Validators.required],
        MobileNumber: ['Mobile Number  for default', Validators.required]
      })

      
   }
  
   onSubmit(parametro){
    console.log(parametro);
  }
}
