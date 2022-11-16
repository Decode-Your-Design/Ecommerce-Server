import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

export class Contact {
  readonly _id: ObjectId;

  readonly createdAt: Date;

  @prop({})
  fullName: string;

  @prop()
  address: string;

  @prop()
  phone: string;

  @prop()
  message: string;
}

export const ContactModel = getModelForClass(Contact, {
  schemaOptions: { timestamps: true },
});
