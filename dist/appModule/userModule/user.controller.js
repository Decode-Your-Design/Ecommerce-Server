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
exports.updateUserInfo = exports.fetchUserInfo = exports.addUser = void 0;
const user_model_1 = require("./user.model");
const chatRoom_model_1 = require("../chatModule/chatRoom.model");
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = yield user_model_1.UserModel.findOne({ phone: req.body.phone });
        console.log();
        if (employee) {
            return res.status(200).send({
                message: employee.phone == req.body.phone ? "phone number already exist" : "",
                success: false,
                result: employee,
            });
        }
        else {
            const employee = yield user_model_1.UserModel.create(Object.assign({}, req.body));
            const chatRoom = yield chatRoom_model_1.ChatRoomModel.create({
                vendor: employee._id,
                admin: req.body.user,
            });
            console.log(chatRoom);
            const newChatRoom = yield user_model_1.UserModel.findByIdAndUpdate(employee._id, {
                chatRoomId: chatRoom._id,
            });
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
const fetchUserInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("dfsfdgn", req.body.user);
    try {
        const userInfo = yield user_model_1.UserModel.findOne({
            _id: req.body.user,
        });
        console.log("this is user info", userInfo);
        if (userInfo) {
            return res.status(200).json({
                message: "User information fetched successfully",
                result: userInfo,
                success: true,
            });
        }
        else {
            return res.status(400).json({
                message: "Failed to fetch user ",
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
exports.fetchUserInfo = fetchUserInfo;
const updateUserInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("this is req", req.body);
        const { _id } = req.body.user;
        const data = new user_model_1.UserModel(req.body);
        console.log("this si datya", data);
        const updatedUser = yield user_model_1.UserModel.findOneAndUpdate({ _id: req.body.user }, data);
        console.log("thsi is updated user", updatedUser);
        if (updatedUser) {
            return res.status(200).json({
                message: "User information updated successfully",
                result: updatedUser,
                success: true,
            });
        }
        else {
            return res.status(400).json({
                message: "Failed to updated user ",
                success: false,
            });
        }
    }
    catch (e) {
        console.log("this is errro0", e.message);
        return res.status(500).json({
            message: "Failed",
            success: false,
            error: e,
        });
    }
});
exports.updateUserInfo = updateUserInfo;
