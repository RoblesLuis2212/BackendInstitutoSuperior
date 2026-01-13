import { Router } from "express";
import {
  crearAlumno,
  eliminarAlumno,
  listarAlumnos,
} from "../controllers/alumnos.controllers.js";

const router = Router();
router.route("/").post(crearAlumno).get(listarAlumnos);
router.route("/:id").delete(eliminarAlumno);

export default router;
