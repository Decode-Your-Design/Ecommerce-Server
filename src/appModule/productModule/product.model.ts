import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { User } from "../../appModule/userModule/user.model";

export class Product {
  readonly _id: ObjectId;

  readonly createdAt: Date;

  @prop()
  name: string;

  @prop({ ref: () => User })
  vendor: Ref<User>;

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

  @prop({ required: true })
  imagePath: string;
}

export const ProductModel = getModelForClass(Product, {
  schemaOptions: { timestamps: true },
});
