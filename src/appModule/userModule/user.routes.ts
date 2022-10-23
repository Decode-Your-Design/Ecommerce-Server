import express, { Router } from "express";
// import { getAllProducts } from "./product.controller";
import { vendorSignup } from "./user.controller";
import { vendorAddProduct } from "./user.controller";
import { getVendors } from "./user.controller";
import { vendorGetProducts } from "./user.controller";
import { vendorLogin } from "./user.controller";
// 
export const userRoutes: Router = express.Router();

// /api/product/getAllProducts
userRoutes.post("/vendor/signup", vendorSignup);
userRoutes.post("/vendor/login", vendorLogin);
userRoutes.post("/vendor/addProduct/:vendorId", vendorAddProduct);
userRoutes.post("/vendor/getAllVendors", getVendors);
userRoutes.post("/vendor/products/:vendorId", vendorGetProducts);