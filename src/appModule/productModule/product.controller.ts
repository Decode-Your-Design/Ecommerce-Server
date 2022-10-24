import { Response, Request } from "express";
import { ProductModel } from "./product.model";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const product = await ProductModel.find({});
    if (product) {
      return res.status(200).json({
        result: product,
        success: true,
        status:200
      });
    } else {
      return res.status(500).json({
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

export const getProductById = async (req: Request, res: Response) => {
  const {productId} = req.params
  try {
    const product = await ProductModel.find({_id:productId});
    if (product) {
      return res.status(200).json({
        result: product,
        success: true,
        status:200
      });
    } else {
      return res.status(500).json({
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

