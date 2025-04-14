"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    title: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    isbn: {
        type: String,
        require: true,
    },
    createdAt: {
        type: String,
        require: true,
    },
    editedAt: {
        type: String || null,
        default: null,
        require: true,
    },
    isActive: {
        type: Boolean,
        default: true,
        require: true,
    },
});
const Book = (0, mongoose_1.model)("Book", bookSchema, 'Books');
exports.default = Book;
