import express, { Router } from "express";
import { verifyJwtToken } from "../../utils/middleware/verify-jwt-token";
import { addUser, fetchUserInfo, updateUserInfo } from "./user.controller";
export const userRoutes: Router = express.Router();

// /api/users/addUser
userRoutes.post("/addUser", addUser);

// /api/users/fetchUserInfo
userRoutes.post("/fetchUserInfo", verifyJwtToken, fetchUserInfo);

// /api/users/updateUserInfo
userRoutes.post("/updateUserInfo", verifyJwtToken, updateUserInfo);
