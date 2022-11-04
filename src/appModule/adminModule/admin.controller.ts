import { Response, Request, NextFunction } from "express";
import { UserModel, userType } from "../userModule/user.model";

export const getAllVendor = async (req: Request, res: Response) => {
  try {
    const vendors = await UserModel.find({
      userType: userType.VENDOR,
    });
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
    const vendor = await UserModel.findByIdAndUpdate(vendorId, {
      isActive: true,
    });
    if (vendor) {
      return res.status(200).json({
        message: "vendor removed successfully",
        result: vendor,
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
