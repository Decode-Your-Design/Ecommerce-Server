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
exports.addToWishlist = exports.addUser = void 0;
const user_model_1 = require("./user.model");
const product_model_1 = require("../productModule/product.model");
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = yield user_model_1.UserModel.findOne({ phone: req.body.phone });
        console.log(employee);
        if (employee) {
            return res.status(200).send({
                message: employee.phone == req.body.phone ? "phone number already exist" : "",
                success: false,
                result: employee,
            });
        }
        else {
            const employee = yield user_model_1.UserModel.create(Object.assign({}, req.body));
            if (employee) {
                return res.status(200).send({
                    message: "Employee added successfully",
                    success: true,
                    result: employee,
                });
            }
            else {
                return res.status(200).send({
                    message: "Failed to add employee",
                    success: false,
                });
            }
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
exports.addUser = addUser;
const addToWishlist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    try {
        const productData = yield product_model_1.ProductModel.findOne({
            productId: "63641ad60551ad99a282071e",
        });
        const userDetail = yield user_model_1.UserModel.findByIdAndUpdate(req.body.user, {
            productData,
        });
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
        console.log(userDetail);
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});
exports.addToWishlist = addToWishlist;
