import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public user : UsersService,private ruta : Router) { 
    if(!localStorage.getItem('user')){
      this.ruta.navigate(['']);
    }
    
    console.log(this.user.ntt)
  }

  editar(user:string){
    console.log(user)
  }
  eliminar(user:string){
    this.user.eliminar(user);
  }
  
  insertar(){
    this.ruta.navigate(['userInsert']);
  }
  ngOnInit(): void {
  }

}
