import { Request } from "express";
import Book from "../../../models/Book";
import { RequestHandlerPATCH } from "../types";
import BookType from "../../../types/BookType";

const bookPATCH: RequestHandlerPATCH = async (req: Request) => {
  if (!req.body) {
    return {
      success: false,
      status: 500,
      response: "Request body is not defined...",
    };
  }

  if (!req.params.id) {
    return {
      success: false,
      status: 500,
      response: "Book ID for updating is not defined...",
    };
  }

  const bookForUpdateID = req.params.id;
  const filter = { _id: bookForUpdateID };
  const bookToFind = await Book.findOne(filter);

  if (!bookToFind) {
    return {
      success: false,
      status: 500,
      response: `Book with ID(${bookForUpdateID}) don't exist in a base..`,
    };
  }

  const updatings = {
    ...req.body,
    editedAt: new Date().toISOString(),
  };
  
  await Book.findOneAndUpdate(filter, updatings);
  const updatedBook: BookType | null = await Book.findOne(filter);

  return { success: true, status: 200, response: updatedBook };
};

export default bookPATCH;
