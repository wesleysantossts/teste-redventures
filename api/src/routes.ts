import BrothController from "controllers/broth.controller";
import ProteinController from "controllers/protein.controller";
import express from "express";
const routes = express();

routes.get("/broths", BrothController.Index);
routes.get("/proteins", ProteinController.Index);
routes.post("/orders");

export default routes;