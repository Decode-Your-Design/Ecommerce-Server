import express, { Router } from "express";
import { getAllProducts } from "./product.controller";
import { getProductById } from "./product.controller";

export const ProductRoutes: Router = express.Router();

// /api/product/getAllProducts
ProductRoutes.get("/getAllProducts", getAllProducts);
ProductRoutes.get("/getProductById/:productId", getProductById);