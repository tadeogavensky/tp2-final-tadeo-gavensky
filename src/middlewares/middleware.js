//1.B Validaciones: id de 6 caracteres alfanuméricos, latitud y longitud numéricas.

import { validarCoordenadas, validarId } from "../utils.js";

export const validarDatosPost = (req, res, next) => {
  console.log("Validando datos del POST /corredores");

  const { id, latitud, longitud } = req.body;
  const missingFields = [];

  if (!id) missingFields.push("id");
  if (!latitud && latitud !== 0) missingFields.push("latitud");
  if (!longitud && longitud !== 0) missingFields.push("longitud");

  if (missingFields.length > 0) {
    return res
      .status(400)
      .json({ errorMsg: "Faltan campos: " + missingFields.join(", ") });
  }

  if (!validarId(id)) {
    return res
      .status(400)
      .json({
        errorMsg: "ID debe estar formado por 6 caracteres alfanuméricos.",
      });
  }

  if (!validarCoordenadas(latitud, longitud)) {
    return res
      .status(400)
      .json({ errorMsg: "Latitud y longitud deben ser valores numéricos." });
  }

  next();
};

