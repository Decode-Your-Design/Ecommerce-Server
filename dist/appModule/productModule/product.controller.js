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
exports.getAllProducts = exports.dealsOfTheWeek = exports.getProductByType = exports.removeProduct = exports.updateProductDetails = exports.addProduct = exports.getProductById = exports.getVendorProducts = void 0;
const fs = require("fs");
const wishList_model_1 = require("../wishListModule/wishList.model");
const product_model_1 = require("./product.model");
const getVendorProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield product_model_1.ProductModel.find({ vendor: req.body.user });
        if (data) {
            return res.status(200).json({
                message: "Product fetched successfully",
                result: data,
                success: true,
            });
        }
        else {
            return res.status(403).json({
                message: "Unable to fetch products",
                success: false,
            });
        }
    }
    catch (e) {
        return res.status(500).json({
            success: false,
            error: e,
        });
    }
});
exports.getVendorProducts = getVendorProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, userId } = req.params;
    try {
        const product = yield product_model_1.ProductModel.find({ _id: productId }).populate('vendor');
        if (product) {
            if (userId !== null && userId !== "null") {
                const inWishlist = yield wishList_model_1.WishListModel.findOne({
                    $and: [{ product: productId }, { user: userId }],
                });
                if (inWishlist) {
                    return res.status(200).json({
                        inWishlist: true,
                        result: product[0],
                        success: true,
                    });
                }
                else {
                    return res.status(200).json({
                        inWishlist: false,
                        result: product[0],
                        success: true,
                    });
                }
            }
            else {
                return res.status(200).json({
                    inWishlist: false,
                    result: product[0],
                    success: true,
                });
            }
        }
        else {
            return res.status(403).json({
                success: false,
            });
        }
    }
    catch (e) {
        return res.status(500).json({
            success: false,
            error: e,
        });
    }
});
exports.getProductById = getProductById;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let frontImage = {
            data: fs.readFileSync("uploads/" + req.files[0].filename),
            contentType: "image/png",
        };
        let backImage = {
            data: fs.readFileSync("uploads/" + req.files[1].filename),
            contentType: "image/png",
        };
        let leftImage = {
            data: fs.readFileSync("uploads/" + req.files[2].filename),
            contentType: "image/png",
        };
        let rightImage = {
            data: fs.readFileSync("uploads/" + req.files[3].filename),
            contentType: "image/png",
        };
        const product = yield product_model_1.ProductModel.create(Object.assign(Object.assign({}, req.body), { frontImage: frontImage, backImage: backImage, leftImage: leftImage, rightImage: rightImage, vendor: req.body.user }));
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
const dealsOfTheWeek = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_model_1.ProductModel.find({});
        const topMostProducts = products.filter((product) => (product.price / product.offerPrice >= 2));
        if (topMostProducts.length > 0) {
            return res.status(200).json({
                success: true,
                message: "Product fetched successfully",
                result: topMostProducts
            });
        }
        else {
            const secondTopMostProducts = products.filter((product) => (product.price / product.offerPrice >= 1.5));
            if (secondTopMostProducts.length > 0) {
                return res.status(200).json({
                    success: true,
                    message: "Product fetched successfully",
                    result: secondTopMostProducts
                });
            }
            else {
                return res.status(200).json({
                    success: true,
                    message: "Product fetched successfully",
                    result: products.slice(0, 5)
                });
            }
        }
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});
exports.dealsOfTheWeek = dealsOfTheWeek;
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
