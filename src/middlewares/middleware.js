// validar campos de data

import { validateCoordinates, validateId } from "../utils/data.js";

export const validateData = (req, res, next) => {
  const { id, xa, ya, za } = req.body;

  if (!id || !xa || !ya || !za) {
    return res.status(400).json({ error: "datos no válidos" });
  }

  if (!validateId(id)) {
    return res.status(400).json({ error: "id no válido" });
  }

  if (!validateCoordinates(xa, ya, za)) {
    return res.status(400).json({ error: "coordenadas no válidas" });
  }

  next();
};

export const validateIdParam = (req, res, next) => {
  const { id } = req.params;

  if (!validateId(id)) {
    return res.status(400).json({ error: "id no válido" });
  }
  next();
};

export const validateCoordinatesBody = (req, res, next) => {
  const { xa, ya, za } = req.body;

  if (!validateCoordinates(xa, ya, za)) {
    return res.status(400).json({ error: "coordenadas no válidas" });
  }
  next();
};

/* {
  id: "AAB001",
  xa: 7500,
  ya: 6200,
  za: 1000
},
 */

/* 

Realizar las validaciones necesarias para recibir un valor alfanumérico de 6 dígitos en id y 
valores numéricos en las coordenadas. En caso de NO cumplir con los valores 
estipulados para cada campo se debe retornar el mensaje: “datos no válidos” en el 
formato que se pide más abajo.
*/
