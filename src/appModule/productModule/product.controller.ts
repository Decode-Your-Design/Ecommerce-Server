import { Response, Request } from "express";
import { ProductModel } from "./product.model";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const product = await ProductModel.find({});

    if (product) {
      return res.status(200).json({
        result: product,
        success: true,
      });
    } else {
      return res.status(200).json({
        success: false,
      });
    }
  } catch (e) {
    return res.status(200).json({
      success: false,
      error: e,
    });
  }
};
