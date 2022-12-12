"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wishListRoutes = void 0;
const express_1 = __importDefault(require("express"));
const verify_jwt_token_1 = require("../../utils/middleware/verify-jwt-token");
const wishList_controller_1 = require("./wishList.controller");
exports.wishListRoutes = express_1.default.Router();
exports.wishListRoutes.post("/addProductToWishlist/:productId", verify_jwt_token_1.verifyJwtToken, wishList_controller_1.addProduct);
exports.wishListRoutes.get("/getWishlistProduct", verify_jwt_token_1.verifyJwtToken, wishList_controller_1.getWishlistProduct);
exports.wishListRoutes.post("/removeProductFromWishlist/:productId", verify_jwt_token_1.verifyJwtToken, wishList_controller_1.removeProduct);
