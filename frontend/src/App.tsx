import { Outlet } from "react-router-dom";
import MainContext from "./context/MainContext";

const App = () => {
  return (
    <MainContext>
      <h1>Header</h1>
      <Outlet />
      <h1>Footer</h1>
    </MainContext>
  );
};

export default App;
