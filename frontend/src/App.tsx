import { Outlet } from "react-router-dom";
import MainContext from "./context/MainContext";
import "./index.scss";

const App = () => {
  return (
    <MainContext>
      <h1>Header</h1>
      <Outlet />
    </MainContext>
  );
};

export default App;
