import { distanciaGPS } from "../utils.js";

class Dao {
  corredores = [
    { id: "COR001", latitud: -34.6037, longitud: -58.3816 },
    { id: "COR002", latitud: -34.6038, longitud: -58.3817 },
    { id: "COR003", latitud: -34.6045, longitud: -58.383 },
    { id: "COR004", latitud: -34.607, longitud: -58.3835 },
    { id: "COR005", latitud: -34.589, longitud: -58.3975 },
    { id: "COR006", latitud: -34.6002, longitud: -58.3801 },
    { id: "COR007", latitud: -34.60021, longitud: -58.38008 },
    { id: "COR008", latitud: -34.602, longitud: -58.39 },
    { id: "COR009", latitud: -34.606, longitud: -58.381 },
    { id: "COR010", latitud: -34.6078, longitud: -58.4444 },
    { id: "COR011", latitud: -34.60375, longitud: -58.38165 },
    { id: "COR012", latitud: -34.6033, longitud: -58.3818 },
    { id: "COR013", latitud: -34.56, longitud: -58.46 },
    { id: "COR014", latitud: -34.562, longitud: -58.461 },
    { id: "COR015", latitud: -34.60379, longitud: -58.38159 },
  ];

  METROS_ALERTA = 50;

  buscarCorredorPorId = async (id) => {
    return this.corredores.find((corredor) => corredor.id === id);
  };

  crear = async (corredor) => {
    this.corredores.push(corredor);
  };

  actualizar = async (id, latitud, longitud) => {
    const existente = this.corredores.find((c) => c.id === id);
    if (existente) {
      existente.latitud = latitud;
      existente.longitud = longitud;
    }
  };

  listarCorredores = async () => {
    return this.corredores;
  };

  corredoresEnPeligro = async (corredor) => {
    const { latitud, longitud, id } = corredor;

    const ids = [];

    this.corredores.forEach((corredorSecundario) => {
      const distancia = distanciaGPS(
        latitud,
        longitud,
        corredorSecundario.latitud,
        corredorSecundario.longitud
      );
      console.log(
        `Distancia entre corredor ${id} y corredor ${corredorSecundario.id}`,
        distancia
      );

      if (distancia < this.METROS_ALERTA && id !== corredorSecundario.id) {
        ids.push({
          id: corredorSecundario.id,
          distancia: distancia,
        });
      }
    });

    return ids;
  };
}

export default Dao;
