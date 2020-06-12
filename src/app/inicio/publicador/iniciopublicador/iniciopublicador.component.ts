import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';
import {Negocio} from '../../../models/negocio' ;
import { PublicadorServices } from '../services/publicador.services';
import swal from "sweetalert2";
import {MenuItem} from 'primeng/api';



@Component({
  selector: 'app-iniciopublicador',
  templateUrl: './iniciopublicador.component.html',
  styleUrls: ['./iniciopublicador.component.css']
})
export class IniciopublicadorComponent implements OnInit {
  
  items2: MenuItem[];
  activeItem: MenuItem;
  cargado = false;
  
  displayDialog: boolean;


  constructor( ) { }

  ngOnInit(): void {
    

  this.items2 = [
    {label: 'Home', icon: 'pi pi-fw pi-home'},
    {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
    {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
    {label: 'Documentation', icon: 'pi pi-fw pi-file'},
    {label: 'Settings', icon: 'pi pi-fw pi-cog'}
];



  }

  
}
