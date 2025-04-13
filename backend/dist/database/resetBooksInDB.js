"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetBooksInDB = void 0;
const Book_1 = __importDefault(require("../models/Book"));
const books_1 = __importDefault(require("./data/books"));
const seedBookToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Book_1.default.deleteMany();
        Promise.all(books_1.default.map((book) => __awaiter(void 0, void 0, void 0, function* () {
            const newBook = Object.assign(Object.assign({}, book), { isActive: true, createdAt: new Date().toISOString(), editedAt: null });
            yield Book_1.default.create(newBook);
        })));
        console.log("Seeding books was successful!");
    }
    catch (err) {
        console.error(err);
    }
});
const resetBooksInDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield seedBookToDB();
        const booksReset = setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield seedBookToDB();
            }
            catch (error) {
                console.error("Scheduled seed failed:", error);
            }
        }), 1000 * 60 * 60 * 24);
        // setTimeout(() => {
        //   clearInterval(booksReset);
        //   console.log("Stopped book seeding interval");
        // }, 10000);
    }
    catch (error) {
        console.error("Initial book seeding failed:", error);
    }
});
exports.resetBooksInDB = resetBooksInDB;
