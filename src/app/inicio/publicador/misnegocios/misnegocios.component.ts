import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';
import {Negocio} from '../../../models/negocio' ;
import { PublicadorServices } from '../services/publicador.services';
import swal from "sweetalert2";
import {MenuItem} from 'primeng/api';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-misnegocios',
  templateUrl: './misnegocios.component.html',
  styleUrls: ['./misnegocios.component.css']
})
export class MisnegociosComponent implements OnInit {
  negocios: Negocio[] = [];
  cols: any[];
  selectedNegocio: Negocio;
  newNegocio: boolean;
  nego: Negocio = new Negocio();
  public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
}
 
  displayDialog: boolean;
  constructor(private auth_service: AuthService,
    private publicador_services: PublicadorServices,
    private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
     
    
      this.publicador_services.ver_negocios(this.auth_service.usuario.username).subscribe( res =>{
        this.negocios = res;
        console.log(this.negocios);
      });
  
      this.cols = [
        { field: 'avatar.archivoB64', header: 'Imagen' },
        { field: 'nombre', header: 'Nombre' },
        { field: 'direccion', header: 'Direccion' },
        { field: 'celular', header: 'Contacto' }
    ];
  
    
  
  
  
    }
  
    onRowSelect(event) {
      this.newNegocio = false;
      this.nego = this.cloneNegocio(event.data);
      this.displayDialog = true;
  }
  
  cloneNegocio(c: Negocio): Negocio {
   let negocio: Negocio = new Negocio();
    for (let prop in c) {
        negocio[prop] = c[prop];
    }
    return negocio;
  }
  
  showDialogToAdd() {
    this.newNegocio = true;
    this.nego = new Negocio();
    this.displayDialog = true;
  }
  
  save() {
    let negoci = [...this.negocios];
    //console.log(this.nego);
    negoci[this.negocios.indexOf(this.selectedNegocio)] = this.nego;
    this.publicador_services.Guardar(this.nego).subscribe(
      (negocio) => {
        
        swal.fire(
          "Negocio",
          `Fue Modificado con Exito!!!`,
          "success"
        );
      },
      (err) => {
        
        console.error("Error al Modificar " + err.status);
        console.error(err.error.errors);
      }
    );
    
    
  
    this.negocios = negoci;
    this.nego = null;
    this.displayDialog = false;
  }
  
  }
  