import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  length : number = 0;
  constructor(public prs : ProductsService,private ruta : Router) {
    if(!localStorage.getItem('user')){
      this.ruta.navigate(['']);
    }
  }
  editar(cod:string){
    this.ruta.navigate(['productUpdate']);
  }
  eliminar(cod:string){
    this.prs.eliminar(cod);
  }
  
  sincronizar(){
    this.ruta.navigate(['sincronizar']);
  }
  
  insertar(){
    this.ruta.navigate(['productInsert']);

  }
  ngOnInit(): void {
  }

}
