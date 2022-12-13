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
exports.changeRole = exports.removeVendor = exports.getAllVendor = void 0;
const user_model_1 = require("../userModule/user.model");
const getAllVendor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const vendors = yield user_model_1.UserModel.find({
            $and: [{ userType: user_model_1.userType.VENDOR }, { isActive: true }]
        });
        console.log("this is vendors", vendors);
        if (vendors) {
            return res.status(200).json({
                message: "vendors fetched successfully",
                result: vendors,
                success: true,
            });
        }
        else {
            return res.status(400).json({
                message: "Failed to fetch vendors ",
                success: false,
            });
        }
    }
    catch (e) {
        return res.status(200).json({
            message: "Failed",
            success: false,
            error: e,
        });
    }
});
exports.getAllVendor = getAllVendor;
const removeVendor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { vendorId } = req.params;
        const vendor = yield user_model_1.UserModel.findByIdAndUpdate(vendorId, {
            isActive: false,
        });
        if (vendor) {
            return res.status(200).json({
                message: "vendor removed successfully",
                result: vendor,
                success: true,
            });
        }
        else {
            return res.status(400).json({
                message: "Failed to remove vendor ",
                success: false,
            });
        }
    }
    catch (e) {
        return res.status(200).json({
            message: "Failed",
            success: false,
            error: e,
        });
    }
});
exports.removeVendor = removeVendor;
const changeRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employeeExist = yield user_model_1.UserModel.findOneAndUpdate({
            phone: req.body.phone,
            password: req.body.password
        }, req.body);
        console.log('this is user exist', employeeExist);
        if (employeeExist) {
            return res.status(200).send({
                message: "Vendor Added Successfully",
                success: true,
            });
        }
        else {
            return res.status(200).send({
                message: "User does not exist",
                success: false,
            });
        }
    }
    catch (err) {
        console.log(err);
        return res.status(200).send({
            dsuccess: false,
            message: "Failed",
            error: err,
        });
    }
});
exports.changeRole = changeRole;
