import { Negocio } from './negocio';

export class Horario {
  id: number;
  horarioInicio: Date;
  horarioCierre: Date;
  negocio: Negocio;
}
