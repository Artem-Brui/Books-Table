import express from "express";
import {
  BooksDELETE,
  BooksGET,
  BooksPATCH,
  BooksPOST,
} from "../controllers/Books/controllersBooks";

const booksRouter = express.Router();

booksRouter.get("/", BooksGET);
booksRouter.post("/add", BooksPOST);
booksRouter.patch("/edit/:id", BooksPATCH);
booksRouter.delete("/:id", BooksDELETE);

export default booksRouter;
