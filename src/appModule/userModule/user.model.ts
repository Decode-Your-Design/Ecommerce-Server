import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

export enum UserType {
  ADMIN = "Admin",
  VENDOR = "Vendor",
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

  @prop({})
  empAddress: String;

  @prop()
  accessControlList: [string];

  @prop({ enum: UserType })
  UserType: UserType;

  @prop()
  products: Array<Object>;
}

export const UserModel = getModelForClass(User, {
  schemaOptions: { timestamps: true },
});
