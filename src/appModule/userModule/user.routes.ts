import express, { Router } from "express";
// import { getAllProducts } from "./product.controller";
import { vendorSignup } from "./userController";
import { vendorAddProduct } from "./userController";
import { getVendors } from "./userController";
import { vendorGetProducts } from "./userController";
import { vendorLogin } from "./userController";
// 
export const userRoutes: Router = express.Router();

// /api/product/getAllProducts
userRoutes.post("/vendor/signup", vendorSignup);
userRoutes.post("/vendor/login", vendorLogin);
userRoutes.post("/vendor/addProduct/:vendorId", vendorAddProduct);
userRoutes.post("/vendor/getAllVendors", getVendors);
userRoutes.post("/vendor/products/:vendorId", vendorGetProducts);