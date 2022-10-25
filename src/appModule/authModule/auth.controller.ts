import { Response, Request, NextFunction } from "express";
import { UserType, UserModel } from "../userModule/user.model";
import { sign } from "jsonwebtoken";
export const isMobileNoExist = async (req: Request, res: Response) => {
  try {
    const employeeExist = await UserModel.findOne({
      phone: req.body.mobileNo,
      // employeeType: { $ne: EmployeeType.VENDOR }
    });
    console.log(employeeExist, req.body);
    if (employeeExist) {
      return res.status(200).send({
        message: "Mobile Number found",
        success: true,
        result: employeeExist,
        accessToken: await createAccessTokenForAdmin(employeeExist._id),
      });
    } else {
      return res.status(200).send({
        success: false,
        message: "Mobile Number  not found",
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
