import { UserModel } from "./user.model";
import { Request } from "express";
import { Response } from "express";
import { ProductModel } from "../productModule/product.model";
import { ChatRoomModel } from "../chatModule/chatRoom.model";

export const addUser = async (req: any, res: Response) => {
  try {
    const employee = await UserModel.findOne({ phone: req.body.phone });
    console.log();
    if (employee) {
      return res.status(200).send({
        message:
          employee.phone == req.body.phone ? "phone number already exist" : "",
        success: false,
        result: employee,
      });
    } else {
      const employee = await UserModel.create({ ...req.body });
      const chatRoom = await ChatRoomModel.create({
        vendor: employee._id,
        admin: req.body.user,
      });
      console.log(chatRoom);
      const newChatRoom = await UserModel.findByIdAndUpdate(employee._id, {
        chatRoomId: chatRoom._id,
      });

      if (employee) {
        return res.status(200).send({
          message: "Employee added successfully",
          success: true,
          result: employee,
        });
      } else {
        return res.status(200).send({
          message: "Failed to add employee",
          success: false,
        });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(200).send({
      success: false,
      message: "Failed to create the service",
      error: error,
    });
  }
};

export const fetchUserInfo = async (req: Request, res: Response) => {
  try {
    const userInfo = await UserModel.find({
      _id: req.body.user,
    });
    if (userInfo) {
      return res.status(200).json({
        message: "User information fetched successfully",
        result: userInfo,
        success: true,
      });
    } else {
      return res.status(400).json({
        message: "Failed to fetch user ",
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

export const updateUserInfo = async (req: Request, res: Response) => {
  try {
    const { _id } = req.body.user;
    const updatedUser = await UserModel.findByIdAndUpdate(_id, { ...req.body });
    if (updatedUser) {
      return res.status(200).json({
        message: "User information updated successfully",
        result: updatedUser,
        success: true,
      });
    } else {
      return res.status(400).json({
        message: "Failed to updated user ",
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
