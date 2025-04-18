import React from "react";
import PageHeading from "./components/PageHeading";
import Filter from "./components/Filter";
import NavigateButton from "./components/NavigationButton";
import { useLocation } from "react-router-dom";
import Message from "../Message/Message";

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const isDashboard = pathname.includes("dashboard");

  return (
    <header
      style={{ width: "100%" }}
      className="is-flex
          is-flex-direction-column
          is-align-items-center
          is-justify-content-center
          p-2 mt-5"
    >
      <Message />
      <NavigateButton />
      <PageHeading />
      {isDashboard && <Filter />}
    </header>
  );
};

export default Header;
