"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRoutes = void 0;
const express_1 = __importDefault(require("express"));
const contact_controller_1 = require("./contact.controller");
exports.contactRoutes = express_1.default.Router();
exports.contactRoutes.post("/contactAdmin", contact_controller_1.contactAdmin);
exports.contactRoutes.post("/getContactQuery", contact_controller_1.getContactQuery);
