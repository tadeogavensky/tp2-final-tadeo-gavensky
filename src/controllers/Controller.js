class Controller {
  constructor(service) {
    this.service = service;
  }

  listarCorredores = async (req, res) => {
    try {
      const data = await this.service.listarCorredores();
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({
        error: "Error al obtener los corredores",
        details: error.message,
      });
    }
  };

  // Punto 3
  procesarCorredor = async (req, res) => {
    try {
      const corredor = req.body;
      const respuesta = await this.service.procesarCorredor(corredor);
      const status = respuesta.tipo === "creado" ? 201 : 200;

      res.status(status).json(respuesta);
    } catch (error) {
      res.status(400).json({
        errorMsg: "Error al procesar la alerta de proximidad",
        details: error.message,
      });
    }
  };
}

export default Controller;
