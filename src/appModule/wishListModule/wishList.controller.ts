import { Response, Request, NextFunction } from "express";
import { ProductModel } from "../productModule/product.model";
import { WishListModel } from "./wishList.model";

export const addProduct = async (req: any, res: Response) => {
  try {
    const { _id } = req.body;
    const product = await ProductModel.findOne({ _id: _id });
    console.log(product);
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
      return res.status(400).json({
        message: "Failed to add the product to wishlist",
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

export const getProduct = async (req: any, res: Response) => {
  try {
    const addedProduct = await await WishListModel.find({
      user: req.body.user,
    }).populate("product");
    if (addedProduct) {
      return res.status(200).json({
        message: "Product fetched successfully",
        result: addedProduct,
        success: true,
      });
    } else {
      return res.status(400).json({
        message: "Failed to fetch product ",
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
