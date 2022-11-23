import express, { Router } from "express";
import { verifyJwtToken } from "../../utils/middleware/verify-jwt-token";
import multer from '../../utils/middleware/upload'
import {
  getAllProducts,
  getProductById,
  addProduct,
  updateProductDetails,
  removeProduct,
  getProductByType,
  getVendorProducts,
  dealsOfTheWeek
} from "./product.controller";

export const ProductRoutes: Router = express.Router();

// /api/product/addProduct

ProductRoutes.post("/addProduct", multer.array('image',4) ,verifyJwtToken, addProduct);

// /api/product/updateProductDetails
ProductRoutes.post(
  "/updateProductDetails/:productId",
  verifyJwtToken,
  updateProductDetails
);

// /api/product/removeProduct
ProductRoutes.post("/removeProduct/:productId", verifyJwtToken, removeProduct);

ProductRoutes.get("/getProductByType/:vehicleType", getProductByType);

ProductRoutes.get("/getAllProducts", getAllProducts);
ProductRoutes.get("/getProductById/:productId/:userId", getProductById);
ProductRoutes.get("/getVendorProducts", verifyJwtToken, getVendorProducts);
// ProductRoutes.post("/addProduct", multer.single("image"), addProduct);
ProductRoutes.post("/updateProductDetails", updateProductDetails);
ProductRoutes.get("/dealsOfTheWeek", dealsOfTheWeek);


