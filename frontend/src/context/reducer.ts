import { GlobalState } from "./GlobalStateContext";
import { Action } from "./types/Action";

const reducer = (state: GlobalState, action: Action): GlobalState => {
  const { type, payload } = action;

  switch (type) {
    case "addBooksFromDB":
      return typeof payload !== "string"
        ? {
            ...state,
            booksList: payload,
            isLoading: false,
          }
        : { ...state, isLoading: false };
    case "switchFilter":
      return {
        ...state,
        filter: payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
