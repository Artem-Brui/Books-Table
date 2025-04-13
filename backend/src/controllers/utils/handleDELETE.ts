import { Request } from "express";
import Book from "../../models/Book";
import { RequestHandler } from "../types";

const handleDELETE: RequestHandler = async (req: Request) => {
  if (!req.params.id) {
    return {
      success: false,
      status: 500,
      response: "Book ID for deleting is not defined...",
    };
  }

  const bookForDeletingID = req.params.id;
  const filter = { _id: bookForDeletingID };
  const bookToFind = await Book.findOne(filter).lean();

  if (!bookToFind?._id) {
    return {
      success: false,
      status: 500,
      response: `Book with ID(${bookForDeletingID}) don't exist in a base..`,
    };
  }

  const deletedBook = await Book.findOneAndDelete(filter).lean();

  const isExist = await Book.findOne(filter).lean();

  return !isExist
    ? { success: true, status: 200, response: deletedBook }
    : { success: false, status: 500, response: "Something went wrong, book wasn't deleted" };
};

export default handleDELETE;
