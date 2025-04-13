import { Request } from "express";
import Book from "../../../models/Book";
import BookType from "../../../types/BookType";
import { RequestBodyPOST, RequestHandler } from "../types";

const bookPOST: RequestHandler = async (req: Request) => {
  if (!req.body) {
    return {
      success: false,
      status: 500,
      response: "Request body is not defined...",
    };
  }

  const { isbn: newBookISBN } = req.body as RequestBodyPOST;
  const bookToFind = await Book.findOne({ isbn: newBookISBN });

  if (bookToFind?.isbn) {
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

  const responsedBook = await Book.create(newBook);

  return { success: true, status: 200, response: responsedBook };
};

export default bookPOST;
