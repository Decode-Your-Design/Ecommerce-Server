import express, { Router } from "express";
import { verifyJwtToken } from "../../utils/middleware/verify-jwt-token";

import {addProduct} from "./wishList.controller";

export const WishListRoutes: Router = express.Router();

// /api/wishList/addProduct
WishListRoutes.post("/addProduct", verifyJwtToken, addProduct);
