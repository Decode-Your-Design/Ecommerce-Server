import express, { Router } from "express";
import { getAllProducts } from "./product.controller";

export const ProductRoutes: Router = express.Router();

// /api/product/getAllProducts
ProductRoutes.get("/getAllProducts", getAllProducts);