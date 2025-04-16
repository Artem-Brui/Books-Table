import React from "react";
import Book from "../types/Book";
import { FilterValue } from "./types/Filter";
import MessageType from "./types/MessageType";

export interface GlobalState {
  booksList: Book[] | [];
  filter: FilterValue;
  messageType: MessageType;
  isLoading: boolean;
}

export const initialState: GlobalState = {
  booksList: [],
  filter: 'all',
  messageType: null,
  isLoading: true,
};

export const GlobalStateContext = React.createContext<GlobalState>(initialState);
