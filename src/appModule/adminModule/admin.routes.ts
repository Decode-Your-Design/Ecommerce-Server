import express, { Router } from "express";
import { verifyJwtToken } from "../../utils/middleware/verify-jwt-token";

import { getAllVendor, removeVendor,changeRole } from "./admin.controller";

export const AdminRoutes: Router = express.Router();

// /api/admin/getAllVendor
AdminRoutes.get("/getAllVendor", verifyJwtToken, getAllVendor);

// /api/admin/removeVendor
AdminRoutes.get("/removeVendor/:vendorId",verifyJwtToken, removeVendor);
AdminRoutes.post("/changeRole", verifyJwtToken, changeRole);
