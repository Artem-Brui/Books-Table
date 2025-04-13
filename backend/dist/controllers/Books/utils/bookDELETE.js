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
const Book_1 = __importDefault(require("../../../models/Book"));
const resetBooksInDB_1 = require("../../../database/resetBooksInDB");
const bookDELETE = (req) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.params.id) {
        return {
            success: false,
            status: 500,
            response: "Book ID for deleting is not defined...",
        };
    }
    const bookForDeletingID = req.params.id;
    const filter = { _id: bookForDeletingID };
    const bookToFind = yield Book_1.default.findOne(filter).lean();
    if (!(bookToFind === null || bookToFind === void 0 ? void 0 : bookToFind._id)) {
        return {
            success: false,
            status: 500,
            response: `Book with ID(${bookForDeletingID}) don't exist in a base..`,
        };
    }
    const deletedBook = yield Book_1.default.findOneAndDelete(filter).lean();
    const isExist = yield Book_1.default.findOne(filter).lean();
    const isBooksListExist = yield Book_1.default.find().lean();
    if (!isBooksListExist.length) {
        (0, resetBooksInDB_1.resetBooksInDB)();
    }
    return !isExist
        ? { success: true, status: 200, response: deletedBook }
        : {
            success: false,
            status: 500,
            response: "Something went wrong, book wasn't deleted",
        };
});
exports.default = bookDELETE;
