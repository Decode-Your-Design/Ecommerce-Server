import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { ChatRoom } from "./chatRoom.model";

export enum userType {
  ADMIN = "Admin",
  VENDOR = "Vendor",
  CUSTOMER = "Customer",
}

export class Message {
  readonly _id: ObjectId;

  readonly createdAt: Date;

  @prop({})
  sender: ObjectId;

  @prop({ enum: userType })
  sentBy: userType;

  @prop({ ref: () => ChatRoom })
  chatRoom: Ref<ChatRoom>;

  @prop()
  content: string;
}

export const MessageModel = getModelForClass(Message, {
  schemaOptions: { timestamps: true },
});
