import { Response, Request, NextFunction } from "express";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { ProductModel } from "../productModule/product.model";
import { UserModel, userType } from "../userModule/user.model";

export const getAllVendor = async (req: Request, res: Response) => {
  try {
    const vendors = await UserModel.find({
      $and: [{ userType: userType.VENDOR }, { isActive: true }],
    });
    console.log("this is vendors", vendors);
    // ({ $and: [{ age: { $gt: 2 } }, { age: { $lte: 4 } }] }
    if (vendors) {
      return res.status(200).json({
        message: "vendors fetched successfully",
        result: vendors,
        success: true,
      });
    } else {
      return res.status(400).json({
        message: "Failed to fetch vendors ",
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

export const removeVendor = async (req: Request, res: Response) => {
  try {
    const { vendorId } = req.params;
    const Vendor = await UserModel.findByIdAndUpdate(vendorId, {
      isActive: false,
    });
    const products = await ProductModel.find({vendor: vendorId});
    products.forEach(async element => {
      await ProductModel.findByIdAndRemove(element['_id'])
    });
    if (Vendor) {
      return res.status(200).json({
        message: "Vendor removed successfully",
        result: Vendor,
        success: true,
      });
    } else {
      return res.status(400).json({
        message: "Failed to remove vendor ",
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

export const changeRole = async (req: Request, res: Response) => {
  try {
    const employeeExist = await UserModel.findOneAndUpdate(
      {
        phone: req.body.phone,
        password: req.body.password,
      },
      req.body
    );

    console.log("this is user exist", employeeExist);
    if (employeeExist) {
      return res.status(200).send({
        message: "Vendor Added Successfully",
        success: true,
      });
    } else {
      return res.status(200).send({
        message: "User does not exist",
        success: false,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(200).send({
      dsuccess: false,
      message: "Failed",
      error: err,
    });
  }
};
