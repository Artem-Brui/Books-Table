import { Outlet } from "react-router-dom";
import MainContext from "./context/MainContext";
import "./index.scss";
import Header from "./components/Header";

const App = () => {
  return (
    <MainContext>
      <Header />
      <Outlet />
    </MainContext>
  );
};

export default App;
