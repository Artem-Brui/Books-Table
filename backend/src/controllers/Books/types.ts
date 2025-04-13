import { Request, Response } from "express";
import Book from "../../models/Book";
import { LeanDocument } from "mongoose";

export type Controller = (req: Request, res: Response) => void;

export type ReqType = "GET" | "POST" | "PATCH" | "DELETE";

export interface RequestBodyPOST {
  title: string; // !!!! REQUIRED
  name: string; // !!!! REQUIRED
  category: string; // !!!! REQUIRED
  isbn: string; // !!!! REQUIRED
}

export interface RequestBodyDELETE {
  _id: string; // !!!! REQUIRED
}

export interface RequestBodyPATCH {
  _id: string; // !!!! REQUIRED
  title?: string;
  name?: string;
  category?: string;
  isbn?: string;
  isActive?: string;
}

export type ResponseUNKNOWN = {
  success: boolean;
  status: number;
  response: string;
};

export type ResponseGET = {
  success: boolean;
  status: number;
  response: string | LeanDocument<Array<InstanceType<typeof Book>>>;
};

export type ResponseGENERAL = {
  success: boolean;
  status: number;
  response: string | LeanDocument<InstanceType<typeof Book>> | null;
};

export type RequestHandler =
  | null
  | (() => ResponseUNKNOWN)
  | (() => Promise<ResponseGET>)
  | ((req: Request) => Promise<ResponseGENERAL>)
  | ((req: Request) => Promise<ResponseGENERAL>)
  | ((req: Request) => Promise<ResponseGENERAL>);
