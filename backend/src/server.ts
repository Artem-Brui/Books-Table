import express, { Response } from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./database/connectDB";
import booksRouter from "./routes/booksRouter";
import { resetBooksInDB } from "./database/resetBooksInDB";
import categoriesRouter from "./routes/categoriesRouter";
import errorHandler from "./ErrorHandler/ErrorHandler";

const app = express();

const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL;
const ClientURL = process.env.CLIENT_URL;

app.use(express.json());
app.use(
  cors({
    origin: ClientURL,
    credentials: true,
  })
);

try {
  connectDB(DB_URL);
} catch (err) {
  console.error(err);
}

app.use("/books", booksRouter);
app.use("/categories", categoriesRouter);

app.use(errorHandler)

resetBooksInDB(new Date());
// seedCategories();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
