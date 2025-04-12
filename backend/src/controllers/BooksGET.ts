import errorHandler from "./errorHandler";
import Book from "../models/Book";
import { Controller } from "./types";

const BooksGET: Controller = async (_req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    errorHandler(res, error);
  }
};

export default BooksGET;
