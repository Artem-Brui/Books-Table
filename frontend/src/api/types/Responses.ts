import Book from "../../types/Book";

export interface BooksResponseGET {
  success: boolean;
  status: number;
  response: string | Book[];
}
export interface BooksResponseGENERAL {
  success: boolean;
  status: number;
  response: string | Book;
}