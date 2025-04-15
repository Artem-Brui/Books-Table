import { Request } from "express";
import Book from "../../../models/Book";
import { RequestHandler } from "../types";
import { resetBooksInDB } from "../../../database/resetBooksInDB";
import BookType from "../../../types/BookType";
import { LeanDocument } from "mongoose";

const bookDELETE: RequestHandler = async (req: Request) => {
  if (!req.params.id) {
    return {
      success: false,
      status: 500,
      response: "Book ID for deleting is not defined...",
    };
  }

  const bookForDeletingID = req.params.id;
  const filter = { _id: bookForDeletingID };
  const bookToFind: LeanDocument<BookType> | null = await Book.findOne(
    filter
  ).lean();

  if (!bookToFind) {
    return {
      success: false,
      status: 500,
      response: `Book with ID(${bookForDeletingID}) don't exist in a base..`,
    };
  }

  const deletedBook: BookType | null =
    await Book.findOneAndDelete(filter).lean();
  const isBooksListEmpty = !(await Book.find().lean()).length;

  if (isBooksListEmpty) {
    await resetBooksInDB();
  }

  return { success: true, status: 200, response: deletedBook };
};

export default bookDELETE;
