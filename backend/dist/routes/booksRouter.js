"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers/controllers");
const booksRouter = express_1.default.Router();
booksRouter.get('/', controllers_1.BooksGET);
booksRouter.post('/add', controllers_1.BooksPOST);
booksRouter.patch('/edit', controllers_1.BooksPATCH);
exports.default = booksRouter;
