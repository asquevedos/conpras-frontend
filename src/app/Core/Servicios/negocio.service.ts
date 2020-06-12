import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { DetalleEnvioMensaje } from 'src/app/models/detalle-envio-mensaje';
import { Usuario } from 'src/app/models/usuario';
import { DetallePlan } from 'src/app/models/detalle-plan';
import { GLOBAL} from '../global-services';
import { TipoNegocio} from '../../models/tipo-negocio';
import { Negocio} from '../../models/negocio';
import {Producto} from '../../models/producto';


@Injectable({
  providedIn: "root",
})
export class NegocioService {
  url = GLOBAL.url;
  
  constructor(private http: HttpClient
    
    ) {

  }
  private urlEndPoint: string = this.url + "api"; 

  tipo_negocio(): Observable<TipoNegocio[]> {
    return this.http.get<TipoNegocio[]>(
      `${this.urlEndPoint}/compras/tiponegocios/`
    );
  }

  ver_negocios(id_negocio): Observable<Negocio[]> {
    return this.http.get<Negocio[]>(
      `${this.urlEndPoint}/compras/tiponegocios/${id_negocio}`
    );
  }
  ver_productos(id_tienda): Observable<Producto[]> {
    return this.http.get<Producto[]>(
      `${this.urlEndPoint}/compras/productos/${id_tienda}`
    );
  }

  productos_busqueda(texto_busqueda: string, page: number): Observable<any> {
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
    
  }
}

