import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../login/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Cadena_busqueda } from '../../Core/Servicios/cadena_busqueda';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "App Compras";
  constructor(

    public auth_service: AuthService,
    private router: Router,
    private cadena_busqueda: Cadena_busqueda
    
  ) { }

  ngOnInit(): void {

  }
  off(){
    let username = this.auth_service.usuario.username;
    this.auth_service.logout();
    swal.fire('Logout', `Hola ${username}, has cerrado sesión con éxito!`, 'success');
    this.router.navigate(['/']);

  }

  buscar(){
    
    //this._servicecadenabusqueda.datos($('#text_search').val());
   this.router.navigateByUrl('inicio/resultado_consulta');
   // alert($('#text_search').val());
    this.cadena_busqueda.cadena_busqueda_productos($('#text_search').val());

  }
  inicio(){
    this.router.navigate(['/inicio/home']);

  }

}
