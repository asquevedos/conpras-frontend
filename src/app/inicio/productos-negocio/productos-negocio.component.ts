import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NegocioService } from '../../Core/Servicios/negocio.service';
import {Producto} from '../../models/producto';

@Component({
  selector: 'app-productos-negocio',
  templateUrl: './productos-negocio.component.html',
  styleUrls: ['./productos-negocio.component.css']
})
export class ProductosNegocioComponent implements OnInit {
  productos: Producto[] = [];
  public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
}
variable = true;
  constructor(
    private routers: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private negocio_service: NegocioService
  ) { }

  ngOnInit(): void {
    this.negocio_service.ver_productos(this.routers.snapshot.params.id_tienda).subscribe(res =>{
        console.log(res);
        this.productos = res;
        this.variable = false;

    });


  }
  add_cart(id){

  }

}
