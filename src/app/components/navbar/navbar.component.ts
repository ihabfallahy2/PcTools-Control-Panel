import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private ruta: Router) { }

  redirect(){
    this.ruta.navigate(['']);
  }

  redirectProd(){
    this.ruta.navigate(['products'])
  }
  redirectUser(){
    this.ruta.navigate(['users'])
  }

  Logou(){
    localStorage.removeItem('user')
    this.ruta.navigate([''])
  }
  

  ngOnInit(): void {
  }

}
