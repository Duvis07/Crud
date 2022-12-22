import express from "express";
import usuarioRoutes from "../routes/usuario";
import cors from "cors";
import db from "../db/connection";

class Server {
  public app: express.Application;
  public port: string;
  public apiPaths = {
    usuarios: "/api/usuarios",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    //Conectar a base de datos
    this.dbConnection();

    //Middlewares
    this.middlewares();

    //Definimos las rutas
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("Database online");
    } catch (error: any) {
      throw new Error(error);
    }
  }

  //middlewares
  middlewares() {
    //CORS
    this.app.use(cors());

    //Lectura y parseo del body
    this.app.use(express.json());

    //Directorio público
    this.app.use(express.static("public"));
  }

  //middlewares son funciones que se ejecutan antes de que lleguen a las rutas
  routes() {
    this.app.use(this.apiPaths.usuarios, usuarioRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port", this.port);
    });
  }
}

export default Server;
