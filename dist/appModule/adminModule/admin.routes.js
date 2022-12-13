"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const verify_jwt_token_1 = require("../../utils/middleware/verify-jwt-token");
const admin_controller_1 = require("./admin.controller");
exports.AdminRoutes = express_1.default.Router();
exports.AdminRoutes.get("/getAllVendor", verify_jwt_token_1.verifyJwtToken, admin_controller_1.getAllVendor);
exports.AdminRoutes.get("/removeVendor/:vendorId", verify_jwt_token_1.verifyJwtToken, admin_controller_1.removeVendor);
exports.AdminRoutes.post("/changeRole", verify_jwt_token_1.verifyJwtToken, admin_controller_1.changeRole);
