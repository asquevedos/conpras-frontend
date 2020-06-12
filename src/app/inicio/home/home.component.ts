import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../../Core/Servicios/mensajes.service';
import { AuthService } from '../../login/auth.service';
import { Usuario } from '../../models/usuario';
import { TipoNegocio} from '../../models/tipo-negocio';
import { NegocioService} from '../../Core/Servicios/negocio.service';
import { Imagen } from '../../models/imagen';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Cadena_busqueda} from '../../Core/Servicios/cadena_busqueda';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario:Usuario;
  tiposNegocios: TipoNegocio[] = [];

  //imagePath;
  //imagen= new Imagen();


variable = true;
  constructor(private mensajeService: MensajesService,
    public authService: AuthService,
    public tipo_negocioservice: NegocioService,
    private sanitizer: DomSanitizer,
    private _route: Router


    ) { }

    public getSantizeUrl(url : string) {
      return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ver_negocios(id_negocio){
    this._route.navigateByUrl('inicio/negocios/' + id_negocio);

  }


  ngOnInit(): void {
   
   // console.log(this.authService.usuario);
    //this.authService.usuario.
    this.usuario=this.authService.usuario;
    /*this.mensajeService.planesActivos(this.usuario)
    .subscribe(res =>{
        console.log(res);
    })*/






    this.tipo_negocioservice.tipo_negocio().subscribe(res =>{
      this.tiposNegocios = res;
      this.variable = false;



    });







  }

}
