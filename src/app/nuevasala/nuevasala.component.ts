import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevasala',
  templateUrl: './nuevasala.component.html',
  styleUrls: ['./nuevasala.component.css']
})
export class NuevasalaComponent implements OnInit {

  API_ENDPOINT ='http://127.0.0.1:8000/api';

  salasForm = new FormGroup({
    descripcion: new FormControl(null,Validators.required),
    capacidad: new FormControl(null,Validators.required)
  })

  Salas!: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  guardarSala(form: any){
    if(form.descripcion!=null && form.capacidad!=null){

      this.httpClient.post<any>(`${this.API_ENDPOINT}/guardarnuevasala?descripcion=${form.descripcion}&capacidad=${form.capacidad}`, form.descripcion).subscribe((data:any)=>{
        this.Salas = data;
        });
    
        window.alert("Sala guardada con exito");
        this.salasForm.reset(); 

    }else{
      window.alert("Error, verifique la información");
    }
  }


}
