import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Salas } from '../interfaces/salas';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-reservarsala',
  templateUrl: './reservarsala.component.html',
  styleUrls: ['./reservarsala.component.css']
})
export class ReservarsalaComponent implements OnInit {

  API_ENDPOINT ='http://127.0.0.1:8000/api';
  ListaSalas!: Salas[];
  
  SalaDisp!: Salas[];

  minutosIniciales:any;
  minutosFinales:any;

  Salas: Salas={
    idsala: 1,
    descripcion: "",
    capacidad: 0
  };

  salasForm = new FormGroup({
    fechaReservacion: new FormControl(null,Validators.required),
    horaInicial: new FormControl(null,Validators.required),
    minutoInicial: new FormControl(null,Validators.required),
    horaFinal: new FormControl(null,Validators.required),
    minutoFinal: new FormControl(null,Validators.required),
    npersonas: new FormControl(null,Validators.required)
  })

  nombre  = localStorage.getItem("nombre");

  constructor(private httpClient: HttpClient) { 
    this.httpClient.post<any>(`${this.API_ENDPOINT}/liberarsalaautomatico`, this.Salas.idsala).subscribe((data:any)=>{
              this.Salas = data;
    }); //Funciona como un triger de base de datos

    this.httpClient.get(this.API_ENDPOINT + '/versalas').subscribe((data:any)=>{
      this.ListaSalas = data;
    });
  }

  ngOnInit(): void {
  }

  reservarSala(form: any){
    if(form.horaInicial!=null && form.minutoInicial!=null && form.horaFinal!=null && form.minutoFinal!=null && form.npersonas!=null){
      this.minutosIniciales = form.horaInicial*60 + form.minutoInicial;
      this.minutosFinales = form.horaFinal*60 + form.minutoFinal;

      if(this.minutosFinales-this.minutosIniciales <=120){
        
        this.httpClient.get(this.API_ENDPOINT + '/verdisponibilidad?idsala=' + this.Salas.idsala + '&fechareservacion=' + form.fechaReservacion +
        '&horainicio=' + form.horaInicial + '&minutoinicio=' + form.minutoInicial + '&horafin=' + form.horaFinal + '&minutofin=' + form.minutoFinal).subscribe((data:any)=>{
          this.SalaDisp = data;
          console.log(this.SalaDisp);
          if(data[0]=='Disponible'){
            
            this.httpClient.post<any>(`${this.API_ENDPOINT}/guardarreservacion?idsala=${this.Salas.idsala}&fechareservacion=${form.fechaReservacion}&horainicio=${form.horaInicial}
            &minutoinicio=${form.minutoInicial}&horafin=${form.horaFinal}&minutofin=${form.minutoFinal}&npersonas=${form.npersonas}&cliente=${this.nombre}`, form.descripcion).subscribe((data:any)=>{
              this.Salas = data;
              });
              
              window.alert("Sala guardada con exito");
              this.salasForm.reset(); 

          }else{
            window.alert("Error Sala Ocupada Verifique Disponibilidad");
          }
        });
        
      }else{
        window.alert("La sala solo se puede reservar máximo por 2 horas");
      }
    }else{
      window.alert("LLene toda la información");
    }

    
  }

}
