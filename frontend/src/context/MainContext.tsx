import React from "react";

interface Props {
  children: React.ReactNode;
}
const initialData = {};

const Context = React.createContext(initialData);

const data = { ...initialData };

const MainContext: React.FC<Props> = ({ children }) => {
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default MainContext
