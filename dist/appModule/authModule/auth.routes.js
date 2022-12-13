"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const verify_jwt_token_1 = require("../../utils/middleware/verify-jwt-token");
exports.AuthRoutes = express_1.default.Router();
const auth_controller_1 = require("./auth.controller");
const auth_controller_2 = require("./auth.controller");
exports.AuthRoutes.post("/signUp", auth_controller_2.signUp);
exports.AuthRoutes.post("/login", auth_controller_2.login);
exports.AuthRoutes.post("/changePassword", verify_jwt_token_1.verifyJwtToken, auth_controller_1.changePassword);
