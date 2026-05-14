import { Router } from "express";
import { ProductsController } from "../controllers/produtocontroller.js";

const router = Router();
const productController = new ProductsController();

router.get("/", productController.get);
router.post("/", productController.create);
router.patch("/:id", productController.update);
router.delete("/:id", productController.delete);

export const productRouter = router;
