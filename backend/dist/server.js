"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const connectDB_1 = __importDefault(require("./database/connectDB"));
const booksRouter_1 = __importDefault(require("./routes/booksRouter"));
const resetBooksInDB_1 = require("./database/resetBooksInDB");
const categoriesRouter_1 = __importDefault(require("./routes/categoriesRouter"));
const app = (0, express_1.default)();
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
try {
    (0, connectDB_1.default)(DB_URL);
}
catch (err) {
    console.error(err);
}
app.use("/books", booksRouter_1.default);
app.use("/categories", categoriesRouter_1.default);
(0, resetBooksInDB_1.resetBooksInDB)();
// seedCategories();
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
