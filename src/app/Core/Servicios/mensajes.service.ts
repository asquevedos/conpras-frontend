import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { DetalleEnvioMensaje } from 'src/app/models/detalle-envio-mensaje';
import { Usuario } from 'src/app/models/usuario';
import { DetallePlan } from 'src/app/models/detalle-plan';
import { GLOBAL} from '../global-services';


@Injectable({
  providedIn: "root",
})
export class MensajesService {
  url = GLOBAL.url;
  
  constructor(private http: HttpClient
    
    ) {

  }
  private urlEndPoint: string = this.url + "api/cliente";

  enviarMensaje(
    detalleEnvioMensaje: DetalleEnvioMensaje
  ): Observable<DetalleEnvioMensaje> {
    return this.http
      .post(this.urlEndPoint + "/enviarmensaje", detalleEnvioMensaje)
      .pipe(
        map((response: any) => response.mensaje as DetalleEnvioMensaje),
        catchError((e) => {
          if (e.status == 400) {
            return throwError(e);
          }
          if (e.error.mensaje) {
            console.error(e.error.mensaje);
            console.log(this.urlEndPoint);
          }
          return throwError(e);
        })
      );
  }

  planesActivos(usuario: Usuario): Observable<DetallePlan[]> {
    return this.http.get<DetallePlan[]>(
      `${this.urlEndPoint}/planesactivos/${usuario.username}`
    );
  }
}
