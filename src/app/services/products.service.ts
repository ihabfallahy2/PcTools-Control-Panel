import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  ntt: Producto[] = [];
  nti: Producto[] = [];
  ntf: Producto[] = [];
  length : number = 0;


  constructor(private http : HttpClient) {
    this.http.get<any>("http://localhost/apis/crud/products.php").subscribe((data) => {
        for (let elemento of data) {
          this.ntt.push(elemento);
        }
      });
    
      this.http.get<any>("https://productos-pctools-default-rtdb.firebaseio.com/productos.json").subscribe((data) => {
        for (let elemento of data) {
          this.ntf.push(elemento);
        }
      });
   }

   selectWithCod(cod : any){
    this.http.get<any>("http://localhost/apis/crud/products.php?cod="+cod).subscribe((data) => {
      for (let elemento of data) {
        this.nti.push(elemento);
      }
    });
   }

   eliminar(cod : any){
    this.http.get<any>("http://localhost/apis/crud/eliminarProducto.php?cod="+cod).subscribe((data) => {
      console.log(data);
    });
   }

   sync(){
    this.http.put<any>('https://productos-pctools-default-rtdb.firebaseio.com/productos.json', this.ntt)
    .subscribe(data => {
      if(data.length > 0){
        console.log("status -> " + true)
        location.reload();
      }
    });
   }
}
