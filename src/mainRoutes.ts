import express, { Router } from "express";
import { ProductRoutes } from "./appModule/productModule/product.routes";
const app = express();

// *********************************** Admin Module Routes ***********************************
// api/adminAuth


// *********************************** App Module Routes ***********************************

// api/product
app.use('/product',ProductRoutes)

module.exports = app;