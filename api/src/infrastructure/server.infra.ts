import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import YAML from "yaml";
import fs from "fs";
import path from "path";

export default class Server {
  private readonly server!: express.Express;
  private readonly port: number = Number(process.env.PORT);
  private readonly basePathApi = "/api";

  constructor() {
    this.server = express();
  }

  initialize(): void {
    this.middlewares();
    this.listen();
  }
  
  middlewares(): void {
    this.server.use(
      this.basePathApi, 
      cors(), 
      express.json(), 
      express.urlencoded({ extended: true })
    );

    const file = fs.readFileSync("./swagger.yaml", "utf-8");
    const swaggerDocs = YAML.parse(file);
    this.server.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  }

  controllers(): void {}

  listen(): void {
    this.server.listen(this.port, () => console.log(`Servidor rodando na porta ${this.port}`));
  }
}