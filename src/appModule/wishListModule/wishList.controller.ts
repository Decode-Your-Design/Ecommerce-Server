import { Response, Request, NextFunction } from "express";
import { ProductModel } from "../productModule/product.model";
import { WishListModel } from "./wishList.model";

export const addProduct = async (req: Request, res: Response) => {
  // console.log("this is req body", req.body);
  try {
    const { productId } = req.params;
    const product = await ProductModel.findOne({ _id: productId });
    // console.log(product);
    const addedProduct = await (
      await WishListModel.create({
        product: product?._id,
        user: req.body.user,
      })
    ).populate("product");
    if (addedProduct) {
      return res.status(200).json({
        message: "Product added to wishlist successfully",
        result: addedProduct,
        success: true,
      });
    } else {
      return res.status(403).json({
        message: "Failed to add the product to wishlist",
        success: false,
      });
    }
  } catch (e) {
    return res.status(500).json({
      message: "Failed to add the product",
      success: false,
      error: e,
    });
  }
};

export const getWishlistProduct = async (req: Request, res: Response) => {
  try {
    const product = await WishListModel.find({
      user: req.body.user,
    }).populate("product");
    if (product) {
      return res.status(200).json({
        message: "Product fetched successfully",
        result: product,
        success: true,
      });
    } else {
      return res.status(403).json({
        message: "Failed to fetch product ",
        success: false,
      });
    }
  } catch (e) {
    return res.status(500).json({
      message: "Failed",
      success: false,
      error: e,
    });
  }
};

export const removeProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    // const inWishlist = await WishListModel.findOne({$and:[{product:productId} , {user:userId}]})
    const product = await WishListModel.findOneAndRemove({$and:[{product:productId},{user:req.body.user}]})
    // console.log("this is product",product)
    if (product) {
      return res.status(200).json({
        message: "Product removed successfully",
        result: product,
        success: true,
      });
    } else {
      return res.status(402).json({
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
