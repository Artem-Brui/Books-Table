import { model, Schema } from "mongoose";

const bookSchema = new Schema({
  title: {
    type: String,
    default: true,
    require: true,
  },
  name: {
    type: String,
    default: true,
    require: true,
  },
  category: {
    type: String,
    default: true,
    require: true,
  },
  isbn: {
    type: String,
    default: true,
    require: true,
  },
  createdAt: {
    type: Date,
    default: true,
    require: true,
  },
  editedAt: {
    type: Date || null,
    default: true,
    require: true,
  },
  isActive: {
    type: Boolean,
    default: true,
    require: true,
  },
});

const Book = model("Book", bookSchema, 'Books');

export default Book;
