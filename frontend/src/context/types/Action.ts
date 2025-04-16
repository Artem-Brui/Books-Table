import Book from "../../types/Book";
import { FilterValue } from "./Filter";
import MessageType from "./MessageType";

export type ActionTypes =
  | 'updateBooksList'
  | 'switchFilter'
  | 'switchMessageType';

export type Action =
  | { type: 'updateBooksList', payload: Book[] | string }
  | { type: 'switchMessageType', payload: MessageType }
  | { type: 'switchFilter', payload: FilterValue };

