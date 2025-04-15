import React from "react";
import { client } from "../../../api/fetch";
import { BooksResponseGENERAL } from "../../../api/types/Responses";
import { Action } from "../../../context/types/Action";

export type Arguments = [
  _id: string | undefined,
  dispatch: React.Dispatch<Action>,
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>
];

export const handleActivationClick = (
  value: boolean,
  ...[_id, dispatch, setIsModal]: Arguments
) => {
  setIsModal(true);

  client
    .patch<BooksResponseGENERAL>(`/books/update/${_id}`, { isActive: value })
    .then((data) => {
      const updatedBooks = data.response;
      dispatch({ type: "updateBooksList", payload: updatedBooks });
    })
    .finally(() => setIsModal(false));
};
