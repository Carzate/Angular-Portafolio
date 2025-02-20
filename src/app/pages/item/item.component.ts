import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  Producto: ProductoDescripcion;
  id: string;

  constructor( private route:ActivatedRoute,
               public ProductosService: ProductosService ) { }

  ngOnInit() {

    this.route.params
    .subscribe( parametros => {

      // console.log( parametros.id );
      this.ProductosService.getProducto(parametros['id'])
        .subscribe( (producto: ProductoDescripcion  )=> {
          this.id = parametros['id'];
          this.Producto = producto;
        })

    });

    }

}
