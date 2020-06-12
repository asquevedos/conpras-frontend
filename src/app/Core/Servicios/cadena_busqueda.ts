import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class Cadena_busqueda {
   private cadena_busqueda: string;
   private cart = new BehaviorSubject(this.cadena_busqueda);
   cart$ = this.cart.asObservable();
   
  constructor() { }



  cadena_busqueda_productos(cadena: string)
  {

     this.cart.next(cadena);
  }
}