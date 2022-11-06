import express, { Router } from "express";
import { verifyJwtToken } from "../../utils/middleware/verify-jwt-token";

import { addProduct, getWishlistProduct, removeProduct } from "./wishList.controller";

export const wishListRoutes: Router = express.Router();

// /api/wishList/addProduct
wishListRoutes.post("/addProductToWishlist/:productId", verifyJwtToken, addProduct);

// /api/wishList/getProduct
wishListRoutes.get("/getWishlistProduct", verifyJwtToken, getWishlistProduct);

// /api/wishList/removeProduct
wishListRoutes.post("/removeProductFromWishlist/:productId", verifyJwtToken, removeProduct);
