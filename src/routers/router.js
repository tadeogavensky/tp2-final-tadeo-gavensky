import { Router } from "express";
import controller from "../container/container.js";
import { validarDatosPost } from "../middlewares/middleware.js";

const router = Router();

// Punto 1A y 1B
router.post("/corredores", validarDatosPost, controller.procesarCorredor);

// Punto 2
router.get("/corredores", controller.listarCorredores);

export default router;
