import { Usuario } from './usuario';
import { TipoNegocio } from './tipo-negocio';
import { Imagen } from './imagen';
import { Producto } from './producto';
import { Horario } from './Horario';

export class Negocio {
    id:number;
    fechaCreacion:Date;
    nombre:string;
    descripcion :string;
    telefono :string;
    hoararios: Horario;
    usuario:Usuario;
    activo:boolean;
    avatar:Imagen;
    direccion: string;
    celular: string;
    productos: Producto[] = [];
    tipoNegocio:TipoNegocio;
    
    


}
