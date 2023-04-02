import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route:Router) { }

  rol  = localStorage.getItem("rol");
  nombre  = localStorage.getItem("nombre");
  
  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    this.rol="";
    this.route.navigate(['login']).then(()=>{
      window.location.reload();
    });
  }

}
