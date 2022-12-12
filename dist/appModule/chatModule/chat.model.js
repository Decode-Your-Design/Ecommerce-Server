"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageModel = exports.Message = exports.userType = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const mongodb_1 = require("mongodb");
const chatRoom_model_1 = require("./chatRoom.model");
var userType;
(function (userType) {
    userType["ADMIN"] = "Admin";
    userType["VENDOR"] = "Vendor";
    userType["CUSTOMER"] = "Customer";
})(userType = exports.userType || (exports.userType = {}));
class Message {
}
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", mongodb_1.ObjectId)
], Message.prototype, "sender", void 0);
__decorate([
    (0, typegoose_1.prop)({ enum: userType }),
    __metadata("design:type", String)
], Message.prototype, "sentBy", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => chatRoom_model_1.ChatRoom }),
    __metadata("design:type", Object)
], Message.prototype, "chatRoom", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Message.prototype, "content", void 0);
exports.Message = Message;
exports.MessageModel = (0, typegoose_1.getModelForClass)(Message, {
    schemaOptions: { timestamps: true },
});
