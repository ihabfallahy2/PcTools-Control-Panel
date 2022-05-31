import {HttpClient} from "@angular/common/http";
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Producto} from "src/app/models/producto.models";
import {ProductsService} from "src/app/services/products.service";
declare let alertify: any;


@Component({selector: "app-product-update", templateUrl: "./product-update.component.html", styleUrls: ["./product-update.component.css"]})
export class ProductUpdateComponent implements OnInit {
  nti: Producto[] = [];

  constructor(private route : ActivatedRoute, public product : ProductsService, private http : HttpClient,private ruta : Router) {
    if(!localStorage.getItem('user')){
      this.ruta.navigate(['']);
    }
    var cod = this.route.snapshot.paramMap.get("id");

    this.http.get<any>("http://localhost/apis/crud/products.php?cod=" + cod).subscribe((data) => {
      for (let elemento of data) {
        // console.log(elemento);
        this.nti.push(elemento);
      }
    });
  }

  update(cod : HTMLInputElement, descripcion : HTMLInputElement, familia : HTMLInputElement, nombre_corto : HTMLInputElement, pvp : HTMLInputElement) {
    console.log(cod.value, descripcion.value, familia.value, nombre_corto.value, pvp.value);

    this.http.get<any>("http://localhost/apis/crud/updateProducto.php?cod="+cod.value+"&descripcion="+descripcion.value+"&familia="+familia.value+"&nombre_corto="+nombre_corto.value+"&pvp="+pvp.value).subscribe((data) => {
      if(data == true){
        alertify.success('Successfully Updated');
      }else{
        alertify.error('error message');
      }

      if(data== true) {location.reload()}
    });
  }

  ngOnInit(): void {}
}
