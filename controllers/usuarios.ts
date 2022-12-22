import { Request, Response } from "express";
import Usuario from "../models/usuario";

//getUsuarios
export const getUsuarios = async (req: Request, res: Response) => {
  const usuarios = await Usuario.findAll();
  res.json({
    usuarios,
  });
};

//obtener un usuario por id
export const getUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const usuario = await Usuario.findByPk(id);

  if (usuario) {
    res.json({
      usuario,
    });
  } else {
    res.status(404).json({
      msg: `No existe un usuario con el id ${id}`,
    });
  }
};

//postUsuarios
export const postUsuarios = async (req: Request, res: Response) => {
  const { body } = req;
  res.json({
    msg: "postUsuarios",
    body,
  });
};

//putUsuarios
export const putUsuarios = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: "putUsuarios",
    id,
  });
};

//deleteUsuarios
export const deleteUsuarios = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: "deleteUsuarios",
    id,
  });
};

//exportamos las funciones
export default {
  getUsuarios,
  postUsuarios,
  putUsuarios,
  deleteUsuarios,
};
