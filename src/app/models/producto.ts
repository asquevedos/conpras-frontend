import { Negocio } from './negocio';
import { Imagen } from './imagen';
import { PalabraClave } from './palabra-clave';

export class Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  estado: boolean;
  imagen: Imagen;
  negocio:Negocio;
  palabraClave:PalabraClave[] = [];
  descripcionPrecio: string

}
