import Book from "../../types/Book";

type Action =
  | { type: 'booksLoad', payload: Book[] | string }
  | { type: 'bookAdd', payload: Book | string };

export default Action