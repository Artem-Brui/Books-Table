import React from "react";
import Book from "../types/Book";

export interface GlobalState {
  booksList: Book[] | [];
  isLoading: boolean;
}

export const initialState: GlobalState = {
  booksList: [],
  isLoading: true,
};

export const GlobalStateContext = React.createContext<GlobalState>(initialState);
