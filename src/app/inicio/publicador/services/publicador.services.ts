import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { DetalleEnvioMensaje } from 'src/app/models/detalle-envio-mensaje';
import { Usuario } from 'src/app/models/usuario';
import { DetallePlan } from 'src/app/models/detalle-plan';
import { GLOBAL} from '../../../Core/global-services';
import { Negocio} from '../../../models/negocio';
import {Producto} from '../../../models/producto';





@Injectable({
  providedIn: "root",
})
export class PublicadorServices {
  url = GLOBAL.url;
  
  constructor(private http: HttpClient
    
    ) {

  }
  private urlEndPoint: string = this.url + "api"; 

 

  ver_negocios(iduser): Observable<Negocio[]> {
    return this.http.get<Negocio[]>(
      `${this.urlEndPoint}/publicador/negocios/${iduser}`
    );
  }
  Guardar(negocio: Negocio): Observable<Negocio> {
    return this.http.post(this.urlEndPoint +'/publicador/negocio', negocio).pipe(
      map((response: any) => response.negocio as Negocio),
      catchError((e) => {
        if (e.status == 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }
}




   /* return this.http.post<Negocio[]>(
      `${this.urlEndPoint}/publicador//${iduser}`
    );
  }
 /* ver_productos(id_tienda): Observable<Producto[]> {
    return this.http.get<Producto[]>(
      `${this.urlEndPoint}/compras/productos/${id_tienda}`
    );
  }*/

 /* productos_busqueda(texto_busqueda: string, page: number): Observable<any> {
    return this.http.get(
      `${this.urlEndPoint}/compras/filtrar/productos/${page}/${texto_busqueda}`)
      .pipe(
        tap((response: any) => {
          console.log("ClienteService: tap 1");
          (response.content as Producto[]).forEach((productos) =>
            console.log("")
          );}),
          map((response: any) => {
            (response.content as Producto[]).map((productos) => {
             // cliente.nombre = cliente.nombre.toUpperCase();
              return productos;
            });
            return response;
          }),
          tap((response) => {
            console.log("ClienteService: tap 2");
            (response.content as Producto[]).forEach((productos) =>
            console.log("")
            );
          })
        );
    
  }*/


