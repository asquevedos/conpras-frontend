import { ArchivoMensaje } from "./archivo-mensaje";
import { DetallePlan } from "./detalle-plan";
import { Cliente } from "./cliente";

export class DetalleEnvioMensaje {
  id: number;
  celularDestinatariosCSV: string;
  textoMensaje: string;
  detalleplanActual: DetallePlan;
  cliente: Cliente;
  archivoMensaje: ArchivoMensaje = new ArchivoMensaje();
}
