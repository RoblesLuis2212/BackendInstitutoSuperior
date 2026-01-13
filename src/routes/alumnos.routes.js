import { Router } from "express";
import {
  actualizarDatosAlumno,
  crearAlumno,
  eliminarAlumno,
  listarAlumnos,
  obtenerAlumnoID,
} from "../controllers/alumnos.controllers.js";

const router = Router();
router.route("/").post(crearAlumno).get(listarAlumnos);
router
  .route("/:id")
  .delete(eliminarAlumno)
  .get(obtenerAlumnoID)
  .put(actualizarDatosAlumno);

export default router;
