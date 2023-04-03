import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SalasR } from '../interfaces/SalasR';


@Component({
  selector: 'app-verreservaciones',
  templateUrl: './verreservaciones.component.html',
  styleUrls: ['./verreservaciones.component.css']
})
export class VerreservacionesComponent implements OnInit {

  API_ENDPOINT ='http://127.0.0.1:8000/api';

  Salas!: SalasR[];

  constructor(private httpClient: HttpClient) {

    this.httpClient.post<any>(`${this.API_ENDPOINT}/liberarsalaautomatico`,1).subscribe((data:any)=>{
      this.Salas = data;
    });//Funciona como un triger de base de datos

    this.httpClient.get(this.API_ENDPOINT + '/versalasreservadas').subscribe((data:any)=>{
      this.Salas = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
