import Book from "../../../models/Book";
import { RequestHandler } from "../types";

const booksGET: RequestHandler = async () => {
  const books = await Book.find().lean();

  if (!books) {
    return {
      success: false,
      status: 500,
      response: "Books are not defined...",
    };
  }

  if (!books.length) {
    return { success: false, status: 500, response: "Books list is empty..." };
  }

  return { success: true, status: 200, response: books };
};

export default booksGET;
