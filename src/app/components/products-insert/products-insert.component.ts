import {HttpClient} from "@angular/common/http";
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Producto} from "src/app/models/producto.models";
import {ProductsService} from "src/app/services/products.service";
import {FormControl} from "@angular/forms";
declare let alertify: any;


@Component({
  selector: 'app-products-insert',
  templateUrl: './products-insert.component.html',
  styleUrls: ['./products-insert.component.css']
})
export class ProductsInsertComponent implements OnInit {

  nti: Producto[] = [];
  file=new FormControl('')
  file_data:any=''
  ip = "http://localhost/apis/crud/";

  constructor(public product : ProductsService, private http : HttpClient,private ruta : Router) {
    if(!localStorage.getItem('user')){
      this.ruta.navigate(['']);
    }
    var cod = '3DSNG';

    this.http.get<any>("http://localhost/apis/crud/products.php?cod=" + cod).subscribe((data) => {
      for (let elemento of data) {
        this.nti.push(elemento);
      }
    });
  }

  insert(cod : HTMLInputElement, descripcion : HTMLInputElement, familia : HTMLInputElement, nombre_corto : HTMLInputElement, pvp : HTMLInputElement) {
    console.log(cod.value, descripcion.value, familia.value, nombre_corto.value, pvp.value);

    this.http.get<any>("http://localhost/apis/crud/insertProducto.php?cod="+cod.value+"&descripcion="+descripcion.value+"&familia="+familia.value+"&nombre_corto="+nombre_corto.value+"&pvp="+pvp.value).subscribe((data) => {
      if(data == true){
        alertify.success('Successfully Inserted');
        this.subirFoto(nombre_corto.value);
      }else{
        alertify.error('Error Inserting New Data');
      }
    });
  }

  subirFoto(nombre : string){
    window.open("http://localhost/apis/crud/fotoProducto.php?nombre="+nombre);
  }

  ngOnInit(): void {}
}
