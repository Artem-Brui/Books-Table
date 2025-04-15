import Book from "../../types/Book";
import { FilterValue } from "./Filter";

export type ActionTypes =
  | 'addBooksFromDB'
  | 'switchFilter'
  | 'bookAdd';

export type Action =
  | { type: 'addBooksFromDB', payload: Book[] | string }
  | { type: 'switchFilter', payload: FilterValue }
  | { type: 'bookAdd', payload: Book | string };

