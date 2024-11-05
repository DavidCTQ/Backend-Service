import { Router } from "express";
import {
  getAllProducts,
  getProductByID,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController";

const productsRoute = Router();
productsRoute.get("products/", getAllProducts);
productsRoute.get("products/:id", getProductByID);
productsRoute.post("products/", createProduct);
productsRoute.put("products/:id", updateProduct);
productsRoute.delete("products/:id", deleteProduct);

export default productsRoute;