import express, { Router } from "express";
import { ProductRoutes } from "./appModule/productModule/product.routes";
import { userRoutes } from "./appModule/userModule/user.routes";
const app = express();

// vendor module routes

app.use("/user", userRoutes);

// *********************************** Admin Module Routes ***********************************

// api/adminAuth

// *********************************** App Module Routes ***********************************

// api/product
app.use("/product", ProductRoutes);

module.exports = app;
