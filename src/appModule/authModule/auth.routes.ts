import express, { Router } from "express";
// import { verifyJwtToken } from "../../../utils/middleware/verify-jwt-token";
export const AuthRoutes: Router = express.Router();

import { isMobileNoExist } from "./auth.controller";

// /api/auth/isMobileNoExist
AuthRoutes.post("/isMobileNoExist", isMobileNoExist);

// // /api/auth/sendOTPtoUser
// AuthRoutes.post("/sendOTPtoUser", sendOTPtoUser);

// // /api/auth/verifyOTPofUser
// AuthRoutes.post("/verifyOTPofUser", verifyOTPofUser);

// // /api/auth/resendOTPtoUser
// AuthRoutes.post("/resendOTPtoUser", resendOTPtoUser);

