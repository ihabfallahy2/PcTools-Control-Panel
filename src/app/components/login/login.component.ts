import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public ruta:Router,public user : UsersService,private http : HttpClient) { }


  login(user:HTMLInputElement,pass:HTMLInputElement){
    console.log(user.value,pass.value);
    this.http.get<any>("http://localhost/apis/login.php?username=" + user.value + "&password=" + pass.value).subscribe((data) => {    
      localStorage.setItem('user', data.user); 
    });

    if(user.value == localStorage.getItem('user')){this.ruta.navigate(['products'])}
  }

  ngOnInit(): void {
  }

}
