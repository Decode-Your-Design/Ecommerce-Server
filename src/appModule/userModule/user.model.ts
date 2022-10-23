import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

export class Vendor {
//   readonly _id: ObjectId;
//   readonly createdAt: Date;
  @prop()
  name: String;
  @prop()
  email:String;
  @prop()
  password:String;
  @prop()
  phone: Number;
  @prop()
  products: Array<Object>;

}

export const vendorModel = getModelForClass(Vendor, {
  schemaOptions: { timestamps: true },
});
