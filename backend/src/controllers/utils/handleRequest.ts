import { ReqType, RequestHandler } from "../types";
import { Request, Response } from "express";
import handleERORR from "./handleERORR";
import handleGET from "./handleGET";
import handlePOST from "./handlePOST";
import handlePATCH from "./handlePATCH";

export const handleRequest = async (
  reqType: ReqType,
  req: Request,
  res: Response
) => {
  let requestHandler: RequestHandler = null;

  switch (reqType) {
    case "GET":
      requestHandler = handleGET;
      break;
    case "POST":
      requestHandler = handlePOST;
      break;
    case "PATCH":
      requestHandler = handlePATCH;
      break;
    default:
      requestHandler = () => ({
        success: false, 
        status: 500, 
        response: "Request type is not defined..."
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
