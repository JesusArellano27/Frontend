import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { NuevasalaComponent } from './nuevasala/nuevasala.component';
import { ModificarsalaComponent } from './modificarsala/modificarsala.component';
import { VersalaComponent } from './versala/versala.component';
import { EliminarsalaComponent } from './eliminarsala/eliminarsala.component';
import { ReservarsalaComponent } from './reservarsala/reservarsala.component';
import { VerreservacionesComponent } from './verreservaciones/verreservaciones.component';
import { LiberarsalaComponent } from './liberarsala/liberarsala.component';


const appRoutes:Routes = [  
  {path: 'login', component: LoginComponent},  
  {path: 'home', component: HomeComponent}, 
  {path: 'nsala', component: NuevasalaComponent},
  {path: 'vsala', component: VersalaComponent},  
  {path: 'msala', component: ModificarsalaComponent},
  {path: 'esala', component: EliminarsalaComponent},
  {path: 'resersala', component: ReservarsalaComponent},
  {path: 'verreserva', component: VerreservacionesComponent},
  {path: 'liberarsala', component: LiberarsalaComponent}      
  ];  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    NuevasalaComponent,
    ModificarsalaComponent,
    VersalaComponent,
    EliminarsalaComponent,
    ReservarsalaComponent,
    VerreservacionesComponent,
    LiberarsalaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
