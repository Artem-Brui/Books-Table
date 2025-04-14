import { model, Schema } from "mongoose";

const bookSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  isbn: {
    type: String,
    require: true,
  },
  createdAt: {
    type: String,
    require: true,
  },
  editedAt: {
    type: String || null,
    default: null,
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
