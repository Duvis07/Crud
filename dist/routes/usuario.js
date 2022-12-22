"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//importamos las funciones del controlador
const usuarios_1 = require("../controllers/usuarios");
//creamos el router
const router = (0, express_1.Router)();
//definimos las rutas
router.get("/", usuarios_1.getUsuarios);
router.get("/:id", usuarios_1.getUsuario);
router.post("/", usuarios_1.postUsuarios);
router.put("/:id", usuarios_1.putUsuarios);
router.delete("/:id", usuarios_1.deleteUsuarios);
//exportamos el router
exports.default = router;
//# sourceMappingURL=usuario.js.map