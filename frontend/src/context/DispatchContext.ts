import React from "react";
import { Action } from "./types/Action";

export const DispatchContext = React.createContext<React.Dispatch<Action>>(
  () => {}
);
