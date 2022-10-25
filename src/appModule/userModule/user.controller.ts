import { UserModel } from "./user.model";
import { Request } from "express";
import { Response } from "express";
import { ProductModel } from "../productModule/product.model";

export const addUser = async (req: any, res: Response) => {
  try {
    const employee = await UserModel.findOne({
      $or: [{ email: req.body.email }, { phone: req.body.phone }],
    });
    console.log(employee);
    if (employee) {
      return res.status(200).send({
        message:
          employee.email == req.body.email
            ? "Email already exist "
            : employee.phone == req.body.phone
            ? "phone number already exist"
            : "",
        success: false,
        result: employee,
      });
    } else {
      // req.body.accessControlList = JSON.parse(req.body.accessControlList);
      await UserModel.create({ ...req.body });
      return res.status(200).send({
        message: "Employee added successfully",
        success: true,
        result: employee,
      });
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

// export const vendorSignup = async (req: Request, res: Response) => {
//   try {
//     const { email, phone } = req.body;
//     const user = await UserModel.findOne({
//       $or: [{ email: email }, { phone: phone }],
//     });
//     if (user) {
//       return res.status(200).json({
//         result: user,
//         message:
//           user.email == email
//             ? "Email already exist"
//             : user.phone == req.body.phone
//             ? "phone number already exist"
//             : "",
//         success: false,
//       });
//     } else {
//       await UserModel.create({ ...req.body });
//       return res.status(200).send({
//         message: "Vendor added successfully",
//         success: true,
//         result: user,
//       });
//     }
//   } catch (e) {
//     return res.status(200).json({
//       success: false,
//       error: e,
//     });
//   }
// };

// export const verifyOtp = async (req: Request, response: Response) => {
//   try {
//     const data = new UserModel(req.body);
//     await data.save();
//   } catch (error) {
//     console.log("error calling vendor sign  up api", error.message);
//   }
// };

// export const vendorLogin = async (req: Request, res: Response) => {
//   const { email, password } = req.body;
//   UserModel.find({ email: email, password: password }, function (err, res) {
//     if (res.length > 0) {
//       console.log("User logged in successfully");
//     } else {
//       console.log("User is not authenticated");
//     }
//   });
// };

// export const vendorAddProduct = async (req: Request, res: Response) => {
//   const { vendorId } = req.params;
//   const query = { _id: vendorId };
//   try {
//     const product = {
//       name: "test product ",
//     };
//     await UserModel.updateOne(query, { $push: { products: product } });
//   } catch (error) {
//     console.log("error calling vendor sign  up api", error.message);
//   }
// };

// export const getVendors = async (req: Request, res: Response) => {
//   try {
//     const data = await UserModel.find({});
//   } catch (error) {
//     console.log("error calling vendor sign  up api", error.message);
//   }
// };

// export const vendorGetProducts = async (req: Request, res: Response) => {
//   const { vendorId } = req.params;
//   try {
//     const data = await UserModel.find({ _id: vendorId });
//   } catch (error) {
//     console.log("error calling vendor sign  up api", error.message);
//   }
// };
