"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    title: {
        type: String,
        default: true,
        require: true,
    },
    name: {
        type: String,
        default: true,
        require: true,
    },
    category: {
        type: String,
        default: true,
        require: true,
    },
    isbn: {
        type: String,
        default: true,
        require: true,
    },
    createdAt: {
        type: Date,
        default: true,
        require: true,
    },
    editedAt: {
        type: Date || null,
        default: true,
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
