import { Request } from "express";
import { Response } from "express";
import { ContactModel } from "./contact.model";

export const contactAdmin = async (req: any, res: Response) => {
  try {
    const details = await ContactModel.create({ ...req.body });
    if (details) {
      return res.status(200).send({
        message: "contact query created successfully",
        success: false,
        result: details,
      });
    } else {
      return res.status(200).send({
        message: "Failed to create ",
        success: false,
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

export const getContactQuery = async (req: any, res: Response) => {
  try {
    const details = await ContactModel.find({});
    if (details) {
      return res.status(200).send({
        message: "contact query fetched successfully",
        success: false,
        result: details,
      });
    } else {
      return res.status(200).send({
        message: "Failed to fetched ",
        success: false,
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
