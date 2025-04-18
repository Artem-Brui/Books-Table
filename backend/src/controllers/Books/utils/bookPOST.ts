import { Request } from "express";
import Book from "../../../models/Book";
import BookType from "../../../types/BookType";
import { RequestBodyPOST, RequestHandlerBooks } from "../types";
import { LeanDocument } from "mongoose";

const bookPOST: RequestHandlerBooks = async (req: Request) => {
  if (!req.body) {
    return {
      success: false,
      status: 500,
      response: "Request body is not defined...",
    };
  }

  const { isbn: newBookISBN } = req.body as RequestBodyPOST;
  const filter = { isbn: newBookISBN };
  const bookToFind = await Book.findOne(filter);

  if (bookToFind) {
    return {
      success: false,
      status: 500,
      response: `Book with the same ISBN(${bookToFind.isbn}) already exist in a base..`,
    };
  }

  const newBook: BookType = {
    ...req.body,
    isActive: true,
    createdAt: new Date().toISOString(),
    editedAt: null,
  };

  await Book.create(newBook);
  const responsedBooks: LeanDocument<BookType>[] = await Book.find().lean();

  return { success: true, status: 200, response: responsedBooks };
};

export default bookPOST;
