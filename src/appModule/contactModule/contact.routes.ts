import express, { Router } from "express";
import { verifyJwtToken } from "../../utils/middleware/verify-jwt-token";
import { contactAdmin, getContactQuery } from "./contact.controller";
export const contactRoutes: Router = express.Router();

// /api/contact/contactAdmin
contactRoutes.post("/contactAdmin", contactAdmin);

// /api/contact/getContactQuery
contactRoutes.post("/getContactQuery", getContactQuery);
