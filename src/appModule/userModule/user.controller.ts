import { vendorModel } from "./user.model";
import { Request } from "express";
import { Response } from "express";
import { ProductModel } from "../productModule/product.model";

export const vendorSignup = async (req: Request, res: Response) => {
  try {
    const { email, phone } = req.body;
    const user = await vendorModel.findOne({
      $or: [{ email: email }, { phone: phone }],
    });

    if (user) {
      return res.status(200).json({
        result: user,
        message:
          user.email == email
            ? "Email already exist"
            : user.phone == req.body.phone
            ? "phone number already exist"
            : "",
        success: false,
      });
    } else {
      await vendorModel.create({ ...req.body });
      return res.status(200).send({
        message: "Vendor added successfully",
        success: true,
        result: user,
      });
    }
  } catch (e) {
    return res.status(200).json({
      success: false,
      error: e,
    });
  }
};

export const verifyOtp = async (req: Request, response: Response) => {
  try {
    const data = new vendorModel(req.body);
    await data.save();
  } catch (error) {
    console.log("error calling vendor sign  up api", error.message);
  }
};

export const vendorLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const response = await vendorModel.findOne({
    $or: [{ email: email }, { phone: password }],
  });
  if (response) {
    console.log("User logged in successfully");
  } else {
    console.log("User is not authenticated");
  }
};

export const vendorAddProduct = async (req: Request, res: Response) => {
  const { vendorId } = req.params;
  const query = { _id: vendorId };
  try {
    const product = {
      name: "test product2 ",
    };
    await vendorModel.updateOne(query, { $push: { products: product } });
  const data= new ProductModel(product)
  data.save()
  } catch (error) {
    console.log("error calling vendor sign  up api", error.message);
  }
};

export const getVendors = async (req: Request, res: Response) => {
  try {
    const data = await vendorModel.find({});
  } catch (error) {
    console.log("error calling vendor sign  up api", error.message);
  }
};

export const vendorGetProducts = async (req: Request, res: Response) => {
  const { vendorId } = req.params;
  try {
    const data = await vendorModel.find({ _id: vendorId });
  } catch (error) {
    console.log("error calling vendor sign  up api", error.message);
  }
};
