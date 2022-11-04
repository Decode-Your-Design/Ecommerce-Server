import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { User } from "../../appModule/userModule/user.model";

export enum vehicleType {
  SCOOTY = "scooty",
  CAR = "car",
  BIKE = "bike",
}

export class Product {
  readonly _id: ObjectId;

  readonly createdAt: Date;

  @prop()
  name: string;

  @prop({ ref: () => User })
  vendor: Ref<User>;

  @prop()
  title: string;

  @prop({ enum: vehicleType })
  vehicleType: vehicleType;

  @prop()
  shortDesc: string;

  @prop()
  longDesc: string;

  @prop()
  price: number;

  @prop()
  offerPrice: number;

  @prop()
  url: string;

  @prop()
  imagePath: string;
}

export const ProductModel = getModelForClass(Product, {
  schemaOptions: { timestamps: true },
});
