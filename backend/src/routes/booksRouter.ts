import express from 'express';
import { BooksGET, BooksPATCH, BooksPOST } from '../controllers/controllers';

const booksRouter = express.Router();

booksRouter.get('/', BooksGET);
booksRouter.post('/add', BooksPOST);
booksRouter.patch('/edit', BooksPATCH);

export default booksRouter;