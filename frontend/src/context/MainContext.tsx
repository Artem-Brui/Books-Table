import React, { useEffect, useReducer } from "react";
import { DispatchContext } from "./DispatchContext";
import reducer from "./reducer";
import { GlobalStateContext, initialState } from "./GlobalStateContext";
import { client } from "../api/fetch";
import { BooksResponseGET } from "../api/types/Responses";

interface Props {
  children: React.ReactNode;
}

const MainContext: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    client.get<BooksResponseGET>("/books").then((data) => {
      dispatch({ type: "addBooksFromDB", payload: data.response });
    });
    console.log('load');
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
