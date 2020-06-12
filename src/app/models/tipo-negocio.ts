import { Imagen } from './imagen';

export class TipoNegocio {
    id: number;
    nombre:String;
    imagen:Imagen = new Imagen();
  }