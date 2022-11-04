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
exports.getProductByType = exports.removeProduct = exports.updateProductDetails = exports.addProduct = exports.getProductById = exports.getAllProducts = void 0;
const fs = require("fs");
const product_model_1 = require("./product.model");
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.ProductModel.find({});
        if (product) {
            return res.status(200).json({
                result: product,
                success: true,
                status: 200,
            });
        }
        else {
            return res.status(500).json({
                success: false,
            });
        }
    }
    catch (e) {
        return res.status(200).json({
            success: false,
            error: e,
        });
    }
});
exports.getAllProducts = getAllProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    try {
        const product = yield product_model_1.ProductModel.find({ _id: productId });
        if (product) {
            return res.status(200).json({
                result: product,
                success: true,
                status: 200,
            });
        }
        else {
            return res.status(500).json({
                success: false,
            });
        }
    }
    catch (e) {
        return res.status(200).json({
            success: false,
            error: e,
        });
    }
});
exports.getProductById = getProductById;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.ProductModel.create(Object.assign(Object.assign({}, req.body), { vendor: req.body.user }));
        console.log(req.body);
        if (product) {
            return res.status(200).json({
                message: "Product added successfully",
                result: product,
                success: true,
            });
        }
        else {
            return res.status(500).json({
                message: "Failed to add the product",
                success: false,
            });
        }
    }
    catch (e) {
        return res.status(200).json({
            message: "Failed to add the product",
            success: false,
            error: e,
        });
    }
});
exports.addProduct = addProduct;
const updateProductDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const product = yield product_model_1.ProductModel.findByIdAndUpdate(productId, Object.assign({}, req.body));
        if (product) {
            return res.status(200).json({
                message: "Product details updated  successfully",
                result: product,
                success: true,
            });
        }
        else {
            return res.status(500).json({
                message: "Failed to update product details",
                success: false,
            });
        }
    }
    catch (e) {
        return res.status(200).json({
            message: "Failed to update the product details",
            success: false,
            error: e,
        });
    }
});
exports.updateProductDetails = updateProductDetails;
const removeProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const product = yield product_model_1.ProductModel.findByIdAndDelete(productId, {});
        if (product) {
            return res.status(200).json({
                message: "Product  removed  successfully",
                result: product,
                success: true,
            });
        }
        else {
            return res.status(500).json({
                message: "Failed to remove product ",
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
exports.removeProduct = removeProduct;
const getProductByType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { vehicleType } = req.params;
    console.log(req.params);
    try {
        const data = yield product_model_1.ProductModel.find({ vehicleType: vehicleType });
        return res.status(200).json({
            success: true,
            message: "product fetched successfully",
            result: data
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});
exports.getProductByType = getProductByType;
