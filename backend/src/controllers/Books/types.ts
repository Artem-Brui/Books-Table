import { NextFunction, Request, Response } from "express";
import BookType from "../../types/BookType";
import CategoryType from "../../types/CategoryType";

export type Controller = (req: Request, res: Response, next: NextFunction) => void;

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

export type ResponseBooksGET = {
  success: boolean;
  status: number;
  response: string | BookType[];
};

export type ResponseCategoriesGET = {
  success: boolean;
  status: number;
  response: string | CategoryType [];
};

export type ResponseBooks = {
  success: boolean;
  status: number;
  response: string | BookType[] | null;
};

export type RequestHandlerBooks =
  | (null)
  | (() => ResponseBooks)
  | (() => Promise<ResponseBooks>)
  | ((req: Request) => Promise<ResponseBooks>);