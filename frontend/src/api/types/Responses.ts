import Book from "../../types/Book";
import Category from "../../types/Category";

export interface CategoriesResponseGET {
  success: boolean;
  status: number;
  response: string | Category[];
}

export type BooksResponseGENERAL = {
  success: boolean;
  status: number;
  response: string | Book[];
}