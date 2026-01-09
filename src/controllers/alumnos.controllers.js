import { prisma } from "../server/prisma.js";

export const crearAlumno = async (req, res) => {
  try {
    const nuevoAlumno = await prisma.alumno.create({
      data: req.body,
    });
    res.status(201).json({
      mensaje: "El alumno fue creado exitosamente",
      alumno: nuevoAlumno,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: "Ocurrio un error al crear un alumno" });
  }
};

export const listarAlumnos = async (req, res) => {
  try {
    const alumnos = await prisma.alumno.findMany();
    res.status(200).json(alumnos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: "Ocurrio un error al listar los alumnos" });
  }
};
