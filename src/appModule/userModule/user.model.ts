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

  @prop({ })
  shopName: string;

  @prop({})
  address: string;

  @prop({ enum: userType })
  userType: userType;

  @prop({ default: true })
  isActive: boolean;

  @prop()
  chatRoomId: ObjectId;
}

export const UserModel = getModelForClass(User, {
  schemaOptions: { timestamps: true },
});
