import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-paginas.intrface';


@Injectable({
  providedIn: 'root'
})

export class infoPaginaService {

  info: infoPagina = {};
  cargada: boolean= false;



  constructor( private http: HttpClient){

    // console.log('Servicio de infopagina listo');

    //Leer el archivo JSON
    this.http.get('assets/data/data-pages.json').subscribe( (resp: infoPagina) => {

        this.cargada = true;
        this.info = resp;
        console.log(resp);

      });

  }
}
