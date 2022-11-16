import express, { Router } from "express";
import { verifyJwtToken } from "../../utils/middleware/verify-jwt-token";
// import { addUser, fetchUserInfo, updateUserInfo } from "./user.controller";
export const userRoutes: Router = express.Router();


