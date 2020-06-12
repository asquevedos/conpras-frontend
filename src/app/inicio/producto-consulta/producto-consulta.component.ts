import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NegocioService } from '../../Core/Servicios/negocio.service';
import {Producto} from '../../models/producto';
import { Cadena_busqueda } from '../../Core/Servicios/cadena_busqueda';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-producto-consulta',
  templateUrl: './producto-consulta.component.html',
  styleUrls: ['./producto-consulta.component.css']
})
export class ProductoConsultaComponent implements OnInit {
  productos: Producto[] = [];
  public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
}
texto ="";
paginador: any;
page: number = 0
producto: Producto [] = [];

  constructor(
    private routers: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private negocio_service: NegocioService,
    private cadena_busqueda: Cadena_busqueda
    
  ) { }

  ngOnInit(): void {

    this.cadena_busqueda.cart$.subscribe( cadena_busqueda => {
      this.texto = cadena_busqueda;


      this.negocio_service
      .productos_busqueda(this.texto, 0)
      .pipe(
       
      )
      .subscribe((response) => {
        this.productos = response.content as Producto[];
        this.paginador = response;
        console.log(this.paginador);
        console.log(this.productos);
      });


        /*this.negocio_service.productos_busqueda(cadena_busqueda,0).subscribe(res =>{
          this.producto = res;
          console.log()
        })*/

    })



  }

 

}
