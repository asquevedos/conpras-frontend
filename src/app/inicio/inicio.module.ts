import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from './inicio-routing.module';
import { HeaderComponent } from './header/header.component';
import { NegociosComponent } from './negocios/negocios.component';
import { ProductosNegocioComponent } from './productos-negocio/productos-negocio.component';
import { ProductoConsultaComponent } from './producto-consulta/producto-consulta.component';
import { HomeComponent } from './home/home.component';
import {CardModule} from 'primeng/card';
import {PaginatorModule} from 'primeng/paginator';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ButtonModule} from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IndexComponent } from './index/index.component';




@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    NegociosComponent,
    ProductosNegocioComponent,
    ProductoConsultaComponent,
    IndexComponent
    
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    CardModule,
    PaginatorModule,
    SplitButtonModule,
    ButtonModule,
    InputTextModule
    
   
    
  ], 
  
  
})
export class InicioModule { }
