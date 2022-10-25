import { NextFunction, request, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserModel } from "../../appModule/userModule/user.model";


export const verifyJwtToken = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const authorization: string = req.headers.authorization || "";

  if (authorization) {
    const token = authorization.split(" ")[1];
    const payload: any = verify(token, process.env.ACCESS_TOKEN_SECRET!);
    if (payload.type != undefined) {
      const user = await UserModel.findById(payload.userId).exec();
      if (user) {
        req.body.user = user._id;
        req.body.accessUserRole = user.UserType;

        return next();
      } else {
        res.status(401).json({ message: "You are not authenticated." });
      }
    }
  } else {
    res.status(401).json({ message: "You are not authenticated." });
  }
  return { user: null };
};
