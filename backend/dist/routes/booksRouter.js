"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const BooksGET_1 = __importDefault(require("../controllers/BooksGET"));
const BooksPOST_1 = __importDefault(require("../controllers/BooksPOST"));
const booksRouter = express_1.default.Router();
booksRouter.get('/', BooksGET_1.default);
booksRouter.post('/add', BooksPOST_1.default);
exports.default = booksRouter;
