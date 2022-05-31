import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuarios } from '../models/usuarios.models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  ntt: Usuarios[] = [];
  nti: Usuarios[] = [];
  length : number = 0;


  constructor(private http : HttpClient) {
    this.http.get<any>("http://localhost/apis/crud/users.php").subscribe((data) => {
        for (let elemento of data) {
          this.ntt.push(elemento);
        }
      });
   }

   selectWithUser(user:any){
    this.http.get<any>("http://localhost/apis/crud/users.php?user="+user).subscribe((data) => {
      for (let elemento of data) {
        this.nti.push(elemento);
      }
    });
   }

   eliminar(user : any){
    this.http.get<any>("http://localhost/apis/crud/eliminarUsuario.php?user="+user).subscribe((data) => {
      console.log(data);
    });
   }

}
