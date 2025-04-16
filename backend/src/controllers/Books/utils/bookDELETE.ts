import { Request } from "express";
import Book from "../../../models/Book";
import { RequestHandlerBooks } from "../types";
import { seedBookToDB } from "../../../database/resetBooksInDB";
import BookType from "../../../types/BookType";
import { LeanDocument } from "mongoose";

const bookDELETE: RequestHandlerBooks = async (req: Request) => {
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

  await Book.findOneAndDelete(filter).lean();

  const isBooksListEmpty = !(await Book.find().lean()).length;

  if (isBooksListEmpty) {
    await seedBookToDB();
  }

  const updatedBooks: BookType[] | null = await Book.find();

  return { success: true, status: 200, response: updatedBooks };
};

export default bookDELETE;
