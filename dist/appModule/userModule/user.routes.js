"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const verify_jwt_token_1 = require("../../utils/middleware/verify-jwt-token");
const user_controller_1 = require("./user.controller");
exports.userRoutes = express_1.default.Router();
exports.userRoutes.post("/addUser", user_controller_1.addUser);
exports.userRoutes.post("/addToWishList/:productId", verify_jwt_token_1.verifyJwtToken, user_controller_1.addToWishlist);
