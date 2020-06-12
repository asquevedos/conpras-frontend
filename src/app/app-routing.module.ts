import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';


const routes: Routes = [
{
  path:'',
  component: LoginComponent,
  children: [
    {
      path: '', 
      redirectTo: '/',
      pathMatch: 'full',
    },
    
  ]},
  {
    path: 'inicio',
    loadChildren: () => import('../app/inicio/inicio.module').then(m => m.InicioModule)
  }
                  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
