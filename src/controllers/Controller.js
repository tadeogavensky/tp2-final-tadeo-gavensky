class Controller {
  constructor(service) {
    this.service = service;
  }

  getAll = async (req, res) => {
    try {
      const data = await this.service.getAll();
      res.status(200).json(data);
    } catch (error) {
      res
        .status(400)
        .json({ error: "Error al obtener los data", details: error.message });
    }
  };

  getById = async (req, res) => {
    try {
      const { id } = req.params;
      const item = await this.service.getById(id);
      res.status(200).json(item);
    } catch (error) {
      res
        .status(400)
        .json({ error: "Error al obtener por id", details: error.message });
    }
  };

  create = async (req, res) => {
    try {
      const { id, xa, ya, za } = req.body;
      const data = this.service.create({ id, xa, ya, za });
      res.status(201).json({ message: "Data creado con éxito", data });
    } catch (error) {
      res
        .status(400)
        .json({ error: "Error al crear data", details: error.message });
    }
  };

  update = async (req, res) => {
    try {
      const { id } = req.params;
      const { xa, ya, za } = req.body;
      const data = await this.service.update(id, { xa, ya, za });
      res.status(200).json({ message: "Data actualizado con éxito", data });
    } catch (error) {
      res
        .status(400)
        .json({ error: "Error al actualizar data", details: error.message });
    }
  };

  delete = async (req, res) => {
    try {
      const { id } = req.params;

      await this.service.delete(id);
      res.status(200).json({ message: `Data con id ${id} eliminada con éxito` });

    } catch (error) {
      res.status(400).json({
        error: `Error al eliminar data con id ${id}`,
        details: error.message,
      });
    }
  };
}

export default Controller;
