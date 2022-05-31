import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios.models';
import { UsersService } from 'src/app/services/users.service';
declare let alertify: any;


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  nti: Usuarios[] = [];

  constructor(private route : ActivatedRoute,public user : UsersService,private http : HttpClient,private ruta : Router) { 
    if(!localStorage.getItem('user')){
      this.ruta.navigate(['']);
    }
    var usuario = this.route.snapshot.paramMap.get("id");

    this.http.get<any>("http://localhost/apis/crud/users.php?user="+usuario).subscribe((data) => {
      for (let elemento of data) {
        this.nti.push(elemento);
      }
    });
  }

  update(user:HTMLInputElement,email:HTMLInputElement,numero:HTMLInputElement,estado:HTMLInputElement,biografia:HTMLInputElement,calle:HTMLInputElement,pueblo:HTMLInputElement,ciudad:HTMLInputElement,pais:HTMLInputElement,nombre_tarjeta:HTMLInputElement,numero_tarjeta:HTMLInputElement,fecha:HTMLInputElement,cvv:HTMLInputElement){
    console.log(user.value,cvv.value)
    this.http.get<any>("http://localhost/apis/crud/updateUser.php?user="+user.value+"&email="+email.value+"&numero="+numero.value+"&estado="+estado.value+"&biografia="+biografia.value+"&calle="+calle.value+"&pueblo="+pueblo.value+"&ciudad="+ciudad.value+"&pais="+pais.value+"&nombre_tarjeta="+nombre_tarjeta.value+"&numero_tarjeta="+numero_tarjeta.value+"&fecha="+fecha.value+"&cvv="+cvv.value).subscribe((data) => {
      if(data == true){
        alertify.success('Successfully Updated');
      }else{
        alertify.error('error message');
      }

      if(data== true) {location.reload()}
    });
  }

  ngOnInit(): void {
  }

}
