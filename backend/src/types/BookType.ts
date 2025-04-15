import { ObjectId } from "mongoose";

export default interface BookType {
  title: string;
  name: string;
  category: string;
  isbn: string;
  createdAt: string;
  editedAt: null | string;
  isActive: boolean;
  _id?: ObjectId;
  __v?: number;
}
