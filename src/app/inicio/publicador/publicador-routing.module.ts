import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';
import { IniciopublicadorComponent } from './iniciopublicador/iniciopublicador.component';
import { MisnegociosComponent } from './misnegocios/misnegocios.component';


const routes: Routes = [
  {
  path: '',
  component: IniciopublicadorComponent,
  children: [

    {
        path: 'misnegocio',
        component: MisnegociosComponent,
     },]}
  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class PublicadorRoutingModule { }
