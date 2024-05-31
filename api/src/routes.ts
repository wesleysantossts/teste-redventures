import BrothController from "controllers/broth.controller";
import OrderController from "controllers/order.controller";
import ProteinController from "controllers/protein.controller";
import express from "express";
const routes = express();

routes.get("/broths", BrothController.Index);
routes.get("/proteins", ProteinController.Index);
routes.post("/orders", OrderController.Store);

export default routes;