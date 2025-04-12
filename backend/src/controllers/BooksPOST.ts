import errorHandler from "./errorHandler";
import Book from "../models/Book";
import { Controller } from "./types";

const BooksPOST: Controller = async (req, res) => {
  try {
    const newBook = {
      ...req.body,
      createdAt: new Date().toISOString(),
      editedAt: null,
    }

    const responsedBook = await Book.create(newBook);
    res.status(200).json(responsedBook)
  } catch (error) {
    errorHandler(res, error);
  }
};

export default BooksPOST;
