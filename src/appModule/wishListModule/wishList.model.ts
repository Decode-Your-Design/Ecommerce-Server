import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { User } from "../../appModule/userModule/user.model";
import { Product } from "../productModule/product.model";

export class WishList extends Product {
  readonly _id: ObjectId;

  readonly createdAt: Date;

  @prop({ ref: () => User })
  user: Ref<User>;

  @prop({ ref: () => Product })
  product: Ref<Product>;

  @prop({default: false})
  isActive:boolean
}

export const WishListModel = getModelForClass(WishList, {
  schemaOptions: { timestamps: true },
});
