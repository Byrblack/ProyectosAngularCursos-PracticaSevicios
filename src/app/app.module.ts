import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ProductosService} from './servicio/productos.service';
import {PersonaService} from './servicio/persona.service';
import { PrincipalComponent } from './principal/principal.component';
import { PersonaComponent } from './persona/persona.component';
import{HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    ProductosService,
    PersonaService,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }
