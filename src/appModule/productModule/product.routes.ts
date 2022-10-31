import express, { Router } from "express";

import {
  getAllProducts,
  getProductById,
  addProduct,
  updateProductDetails,
} from "./product.controller";

export const ProductRoutes: Router = express.Router();

// /api/product/getAllProducts
ProductRoutes.get("/getAllProducts", getAllProducts);
ProductRoutes.get("/getProductById/:productId", getProductById);
ProductRoutes.post("/addProduct", addProduct);
ProductRoutes.post("/updateProductDetails", updateProductDetails);
