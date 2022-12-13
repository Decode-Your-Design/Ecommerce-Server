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
exports.WishListModel = exports.WishList = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const user_model_1 = require("../../appModule/userModule/user.model");
const product_model_1 = require("../productModule/product.model");
class WishList extends product_model_1.Product {
}
__decorate([
    (0, typegoose_1.prop)({ ref: () => user_model_1.User }),
    __metadata("design:type", Object)
], WishList.prototype, "user", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => product_model_1.Product }),
    __metadata("design:type", Object)
], WishList.prototype, "product", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: false }),
    __metadata("design:type", Boolean)
], WishList.prototype, "isActive", void 0);
exports.WishList = WishList;
exports.WishListModel = (0, typegoose_1.getModelForClass)(WishList, {
    schemaOptions: { timestamps: true },
});
