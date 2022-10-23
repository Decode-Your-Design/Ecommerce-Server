import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

export class Product {
  readonly _id: ObjectId;

  readonly createdAt: Date;

  @prop()
  name: string;

  @prop()
  title: string;

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
}

export const ProductModel = getModelForClass(Product, {
  schemaOptions: { timestamps: true },
});
