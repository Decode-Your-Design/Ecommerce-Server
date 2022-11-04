import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

export enum userType {
  ADMIN = "Admin",
  VENDOR = "Vendor",
  CUSTOMER = "Customer",
}

export class User {
  readonly _id: ObjectId;

  readonly createdAt: Date;

  @prop()
  fullName: string;

  @prop()
  email?: string;

  @prop({ required: true })
  phone: string;

  @prop({ required: true })
  password: string;

  // @prop({ required: true })
  shopName: string;

  @prop({})
  address: string;

  @prop({})
  wishlist: [];

  @prop({ enum: userType })
  userType: userType;

  @prop({default: false})
  isActive:boolean
}

export const UserModel = getModelForClass(User, {
  schemaOptions: { timestamps: true },
});
