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
exports.resetBooksInDB = exports.seedBookToDB = void 0;
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
exports.seedBookToDB = seedBookToDB;
let isIntervalSet = false;
const resetBooksInDB = (date) => __awaiter(void 0, void 0, void 0, function* () {
    if (isIntervalSet) {
        return;
    }
    isIntervalSet = true;
    const currentTime = new Date();
    const nextMidnight = new Date(Date.UTC(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate() + 1, 0, 0, 0));
    const timeUntilMidnight = nextMidnight.getTime() - currentTime.getTime();
    setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield (0, exports.seedBookToDB)();
            console.log("Books reset successfully at UTC midnight.");
        }
        catch (error) {
            console.error("Error during midnight reset:", error);
        }
        setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield (0, exports.seedBookToDB)();
                console.log("Books reset successfully as part of daily interval.");
            }
            catch (error) {
                console.error("Scheduled seed failed:", error);
            }
        }), 1000 * 60 * 60 * 24);
    }), timeUntilMidnight);
});
exports.resetBooksInDB = resetBooksInDB;
