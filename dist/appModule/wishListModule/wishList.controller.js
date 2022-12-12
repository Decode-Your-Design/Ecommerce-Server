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
exports.removeProduct = exports.getWishlistProduct = exports.addProduct = void 0;
const product_model_1 = require("../productModule/product.model");
const wishList_model_1 = require("./wishList.model");
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const product = yield product_model_1.ProductModel.findOne({ _id: productId });
        const addedProduct = yield (yield wishList_model_1.WishListModel.create({
            product: product === null || product === void 0 ? void 0 : product._id,
            user: req.body.user,
        })).populate("product");
        if (addedProduct) {
            return res.status(200).json({
                message: "Product added to wishlist successfully",
                result: addedProduct,
                success: true,
            });
        }
        else {
            return res.status(403).json({
                message: "Failed to add the product to wishlist",
                success: false,
            });
        }
    }
    catch (e) {
        return res.status(500).json({
            message: "Failed to add the product",
            success: false,
            error: e,
        });
    }
});
exports.addProduct = addProduct;
const getWishlistProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield wishList_model_1.WishListModel.find({
            user: req.body.user,
        }).populate("product");
        if (product) {
            return res.status(200).json({
                message: "Product fetched successfully",
                result: product,
                success: true,
            });
        }
        else {
            return res.status(403).json({
                message: "Failed to fetch product ",
                success: false,
            });
        }
    }
    catch (e) {
        return res.status(500).json({
            message: "Failed",
            success: false,
            error: e,
        });
    }
});
exports.getWishlistProduct = getWishlistProduct;
const removeProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const product = yield wishList_model_1.WishListModel.findOneAndRemove({ $and: [{ product: productId }, { user: req.body.user }] });
        if (product) {
            return res.status(200).json({
                message: "Product removed successfully",
                result: product,
                success: true,
            });
        }
        else {
            return res.status(402).json({
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
