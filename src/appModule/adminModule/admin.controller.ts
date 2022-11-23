import { Response, Request, NextFunction } from "express";
import { UserModel, userType } from "../userModule/user.model";

export const getAllVendor = async (req: Request, res: Response) => {
  try {
    const vendors = await UserModel.find({
      $and:  [{userType: userType.VENDOR} , {isActive:true}]
    });
    console.log("this is vendors",vendors)
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
    const vendor = await UserModel.findByIdAndUpdate(vendorId, {
      isActive: false,
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


export const changeRole = async (req: Request, res: Response) => {
  try {
    const employeeExist = await UserModel.findOneAndUpdate({
      phone: req.body.phone,
      password:req.body.password
    },{userType:"Vendor"});

    console.log('this is user exist',employeeExist)
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