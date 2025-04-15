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
const bookPATCH = (req) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body) {
        return {
            success: false,
            status: 500,
            response: "Request body is not defined...",
        };
    }
    if (!req.params.id) {
        return {
            success: false,
            status: 500,
            response: "Book ID for updating is not defined...",
        };
    }
    const bookForUpdateID = req.params.id;
    const filter = { _id: bookForUpdateID };
    const bookToFind = yield Book_1.default.findOne(filter);
    if (!bookToFind) {
        return {
            success: false,
            status: 500,
            response: `Book with ID(${bookForUpdateID}) don't exist in a base..`,
        };
    }
    const updatings = Object.assign(Object.assign({}, req.body), { editedAt: new Date().toISOString() });
    yield Book_1.default.findOneAndUpdate(filter, updatings);
    const updatedBook = yield Book_1.default.findOne(filter);
    return { success: true, status: 200, response: updatedBook };
});
exports.default = bookPATCH;
