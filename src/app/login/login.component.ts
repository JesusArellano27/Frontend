import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { users } from '../interfaces/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpClient: HttpClient,private route:Router) { }

  API_ENDPOINT ='http://127.0.0.1:8000/api';

  loginForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  resultado!: users[];

  ngOnInit(): void {
  }

  onlogin(form: any){
    this.httpClient.get(this.API_ENDPOINT + '/login?'+'name=' + form.email + '&password=' + form.password ).subscribe((data:any)=>{
      let rol:string = data[0];
      let nombre:string = data[2];

      localStorage.setItem("rol",rol);//Almacenamiento de información en el localstorage
      localStorage.setItem("nombre",nombre);
      this.resultado = data;

      //Cambio de pantalla dependiendo al usuario logeado, datos recibidos desde el backend
      this.route.navigate([data[1]]).then(()=>{
        window.location.reload();
        if(data[1]=='login')
        window.alert("Datos incorrectos!");
      });
      
    }); 
    
    this.loginForm.reset();
    // window.location.reload()
    
    }

}
