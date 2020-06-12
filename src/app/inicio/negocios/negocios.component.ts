import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NegocioService} from '../../Core/Servicios/negocio.service';
import {Negocio} from '../../models/negocio';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-negocios',
  templateUrl: './negocios.component.html',
  styleUrls: ['./negocios.component.css']
})
export class NegociosComponent implements OnInit {

  negocios: Negocio[] = [];
  public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);

  }
  variable = true;
  constructor(private routers: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private negocio_service: NegocioService,
    private _route: Router,) { }

  ngOnInit(): void {

    this.negocio_service.ver_negocios(this.routers.snapshot.params.id_negocio).subscribe( res => {
      this.negocios = res;
      console.log(res);
      //console.log(this.negocios);
      this.variable = false;
    });
    
    console.log();
    
    
  }
  visitar_tienda(id_tienda){
    this._route.navigateByUrl('/inicio/productos/' + id_tienda);
  }

}
