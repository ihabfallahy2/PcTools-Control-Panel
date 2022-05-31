import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-sincronizar',
  templateUrl: './sincronizar.component.html',
  styleUrls: ['./sincronizar.component.css']
})
export class SincronizarComponent implements OnInit {

  constructor(public prs : ProductsService,private ruta : Router) { 
    if(!localStorage.getItem('user')){
      this.ruta.navigate(['']);
    }
  }

  sinc(){
    this.prs.sync();
  }

  ngOnInit(): void {
  }

}
