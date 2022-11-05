import { Response, Request, NextFunction } from "express";
import { rmSync } from "fs";
const fs = require("fs");
import { ProductModel } from "./product.model";

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

export const getProductById = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const product = await ProductModel.find({ _id: productId });
    if (product) {
      return res.status(200).json({
        result: product[0],
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

export const addProduct = async (req: any, res: Response) => {
  try {
    const product = await ProductModel.create({
      ...req.body,
      vendor: req.body.user,
    });
    console.log(req.body);
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
    const product = await ProductModel.findByIdAndUpdate(productId, { ...req.body });
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


export const getProductByType = async(req:Request,res:Response)=>{
  const {vehicleType} = req.params;
  console.log(req.params)
  try{
    const data = await ProductModel.find({vehicleType:vehicleType});
    console.log("this is data",data)
      return res.status(200).json({
        success:true,
        message:"product fetched successfully",
        result:data
      })
    
  }
  catch(error){
    return res.status(500).json({
      success:false,
      message:"Internal server error",

    })
  }
  
}
