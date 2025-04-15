import React from "react";
import { client } from "../../../api/fetch";
import { BooksResponseGENERAL } from "../../../api/types/Responses";
import { Action } from "../../../context/types/Action";
import Book from "../../../types/Book";

export type Arguments = [
  _id: string | undefined,
  dispatch: React.Dispatch<Action>,
  booksList: Book[],
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>,
];

export const handleActivationClick= (value: boolean, ...[_id, dispatch, booksList, setIsModal]: Arguments) => {
  const oldList = [...booksList];
  setIsModal(true);

  client.patch<BooksResponseGENERAL>(`/books/update/${_id}`, { isActive: value })
    .then((data) => {
      const updatedBook = typeof data.response === 'string' ? null : data.response;

      const updatedBooksList = !updatedBook
        ? [...oldList]
        : oldList.map(book => {
          return book._id === updatedBook._id ? updatedBook : book;
        })

      dispatch({ type: "updateBooksList", payload: updatedBooksList });
    })
    .finally(() => setIsModal(false))
};
