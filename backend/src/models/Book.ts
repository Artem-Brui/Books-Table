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
    type: Date,
    default: new Date().toISOString(),
    require: true,
  },
  editedAt: {
    type: Date || null,
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
