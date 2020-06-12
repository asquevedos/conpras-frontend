import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NegociosComponent } from './negocios/negocios.component';
import { ProductosNegocioComponent } from './productos-negocio/productos-negocio.component';
import { ProductoConsultaComponent } from './producto-consulta/producto-consulta.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
 
{
  
  path: '',
  component: IndexComponent,
   children: [
    {
      path:'home',
        component: HomeComponent
    },
   {
    path:'negocios/:id_negocio',
      component: NegociosComponent
  },
  {
    path:'productos/:id_tienda',
      component: ProductosNegocioComponent
  },
  {
    path:'resultado_consulta',
    component: ProductoConsultaComponent
  },
  {
    path: 'publicador',
    loadChildren: () => import('../inicio/publicador/publicador.module').then(m => m.PublicadorModule)
  }
   
   
    
]},


];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
