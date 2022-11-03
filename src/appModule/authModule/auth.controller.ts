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
        success: true,
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
  try {
    const employeeExist = await UserModel.findOne({
      phone: req.body.phone,
    });

    if (employeeExist) {
      return res.status(200).send({
        message: "User logged in  successfully",
        success: true,
        result: employeeExist,
        accessToken: await createAccessTokenForAdmin(employeeExist._id),
      });
    } else {
      return res.status(400).send({
        message: "Failed to login",
        success: true,
        result: employeeExist,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      dsuccess: false,
      message: "Failed",
      error: err,
    });
  }
};
const createAccessTokenForAdmin = async (userId: any): Promise<string> => {
  let token = sign(
    { userId: userId, type: "ADMIN" },
    process.env.ACCESS_TOKEN_SECRET!,
    {
      expiresIn: "180d",
    }
  );
  return token;
};

// accessToken: await createAccessTokenForAdmin(employeeExist._id),
