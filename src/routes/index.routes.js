import { Router } from "express";
import routesAlumnos from "./alumnos.routes.js";

const router = Router();
router.use("/alumnos", routesAlumnos);

export default router;
