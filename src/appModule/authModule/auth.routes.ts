import express, { Router } from "express";
// import { verifyJwtToken } from "../../../utils/middleware/verify-jwt-token";
export const AuthRoutes: Router = express.Router();

import { signUp } from "./auth.controller";

// /api/auth/signUp
AuthRoutes.post("/signUp", signUp);
