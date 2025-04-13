import { GlobalState } from "./GlobalStateContext";
import Action from "./types/Action";

const reducer = (state: GlobalState, action: Action): GlobalState => {
  const { type, payload } = action;

  switch (type) {
    case "booksLoad":
      return typeof payload !== "string"
        ? {
            ...state,
            booksList: payload,
            isLoading: false,
          }
        : { ...state, isLoading: false };
    default:
      return { ...state };
  }
};

export default reducer;
