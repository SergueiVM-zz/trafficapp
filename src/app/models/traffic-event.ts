import { AttachSession } from "protractor/built/driverProviders";

export class TrafficEvent {
  codEle: string; // "4866116",
  provincia: string; // "NAVARRA",
  carretera: string; // "A-1",
  pkIni: number; //398,
  pkFinal: number; //  399.5,
  sentido: string; // "NORTE",

  precision: string;
  poblacion: string;
  fecha: string;
  alias: string; // "OBRAS / A-1 (398.0 - 399.5)",
  suceso: string; //  "OBRAS",
  descripcion: string; // "<span style=\"margin-top:10px; float:left; clear:both\"> <b>OBRA / MANTENIMIENTO VIA</b> por <b>OBRAS</b> en<b> autovía del norte</b>: </span> <span style=\"margin-top:10px; float:left; clear:both\">  - La AUTOPISTA / AUTOVÍA <b> <span style=\"color:#ab3000\">A-1 </span> </b> a la altura de <b>ALTSASU/ALSASUA (NAVARRA)</b> desde el <b> km 398</b> al <b> km 399.5</b> sentido <b>NORTE</b></span><span style=\"margin-top:10px; float:left; clear:both\"> Advertencia: <b>CARRIL IZQUIERDO CERRADO</b></span>",
  fechaFin: string; //"?",
  lng: number; // -2.1759741,
  lat: number; // 42.8913,
  causa: string; // "OBRAS",
  hora: string; // "07:55",
  estado: string; // 1,
  autonomia: string; // "Navarra, Comunidad Foral de",
  icono: string; // "INC_RMT_RCW_NAP_CAC.png",
  tipo: string; // "Incidencia",
  horaFin: string; // "?",
  nivel: string; // "NO APLICA"

  compare(obj: TrafficEvent) {
    let out = 1
    if (obj !== null) {
      if (this.provincia < obj.provincia) {
        out = -1;
      } else if (this.provincia > obj.provincia) {
        out = 1;
      } else {
        out = 0
        if (this.carretera < obj.carretera) {
          out = -1;
        } else if (this.carretera > obj.carretera) {
          out = 1;
        } else {
          out = 0
        }
      }
    }
    return out;
  }
}
