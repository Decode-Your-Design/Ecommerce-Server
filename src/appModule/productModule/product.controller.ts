const fs = require("fs");
import { Response, Request, NextFunction } from "express";
import { rmSync } from "fs";
import { JsonWebTokenError } from "jsonwebtoken";
import { verifyJwtToken } from "src/utils/middleware/verify-jwt-token";
import { WishListModel } from "../wishListModule/wishList.model";
import { ProductModel } from "./product.model";

export const getVendorProducts = async (req: Request, res: Response) => {
  try {
    const data = await ProductModel.find({ vendor: req.body.user });
    console.log("this is data", data);
    if (data) {
      return res.status(200).json({
        message: "Product fetched successfully",
        result: data,
        success: true,
      });
    } else {
      return res.status(403).json({
        message: "Unable to fetch products",
        success: true,
      });
    }
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: e,
    });
  }
};
export const getProductById = async (req: Request, res: Response) => {
  const { productId, userId } = req.params;
  console.log("this is user id", typeof userId, productId);

  try {
    const product = await ProductModel.find({ _id: productId });
    if (product) {
      if (userId !== null && userId !== "null") {
        const inWishlist = await WishListModel.findOne({
          $and: [{ product: productId }, { user: userId }],
        });
        if (inWishlist) {
          return res.status(200).json({
            inWishlist: true,
            result: product[0],
            success: true,
          });
        } else {
          return res.status(200).json({
            inWishlist: false,
            result: product[0],
            success: true,
          });
        }
      } else {
        return res.status(200).json({
          inWishlist: false,
          result: product[0],
          success: true,
        });
      }
    } else {
      return res.status(403).json({
        success: false,
      });
    }
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: e,
    });
  }
};

export const addProduct = async (req: any, res: Response) => {
  try {
    let img = {
      data: fs.readFileSync("uploads/" + req.file.filename),
      contentType: "image/png",
    };
    const product = await ProductModel.create({
      ...req.body,
      img:img,
      vendor: req.body.user,
    });
    
    if (product) {
      return res.status(200).json({
        message: "Product added successfully",
        result: product,
        success: true,
      });
    } else {
      return res.status(500).json({
        message: "Failed to add the product",
        success: false,
      });
    }
  } catch (e) {
    return res.status(200).json({
      message: "Failed to add the product",
      success: false,
      error: e,
    });
  }
};

export const updateProductDetails = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const product = await ProductModel.findByIdAndUpdate(productId, {
      ...req.body,
    });
    if (product) {
      return res.status(200).json({
        message: "Product details updated  successfully",
        result: product,
        success: true,
      });
    } else {
      return res.status(500).json({
        message: "Failed to update product details",
        success: false,
      });
    }
  } catch (e) {
    return res.status(200).json({
      message: "Failed to update the product details",
      success: false,
      error: e,
    });
  }
};

export const removeProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const product = await ProductModel.findByIdAndDelete(productId, {});
    if (product) {
      return res.status(200).json({
        message: "Product  removed  successfully",
        result: product,
        success: true,
      });
    } else {
      return res.status(500).json({
        message: "Failed to remove product ",
        success: false,
      });
    }
  } catch (e) {
    return res.status(200).json({
      message: "Failed",
      success: false,
      error: e,
    });
  }
};

export const getProductByType = async (req: Request, res: Response) => {
  const { vehicleType } = req.params;
  console.log(req.params);
  try {
    const data = await ProductModel.find({ vehicleType: vehicleType });
    console.log("this is data", data);
    return res.status(200).json({
      success: true,
      message: "product fetched successfully",
      result: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const product = await ProductModel.find({});
    if (product) {
      return res.status(200).json({
        result: product,
        success: true,
        status: 200,
      });
    } else {
      return res.status(500).json({
        success: false,
      });
    }
  } catch (e) {
    return res.status(200).json({
      success: false,
      error: e,
    });
  }
};


// how to use image in frontend
// <img src={`data:image/png;base64,${base64String}`} width="300"/>