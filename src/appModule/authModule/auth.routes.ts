import express, { Router } from "express";
// import { verifyJwtToken } from "../../../utils/middleware/verify-jwt-token";
export const AuthRoutes: Router = express.Router();

import { signUp, login } from "./auth.controller";

// /api/auth/signUp
AuthRoutes.post("/signUp", signUp);

// /api/auth/login
AuthRoutes.post("/login", login);
