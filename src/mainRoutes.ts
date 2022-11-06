import express, { Router } from "express";
import { AuthRoutes } from "./appModule/authModule/auth.routes";
import { ProductRoutes } from "./appModule/productModule/product.routes";
import { userRoutes } from "./appModule/userModule/user.routes";
import {wishListRoutes } from "./appModule/wishListModule/wishList.routes";
const app = express();



// *********************************** Admin Module Routes ***********************************

// api/auth
app.use("/auth", AuthRoutes);

// api/users
app.use("/users", userRoutes);

// *********************************** App Module Routes ***********************************

// api/product
app.use("/product", ProductRoutes);

// /api/wishList
app.use("/wishlist", wishListRoutes);

module.exports = app;
