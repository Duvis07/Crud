import { Router } from "express";

//importamos las funciones del controlador
import {
  getUsuarios,
  getUsuario,
  postUsuarios,
  putUsuarios,
  deleteUsuarios,
} from "../controllers/usuarios";

//creamos el router
const router = Router();

//definimos las rutas de la api
router.get("/", getUsuarios);
router.get("/:id", getUsuario);
router.post("/", postUsuarios);
router.put("/:id", putUsuarios);
router.delete("/:id", deleteUsuarios);

//exportamos el router
export default router;
