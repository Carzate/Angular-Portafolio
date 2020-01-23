import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-paginas.intrface';


@Injectable({
  providedIn: 'root'
})

export class infoPaginaService {

  info: infoPagina = {};
  cargada: boolean= false;

  equipo: any[] = [];



  constructor( private http: HttpClient){

    // console.log('Servicio de infopagina listo');

    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo() {

    //Leer el archivo JSON
    this.http.get('assets/data/data-pages.json').subscribe( (resp: infoPagina) => {

      this.cargada = true;
      this.info = resp;

    });
  }

  private cargarEquipo(){

   //Leer el archivo JSON
   this.http.get('https://angular-portafolio-69137.firebaseio.com/equipo.json').subscribe( (resp: any ) => {

    this.equipo = resp;

  });
  }
}
