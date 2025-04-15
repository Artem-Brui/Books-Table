import { LeanDocument } from "mongoose";
import Book from "../../../models/Book";
import { RequestHandlerBooks } from "../types";
import BookType from "../../../types/BookType";

const booksGET: RequestHandlerBooks = async () => {
  const books: LeanDocument<BookType>[] = await Book.find().lean();

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
