import { Router } from "express";
import {
  crearAlumno,
  listarAlumnos,
} from "../controllers/alumnos.controllers.js";

const router = Router();
router.route("/").post(crearAlumno).get(listarAlumnos);

export default router;
