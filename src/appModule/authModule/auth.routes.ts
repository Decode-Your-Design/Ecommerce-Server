import express, { Router } from "express";
// import { verifyJwtToken } from "src/utils/middleware/verify-jwt-token";
// import { verifyJwtToken } from "../src/utils/middleware/verify-jwt-token";
import { verifyJwtToken } from "../../utils/middleware/verify-jwt-token";
export const AuthRoutes: Router = express.Router();

import { changePassword } from "./auth.controller";
import { signUp, login } from "./auth.controller";

// /api/auth/signUp
AuthRoutes.post("/signUp", signUp);


// /api/auth/login
AuthRoutes.post("/login", login);
AuthRoutes.post("/changePassword", verifyJwtToken,changePassword);


