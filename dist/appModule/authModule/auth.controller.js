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
exports.login = exports.signUp = void 0;
const user_model_1 = require("../userModule/user.model");
const jsonwebtoken_1 = require("jsonwebtoken");
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employeeExist = yield user_model_1.UserModel.findOne({
            phone: req.body.phone,
        });
        if (employeeExist) {
            return res.status(200).send({
                message: "User already exist",
                success: true,
                result: employeeExist,
            });
        }
        else {
            const employee = yield user_model_1.UserModel.create(Object.assign({}, req.body));
            if (employee) {
                return res.status(200).send({
                    message: "User added successfully",
                    success: true,
                    result: employeeExist,
                });
            }
            else {
                return res.status(400).send({
                    message: "Failed to add user",
                    success: true,
                    result: employeeExist,
                });
            }
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
exports.signUp = signUp;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employeeExist = yield user_model_1.UserModel.findOne({
            phone: req.body.phone,
        });
        if (employeeExist) {
            return res.status(200).send({
                message: "User logged in  successfully",
                success: true,
                result: employeeExist,
                accessToken: yield createAccessTokenForAdmin(employeeExist._id),
            });
        }
        else {
            return res.status(400).send({
                message: "Failed to login",
                success: true,
                result: employeeExist,
            });
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({
            dsuccess: false,
            message: "Failed",
            error: err,
        });
    }
});
exports.login = login;
const createAccessTokenForAdmin = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    let token = (0, jsonwebtoken_1.sign)({ userId: userId, type: "ADMIN" }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "180d",
    });
    return token;
});
