import { handleRequest } from "./utils/handleRequest";
import { Controller } from "./types";

export const BooksGET: Controller = async (req, res, next) =>
  await handleRequest("GET", req, res, next);

export const BooksPOST: Controller = async (req, res, next) =>
  await handleRequest("POST", req, res, next);

export const BooksPATCH: Controller = async (req, res, next) =>
  await handleRequest("PATCH", req, res, next);

export const BooksDELETE: Controller = async (req, res, next) =>
  await handleRequest("DELETE", req, res, next);
