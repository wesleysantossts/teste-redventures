import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import YAML from "yaml";
import fs from "fs";
import routes from "../routes";
import ValidateApiKeyMiddleware from "../middlewares/validateApiKey";

export default class Server {
  private readonly server!: express.Express;
  private readonly port: number = Number(process.env.PORT);
  private readonly basePathApi = "/api";

  constructor() {
    this.server = express();
  }

  initialize(): void {
    this.middlewares();
    this.controllers();
    this.listen();
  }
  
  middlewares(): void {
    const allowedOrigin = 'http://3.83.94.172/';
    const corsOptions = {
      origin: function (origin: string, callback: any) {
        if (origin === allowedOrigin || !origin) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      }
    };

    this.server.use(
      this.basePathApi, 
      express.json(), 
      express.urlencoded({ extended: true }),
      cors({

      }), 
    );

    const file = fs.readFileSync("./swagger.yml", "utf-8");
    const swaggerDocs = YAML.parse(file);
    this.server.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

    this.server.use(ValidateApiKeyMiddleware.Validate);
  }

  controllers(): void {
    this.server.use(this.basePathApi, routes);
  }

  listen(): void {
    this.server.listen(this.port, () => console.log(`Servidor rodando na porta ${this.port}`));
  }
}