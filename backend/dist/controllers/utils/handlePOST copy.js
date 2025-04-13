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
exports.handlePOST = void 0;
const Book_1 = __importDefault(require("../../models/Book"));
const handlePOST = (req) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body) {
        return {
            success: false,
            status: 500,
            response: "Request body is not defined...",
        };
    }
    const { isbn: newBookISBN } = req.body;
    const isExist = yield Book_1.default.findOne({ isbn: newBookISBN });
    if (isExist) {
        return {
            success: false,
            status: 500,
            response: "Book with the same ISBN already exist in a base..",
        };
    }
    const newBook = Object.assign(Object.assign({}, req.body), { isActive: true, createdAt: new Date().toISOString(), editedAt: null });
    const responsedBook = yield Book_1.default.create(newBook);
    return { success: true, status: 200, response: responsedBook };
});
exports.handlePOST = handlePOST;
