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
exports.UserModel = exports.User = exports.userType = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const mongodb_1 = require("mongodb");
var userType;
(function (userType) {
    userType["ADMIN"] = "Admin";
    userType["VENDOR"] = "Vendor";
    userType["CUSTOMER"] = "Customer";
})(userType = exports.userType || (exports.userType = {}));
class User {
}
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], User.prototype, "fullName", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], User.prototype, "shopName", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, typegoose_1.prop)({ enum: userType }),
    __metadata("design:type", String)
], User.prototype, "userType", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: true }),
    __metadata("design:type", Boolean)
], User.prototype, "isActive", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", mongodb_1.ObjectId)
], User.prototype, "chatRoomId", void 0);
exports.User = User;
exports.UserModel = (0, typegoose_1.getModelForClass)(User, {
    schemaOptions: { timestamps: true },
});
