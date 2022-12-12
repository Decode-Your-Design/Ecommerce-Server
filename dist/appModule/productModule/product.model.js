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
exports.ProductModel = exports.Product = exports.vehicleType = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const user_model_1 = require("../../appModule/userModule/user.model");
var vehicleType;
(function (vehicleType) {
    vehicleType["SCOOTY"] = "scooty";
    vehicleType["CAR"] = "car";
    vehicleType["BIKE"] = "bike";
})(vehicleType = exports.vehicleType || (exports.vehicleType = {}));
class Product {
}
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => user_model_1.User }),
    __metadata("design:type", Object)
], Product.prototype, "vendor", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    (0, typegoose_1.prop)({ enum: vehicleType }),
    __metadata("design:type", String)
], Product.prototype, "vehicleType", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Product.prototype, "shortDesc", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Product.prototype, "longDesc", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], Product.prototype, "offerPrice", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Object)
], Product.prototype, "frontImage", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Object)
], Product.prototype, "backImage", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Object)
], Product.prototype, "leftImage", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Object)
], Product.prototype, "rightImage", void 0);
exports.Product = Product;
exports.ProductModel = (0, typegoose_1.getModelForClass)(Product, {
    schemaOptions: { timestamps: true },
});
