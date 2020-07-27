import { Component, OnInit } from '@angular/core';
import {ProductosService} from '../servicio/productos.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  productos:any;

  constructor(private producosService: ProductosService) {
      this.productos = producosService.productos.rows;
     // console.log(JSON.stringify(this.productos))
   }

  ngOnInit(): void {
  }

}
