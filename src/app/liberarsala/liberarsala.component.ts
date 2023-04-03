import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { SalasR } from '../interfaces/SalasR';


@Component({
  selector: 'app-liberarsala',
  templateUrl: './liberarsala.component.html',
  styleUrls: ['./liberarsala.component.css']
})
export class LiberarsalaComponent implements OnInit {

  API_ENDPOINT ='http://127.0.0.1:8000/api';
  ListaSalas!: SalasR[];

  DatosSala!: SalasR[];

  Salas: SalasR={
    idsala: 1,
    estado: 0,
    diareservacion: "",
    horainicio: 0,
    minutoinicio: 0,
    horafin: 0,
    minutofin: 0,
    npersonas: 0,
    cliente: "",
    idreservacion: 0
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
    this.httpClient.get(this.API_ENDPOINT + '/versalasreservadasusuario?usuario=' + this.nombre).subscribe((data:any)=>{
      this.ListaSalas = data;
      console.log(this.ListaSalas);
    });
  }

  ngOnInit(): void {
  }

  reservarSala(form: any){
    if(this.Salas.idreservacion!=null){

      this.httpClient.post<any>(`${this.API_ENDPOINT}/liberarsala?idreservacion=${this.Salas.idreservacion}`, form.descripcion).subscribe((data:any)=>{
        this.Salas = data;
        });
        
    
        window.alert("Sala Liberada Con Exito");
        this.salasForm.reset(); 
        window.location.reload();
    }
  }

  InfoSala(){
    this.httpClient.get(this.API_ENDPOINT + '/verinformacionsalareservada?idreservacion=' + this.Salas.idreservacion ).subscribe((data:any)=>{
      this.DatosSala = data;
      this.salasForm.controls['fechaReservacion'].setValue(data[0]);
      this.salasForm.controls['horaInicial'].setValue(data[1]);
      this.salasForm.controls['minutoInicial'].setValue(data[2]);
      this.salasForm.controls['horaFinal'].setValue(data[3]);
      this.salasForm.controls['minutoFinal'].setValue(data[4]);
      this.salasForm.controls['npersonas'].setValue(data[5]);
    });
  }
}
