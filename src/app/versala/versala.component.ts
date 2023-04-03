import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Salas } from '../interfaces/salas';
@Component({
  selector: 'app-versala',
  templateUrl: './versala.component.html',
  styleUrls: ['./versala.component.css']
})
export class VersalaComponent implements OnInit {

  API_ENDPOINT ='http://127.0.0.1:8000/api';

  Salas!: Salas[];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get(this.API_ENDPOINT + '/versalas').subscribe((data:any)=>{
      this.Salas = data;
    });
    
  }

  ngOnInit(): void {
  }

}
