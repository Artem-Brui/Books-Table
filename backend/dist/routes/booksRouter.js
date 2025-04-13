"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllersBooks_1 = require("../controllers/Books/controllersBooks");
const booksRouter = express_1.default.Router();
booksRouter.get("/", controllersBooks_1.BooksGET);
booksRouter.post("/add", controllersBooks_1.BooksPOST);
booksRouter.patch("/edit/:id", controllersBooks_1.BooksPATCH);
booksRouter.delete("/:id", controllersBooks_1.BooksDELETE);
exports.default = booksRouter;
