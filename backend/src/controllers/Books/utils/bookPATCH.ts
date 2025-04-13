import { Request } from "express";
import Book from "../../../models/Book";
import { RequestHandler } from "../types";

const bookPATCH: RequestHandler = async (req: Request) => {
  if (!req.body) {
    return {
      success: false,
      status: 500,
      response: "Request body is not defined...",
    };
  }

  if (!req.params.isbn) {
    return {
      success: false,
      status: 500,
      response: "Book ISBN for updating is not defined...",
    };
  }

  const bookForUpdateISBN = req.params.isbn;
  const filter = { isbn: bookForUpdateISBN };
  const bookToFind = await Book.findOne(filter).lean();

  if (!bookToFind?.isbn) {
    return {
      success: false,
      status: 500,
      response: `Book with ISBN(${bookForUpdateISBN}) don't exist in a base..`,
    };
  }

  const updatings = {
    ...req.body,
    editedAt: new Date().toISOString(),
  };

  await Book.findOneAndUpdate(filter, updatings);

  const responsedBook = await Book.findOne(filter).lean();

  return { success: true, status: 200, response: responsedBook };
};

export default bookPATCH;
