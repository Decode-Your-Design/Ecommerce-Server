import express, { Router } from "express";
import { verifyJwtToken } from "src/utils/middleware/verify-jwt-token";
import multer from "../../utils/middleware/upload";

import {
  getAllProducts,
  getProductById,
  addProduct,
  updateProductDetails,
} from "./product.controller";

export const ProductRoutes: Router = express.Router();

// /api/product/addProduct
ProductRoutes.post("/addProduct", verifyJwtToken, addProduct);

// ProductRoutes.get("/getAllProducts", getAllProducts);
// ProductRoutes.get("/getProductById/:productId", getProductById);
// ProductRoutes.post("/addProduct", multer.single("image"), addProduct);
// ProductRoutes.post("/updateProductDetails", updateProductDetails);
