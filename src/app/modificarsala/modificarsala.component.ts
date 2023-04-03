import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Salas } from '../interfaces/salas';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-modificarsala',
  templateUrl: './modificarsala.component.html',
  styleUrls: ['./modificarsala.component.css']
})
export class ModificarsalaComponent implements OnInit {

  API_ENDPOINT ='http://127.0.0.1:8000/api';
  ListaSalas!: Salas[];

  DatosSala!: Salas[];

  Salas: Salas={
    idsala: 1,
    descripcion: "",
    capacidad: 0
  };

  salasForm = new FormGroup({
    descripcion: new FormControl(null,Validators.required),
    capacidad: new FormControl(null,Validators.required)
  })

  constructor(private httpClient: HttpClient) { 
    this.httpClient.get(this.API_ENDPOINT + '/versalas').subscribe((data:any)=>{
      this.ListaSalas = data;
    });
  }

  ngOnInit(): void {
  }
  guardarSala(form: any){

    if(form.descripcion!=null && form.capacidad!=null){

      this.httpClient.post<any>(`${this.API_ENDPOINT}/modificarsalas?descripcion=${form.descripcion}&capacidad=${form.capacidad}&idsala=${this.Salas.idsala}`, form.descripcion).subscribe((data:any)=>{
        this.Salas = data;
        });
        
    
        window.alert("Sala Modificada con exito");
        this.salasForm.reset(); 
        window.location.reload();

    }else{
      window.alert("Error, verifique la información");
    }
  }

  cambioSala(){
    this.httpClient.get(this.API_ENDPOINT + '/versalaespecifica?idsala=' + this.Salas.idsala ).subscribe((data:any)=>{
      this.DatosSala = data;
      this.salasForm.controls['descripcion'].setValue(data[0]);
      this.salasForm.controls['capacidad'].setValue(data[1]);
    });
    

  }

}
