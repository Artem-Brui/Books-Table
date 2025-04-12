import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './database/connectDB';
import booksRouter from './routes/booksRouter';

const app = express();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

app.use(cors())
app.use(express.json())

try {
  connectDB(DB_URL);
} catch (err) {
  console.error(err);
}

app.use('/books', booksRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})

