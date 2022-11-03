import express, { Router } from "express";
import { verifyJwtToken } from "../../utils/middleware/verify-jwt-token";
import multer from "../../utils/middleware/upload";

import {
  getAllProducts,
  getProductById,
  addProduct,
  updateProductDetails,
  removeProduct,
  getProductByType
} from "./product.controller";

export const ProductRoutes: Router = express.Router();

// /api/product/addProduct
ProductRoutes.post("/addProduct", verifyJwtToken, addProduct);

// /api/product/updateProductDetails
ProductRoutes.post("/updateProductDetails/:productId",verifyJwtToken, updateProductDetails);

// /api/product/removeProduct
ProductRoutes.post("/removeProduct/:productId",verifyJwtToken, removeProduct);
ProductRoutes.get("/getProductByType/:vehicleType",getProductByType);

// ProductRoutes.get("/getAllProducts", getAllProducts);
// ProductRoutes.get("/getProductById/:productId", getProductById);
// ProductRoutes.post("/addProduct", multer.single("image"), addProduct);
// ProductRoutes.post("/updateProductDetails", updateProductDetails);
