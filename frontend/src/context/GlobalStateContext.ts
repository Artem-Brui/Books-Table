import React from "react";
import Book from "../types/Book";
import { FilterValue } from "./types/Filter";

export interface GlobalState {
  booksList: Book[] | [];
  filter: FilterValue;
  isLoading: boolean;
}

export const initialState: GlobalState = {
  booksList: [],
  filter: 'active',
  isLoading: true,
};

export const GlobalStateContext = React.createContext<GlobalState>(initialState);
