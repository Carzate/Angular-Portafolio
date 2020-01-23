import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: any[] = [];

  constructor( private http: HttpClient) {

    this.cargarProductos();

  }

  private cargarProductos() {

    this.http.get('https://angular-portafolio-69137.firebaseio.com/productos_idx.json').subscribe( (resp: any ) => {
    this.productos =  resp;
    this.cargando = false;
    });

  }

  getProducto (id: string){

    return this.http.get(`https://angular-portafolio-69137.firebaseio.com/productos/${ id }.json`)

  }


  }
