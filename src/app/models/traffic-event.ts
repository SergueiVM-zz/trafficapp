import { AttachSession } from 'protractor/built/driverProviders';

export class TrafficEvent {
  codEle: string;
  provincia: string;
  carretera: string;
  pkIni: number;
  pkFinal: number;
  sentido: string;
  precision: string;
  poblacion: string;
  fecha: string;
  alias: string;
  suceso: string;
  descripcion: string;
  fechaFin: string;
  lng: number;
  lat: number;
  causa: string;
  hora: string;
  estado: string;
  autonomia: string;
  icono: string;
  tipo: string;
  horaFin: string;
  nivel: string;

  compare(obj: TrafficEvent) {
    let out = 1;
    if (obj !== null) {
      if (this.provincia < obj.provincia) {
        out = -1;
      } else if (this.provincia > obj.provincia) {
        out = 1;
      } else {
        out = 0;
        if (this.carretera < obj.carretera) {
          out = -1;
        } else if (this.carretera > obj.carretera) {
          out = 1;
        } else {
          out = 0;
        }
      }
    }
    return out;
  }
}
