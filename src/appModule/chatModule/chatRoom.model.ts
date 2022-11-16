import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { User } from "../userModule/user.model";

export class ChatRoom {
  readonly _id: ObjectId;

  readonly createdAt: Date;

  @prop({ ref: () => User })
  vendor: Ref<User>;

  @prop()
  admin: ObjectId;
}

export const ChatRoomModel = getModelForClass(ChatRoom, {
  schemaOptions: { timestamps: true },
});
