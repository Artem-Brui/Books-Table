import express from 'express';
import BooksGET from '../controllers/BooksGET';
import BooksPOST from '../controllers/BooksPOST';

const booksRouter = express.Router();

booksRouter.get('/', BooksGET);
booksRouter.post('/add', BooksPOST);

export default booksRouter;