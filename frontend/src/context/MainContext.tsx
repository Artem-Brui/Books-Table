import React, { useEffect, useReducer } from "react";
import { DispatchContext } from "./DispatchContext";
import reducer from "./reducer";
import { GlobalStateContext, initialState } from "./GlobalStateContext";
import { client } from "../api/fetch";
import { BooksResponseGENERAL } from "../api/types/Responses";

interface Props {
  children: React.ReactNode;
}

const MainContext: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    client.get<BooksResponseGENERAL>("/books").then((data) => {
      dispatch({ type: "updateBooksList", payload: data.response });
    });
  }, []);

  return (
    <DispatchContext value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </DispatchContext>
  );
};

export default MainContext;
