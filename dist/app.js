"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const database_1 = __importDefault(require("./database/database"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    const mainRoutes = require("./mainRoutes");
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.json({ limit: "5000mb" }));
    app.use(express_1.default.urlencoded({
        limit: "5000mb",
        extended: true,
        parameterLimit: 50000000,
    }));
    (0, database_1.default)();
    app.use("/api", mainRoutes);
    const port = 8000;
    try {
        app.listen(port, () => console.log(`API server started at http://68.183.246.158:8000`));
    }
    catch (err) {
        console.log(err);
    }
}))();
