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

export const eliminarAlumno = async (req, res) => {
  try {
    console.log("El ID recibido es: ", req.params.id);
    const { id } = req.params;

    await prisma.alumno.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({ mensaje: "El alumno fue eliminado exitosamente!" });
  } catch (error) {
    console.log(error);
    if (error.code === "P2025") {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    res.status(500).json({ mensaje: "Ocurrio un error al eliminar el alumno" });
  }
};
