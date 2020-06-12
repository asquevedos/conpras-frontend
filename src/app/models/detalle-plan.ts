import { Cliente } from "./cliente";
import { Plan } from "./plan";

export class DetallePlan {
  id: number;
  estado: boolean;
  numeroCelularEnvio: string;
  fechaInicio: Date;
  fechaCierre: Date;
  plan: Plan;
  cliente: Cliente;
}
