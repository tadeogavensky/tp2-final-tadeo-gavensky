import { Router } from "express";
import controller from "../container/container.js";
import { validateCoordinatesBody, validateData, validateIdParam } from "../middlewares/middleware.js";

const router = Router();

router.get("/data", controller.getAll);
router.get("/data/:id", validateIdParam, controller.getById);
router.post("/data", validateData, controller.create);
router.put("/data/:id", validateIdParam, validateCoordinatesBody, controller.update);
router.delete("/data/:id", validateIdParam, controller.delete);


export default router;
