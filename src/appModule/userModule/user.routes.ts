import express, { Router } from "express";
import { verifyJwtToken } from "../../utils/middleware/verify-jwt-token";
import { addUser,addToWishlist } from "./user.controller";
export const userRoutes: Router = express.Router();

// /api/product/getAllProducts

// /api/users/addUser
userRoutes.post("/addUser",addUser)
userRoutes.post("/addToWishList/:productId",verifyJwtToken,addToWishlist)


// userRoutes.post("/vendor/signup", vendorSignup);
// userRoutes.post("/vendor/login", vendorLogin);
// userRoutes.post("/vendor/addProduct/:vendorId", vendorAddProduct);
// userRoutes.post("/vendor/getAllVendors", getVendors);
// userRoutes.post("/vendor/products/:vendorId", vendorGetProducts);
