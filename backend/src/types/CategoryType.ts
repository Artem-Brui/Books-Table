import { ObjectId } from "mongoose";

export default interface CategoryType {
  name: string;
  _id?: ObjectId;
  _v?: number;
}
