import { Router } from "express";
import { crearAlumno } from "../controllers/alumnos.controllers.js";

const router = Router();
router.route("/").get(crearAlumno);

export default router;
