import { ReqType, RequestHandlerBooks } from "../types";
import { Request, Response } from "express";
import handleERORR from "./handleERORR";
import booksGET from "./booksGET";
import bookPOST from "./bookPOST";
import bookPATCH from "./bookPATCH";
import bookDELETE from "./bookDELETE";

export const handleRequest = async (
  reqType: ReqType,
  req: Request,
  res: Response
) => {
  let requestHandler: RequestHandlerBooks = null;

  switch (reqType) {
    case "GET":
      requestHandler = booksGET;
      break;
    case "POST":
      requestHandler = bookPOST;
      break;
    case "PATCH":
      requestHandler = bookPATCH;
      break;
    case "DELETE":
      requestHandler = bookDELETE;
      break;
    default:
      requestHandler = () => ({
        success: false,
        status: 500,
        response: "Request type is not defined...",
      });
      break;
  }

  try {
    if (!requestHandler) {
      throw new Error("Request handler is not defined");
    }

    const response = await requestHandler(req);

    res.status(response.status).json(response);
  } catch (error) {
    handleERORR(res, error);
  }
};
