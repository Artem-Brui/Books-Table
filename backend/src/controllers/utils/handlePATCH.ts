import { Request } from "express";
import Book from "../../models/Book";
import BookType from "../../types/BookType";
import { RequestBodyPATCH, RequestHandler } from "../types";

const handlePATCH: RequestHandler = async (req: Request) => {
  if (!req.body) {
    return {
      success: false,
      status: 500,
      response: "Request body is not defined...",
    };
  }

  const { _id: BookForUpdateID } = req.body as RequestBodyPATCH;
  const bookToFind = await Book.findOne({ _id: BookForUpdateID }).lean();

  if (!bookToFind?._id) {
    return {
      success: false,
      status: 500,
      response: `Book with ID(${BookForUpdateID}) don't exist in a base..`,
    };
  }

  const filter = { _id: BookForUpdateID };
  const updating = {
    ...req.body,
    editedAt: new Date().toISOString(),
  }

  await Book.findOneAndUpdate(filter, updating);
  const responsedBook = await Book.findOne(filter).lean();

  return { success: true, status: 200, response: responsedBook };
};

export default handlePATCH;
