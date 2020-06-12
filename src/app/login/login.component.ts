import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { Usuario } from '../models/usuario';
import Swal from 'sweetalert2';




@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  titulo: string = "Por favor Sign In!";
  usuario: Usuario;
  form: FormGroup;
  cargado = false;
 

  constructor(private authService: AuthService, private router: Router, private _formBuilder: FormBuilder) {
    this.usuario = new Usuario();
    this.formulario();
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl("/inicio/home");
      Swal.fire(
        "Login",
        `Hola ${this.authService.usuario.username} ya estás autenticado!`,
        "info"
      );
      
    }

  

  }
  private formulario(){
    this.form = this._formBuilder.group({
      mail: ['',[Validators.required]],
      password: ['',[Validators.required]],
     
    });
  }

  login(event: Event): void {
    //this.router.navigate(["/inicio"]);
    this.cargado = true;
    event.preventDefault();
    
    if(this.form.valid){

    this.usuario.username = this.form.value.mail;
    this.usuario.password = this.form.value.password;
    this.authService.login(this.usuario).subscribe(
      (response) => {
        

        this.authService.guardarUsuario(response.access_token);
        this.authService.guardarToken(response.access_token);
        let usuario = this.authService.usuario;
        //this.router.navigate(["/home/"]);
       // this.router.navigate(['/inicio/home']);
        this.router.navigate(["/inicio"]);

        Swal.fire(
          "Login",
          `Hola ${usuario.username}, has iniciado sesión con éxito!`,
          "success"
        );
        this.cargado = false;
      },
      (err) => {
       
        if (err.status == 400) {
          Swal.fire("Error Login", "Usuario o clave incorrectas!", "error");
        }
        if (err.status == 0) {
          Swal.fire("Servicio", "Nod Disponible", "error");
        }
        this.cargado = false;
      });
      
  }
}
}
