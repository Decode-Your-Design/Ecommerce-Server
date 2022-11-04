import express, { Router } from "express";
import { verifyJwtToken } from "../../utils/middleware/verify-jwt-token";

import {addProduct, getProduct} from "./wishList.controller";

export const wishListRoutes: Router = express.Router();

// /api/wishList/addProduct
wishListRoutes.post("/addProduct/:productId", verifyJwtToken, addProduct);

// /api/wishList/getProduct
wishListRoutes.get("/getProduct", verifyJwtToken, getProduct);
