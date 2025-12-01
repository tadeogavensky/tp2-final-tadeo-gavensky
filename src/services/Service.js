class Service {
  constructor(dao) {
    this.dao = dao;
  }

  listarCorredores = async () => {
    return await this.dao.listarCorredores();
  };

  procesarCorredor = async (corredor) => {
    const existente = await this.dao.buscarCorredorPorId(corredor.id);
    if (existente) {
      await this.dao.actualizar(
        corredor.id,
        corredor.latitud,
        corredor.longitud
      );
    } else {
      await this.dao.crear(corredor);
    }

    const alertas = await this.dao.corredoresEnPeligro(corredor);

    const tipo = existente ? "actualizado" : "creado";

    const respuesta = {
      tipo: tipo,
      corredor: corredor,
      alertas: alertas,
    };
    return respuesta;
  };
}

export default Service;
