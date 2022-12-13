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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContactQuery = exports.contactAdmin = void 0;
const contact_model_1 = require("./contact.model");
const contactAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const details = yield contact_model_1.ContactModel.create(Object.assign({}, req.body));
        if (details) {
            return res.status(200).send({
                message: "Request sent to admin successfully",
                success: true,
                result: details,
            });
        }
        else {
            return res.status(200).send({
                message: "Failed to create ",
                success: false,
            });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(200).send({
            success: false,
            message: "Failed to create the service",
            error: error,
        });
    }
});
exports.contactAdmin = contactAdmin;
const getContactQuery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const details = yield contact_model_1.ContactModel.find({});
        if (details) {
            return res.status(200).send({
                message: "contact query fetched successfully",
                success: true,
                result: details,
            });
        }
        else {
            return res.status(403).send({
                message: "Failed to fetched ",
                success: false,
            });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(200).send({
            success: false,
            message: "Failed to create the service",
            error: error,
        });
    }
});
exports.getContactQuery = getContactQuery;
