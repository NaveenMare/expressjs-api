import express, { Request, Response } from "express";
import ProductsController from "../controllers/products.controller";

const productRouter = express.Router();
const productsController = new ProductsController();

productRouter.get("/", (req: Request, res: Response) => {
  res.json(productsController.getAllProducts());
});

productRouter.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(productsController.getProductById(id));
});

productRouter.post("/", (req: Request, res: Response) => {
  if (!req.body) throw new Error("Product data not found");
  res.json(productsController.addNewProduct(req.body));
});

productRouter.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(productsController.updateProduct(id, req.body));
});

productRouter.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(productsController.deleteProduct(id));
});

export default productRouter;
