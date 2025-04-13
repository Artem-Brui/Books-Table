import { Request, Response } from "express";
import Book from "../models/Book";
import BookType from "../types/BookType";
import { LeanDocument } from "mongoose";

export type Controller = (req: Request, res: Response) => void;

export type ReqType = "GET" | "POST" | "PATCH" | "DELETE";

export interface RequestBodyPOST {
  title: string;
  name: string;
  category: string;
  isbn: string;
}

export interface RequestBodyPATCH  {
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
  response: string | Array<InstanceType<typeof Book>>;
};

export type ResponsePOST = {
  success: boolean;
  status: number;
  response: string | InstanceType<typeof Book> ;
};

export type ResponsePATCH = {
  success: boolean;
  status: number;
  response: string | LeanDocument<InstanceType<typeof Book>> | null ;
};

export type RequestHandler =
  | null
  | (() => ResponseUNKNOWN)
  | (() => Promise<ResponseGET>)
  | ((req: Request) => Promise<ResponsePOST>)
  | ((req: Request) => Promise<ResponsePATCH>);
