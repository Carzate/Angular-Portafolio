import { Component } from '@angular/core';
import { infoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public infoPaginaService: infoPaginaService,
               public ProductosService: ProductosService ) {

  }


}
