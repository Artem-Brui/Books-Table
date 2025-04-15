import Book from "../../types/Book";
import { FilterValue } from "./Filter";

export type ActionTypes =
  | 'updateBooksList'
  | 'switchFilter'
  | 'bookAdd';

export type Action =
  | { type: 'updateBooksList', payload: Book[] | string }
  | { type: 'switchFilter', payload: FilterValue };

