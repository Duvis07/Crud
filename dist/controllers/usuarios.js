"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuarios = exports.putUsuarios = exports.postUsuarios = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
//getUsuarios
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuario_1.default.findAll();
    res.json({
        usuarios,
    });
});
exports.getUsuarios = getUsuarios;
//obtener un usuario por id
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (usuario) {
        res.json({
            usuario,
        });
    }
    else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`,
        });
    }
});
exports.getUsuario = getUsuario;
//postUsuarios
const postUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    res.json({
        msg: "postUsuarios",
        body,
    });
});
exports.postUsuarios = postUsuarios;
//putUsuarios
const putUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    res.json({
        msg: "putUsuarios",
        id,
    });
});
exports.putUsuarios = putUsuarios;
//deleteUsuarios
const deleteUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    res.json({
        msg: "deleteUsuarios",
        id,
    });
});
exports.deleteUsuarios = deleteUsuarios;
//exportamos las funciones
exports.default = {
    getUsuarios: exports.getUsuarios,
    postUsuarios: exports.postUsuarios,
    putUsuarios: exports.putUsuarios,
    deleteUsuarios: exports.deleteUsuarios,
};
//# sourceMappingURL=usuarios.js.map