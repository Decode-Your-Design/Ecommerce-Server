import { Response, Request, NextFunction } from "express";
import { userType, UserModel } from "../userModule/user.model";
import { sign } from "jsonwebtoken";

export const signUp = async (req: Request, res: Response) => {
  try {
    const employeeExist = await UserModel.findOne({
      phone: req.body.phone,
    });

    if (employeeExist) {
      return res.status(200).send({
        message: "User already exist",
        success: false,
        result: employeeExist,
      });
    } else {
      const employee = await UserModel.create({ ...req.body });
      if (employee) {
        return res.status(200).send({
          message: "User added successfully",
          success: true,
          result: employeeExist,
        });
      } else {
        return res.status(400).send({
          message: "Failed to add user",
          success: true,
          result: employeeExist,
        });
      }
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

export const login = async (req: Request, res: Response) => {
  let employeeExist
  try {
    const {password, userType, phone} = req.body;
    const employee = await UserModel.findOne({
      phone: req.body.phone,
    });
    if (employee == null) {
      return res.status(200).send({
        success: false,
        message: "Not a valid email and password",
      });
    } else {
      if (employee['password'] != null) {
        if (employee['password'] != password) {
          return res.status(200).json({ success: false });
        }
        return res.status(201).json({
          success: true,
          result: employee,
          message: "logged in successfully",
          accessToken: await createAccessToken(
            employee._id,
            employee.userType
          ),
        });
      } else {
        return res.status(200).json({
          success: false,
        });
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "Failed",
      error: err,
    });
  }
};

export const changePassword = async (req: Request, res: Response) => {
  console.log("this is",req.body)
  try {
    const { newPassword } = req.body;
    const updatedUser = await UserModel.findByIdAndUpdate(req.body.user, {
      password: newPassword,
    });
    if (updatedUser) {
      return res.status(200).json({
        message: "User password updated successfully",
        result: updatedUser,
        success: true,
      });
    } else {
      return res.status(400).json({
        message: "Failed to updated user password ",
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

const createAccessTokenForAdmin = async (userId: any): Promise<string> => {
  
  let token = sign(
    { userId: userId, type: "ADMIN" },
    'future35',
    {
      expiresIn: "180d",
    }
  );
  return token;
};
 const createAccessToken = async (userId: any, type: string): Promise<string> => {
  let token = sign({ userId, type }, 'future35', {
  });
  return token;
};
// accessToken: await createAccessTokenForAdmin(employeeExist._id),
