import { Router } from "express";
import { ProdutoController } from "../controllers/produtocontroller.js";

const produtoRoutes = Router();

const produtoController = new ProdutoController();

produtoRoutes.get("/", produtoController.list);

produtoRoutes.post("/", produtoController.create);

export { produtoRoutes };
