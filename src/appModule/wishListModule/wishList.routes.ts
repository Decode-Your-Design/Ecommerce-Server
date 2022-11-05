import express, { Router } from "express";
import { verifyJwtToken } from "../../utils/middleware/verify-jwt-token";

import { addProduct, getProduct, removeProduct } from "./wishList.controller";

export const wishListRoutes: Router = express.Router();

// /api/wishList/addProduct
wishListRoutes.get("/addProduct/:productId", verifyJwtToken, addProduct);

// /api/wishList/getProduct
wishListRoutes.get("/getProduct", verifyJwtToken, getProduct);

// /api/wishList/removeProduct
wishListRoutes.get("/removeProduct/:productId", verifyJwtToken, removeProduct);
