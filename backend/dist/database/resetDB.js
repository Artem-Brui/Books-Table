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
exports.resetDB = void 0;
const Book_1 = __importDefault(require("../models/Book"));
const books_1 = __importDefault(require("./books"));
const seedBookToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Book_1.default.deleteMany();
        Promise.all(books_1.default.map((book) => __awaiter(void 0, void 0, void 0, function* () {
            const newBook = Object.assign(Object.assign({}, book), { isActive: true, createdAt: new Date().toISOString(), editedAt: null });
            yield Book_1.default.create(newBook);
        })));
        console.log('Seeding was successful!');
    }
    catch (err) {
        console.error(err);
    }
});
const resetDB = () => {
    seedBookToDB();
    const DBreset = setInterval(() => {
        seedBookToDB();
    }, 1000 * 60 * 60 * 24);
    // setTimeout(() => {
    //   clearInterval(DBreset);
    //   console.log('stopped');
    // }, 10000)
};
exports.resetDB = resetDB;
