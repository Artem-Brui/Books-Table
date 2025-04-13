import { handleRequest } from "./utils/handleRequest";
import { Controller } from "./types";

export const BooksGET: Controller = async (req, res) =>
  await handleRequest("GET", req, res);

export const BooksPOST: Controller = async (req, res) =>
  await handleRequest("POST", req, res);

export const BooksPATCH: Controller = async (req, res) =>
  await handleRequest("PATCH", req, res);

export const BooksDELETE: Controller = async (req, res) =>
  await handleRequest("DELETE", req, res);
