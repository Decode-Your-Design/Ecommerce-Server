"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const verify_jwt_token_1 = require("../../utils/middleware/verify-jwt-token");
const product_controller_1 = require("./product.controller");
exports.ProductRoutes = express_1.default.Router();
exports.ProductRoutes.post("/addProduct", verify_jwt_token_1.verifyJwtToken, product_controller_1.addProduct);
exports.ProductRoutes.post("/updateProductDetails/:productId", verify_jwt_token_1.verifyJwtToken, product_controller_1.updateProductDetails);
exports.ProductRoutes.post("/removeProduct/:productId", verify_jwt_token_1.verifyJwtToken, product_controller_1.removeProduct);
exports.ProductRoutes.get("/getProductByType/:vehicleType", product_controller_1.getProductByType);
