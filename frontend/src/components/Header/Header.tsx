import React from "react";
import PageHeading from "./components/PageHeading";
import Filter from "./components/Filter";

const Header: React.FC = () => {
  return (
    <header
      className="is-flex
          is-flex-direction-column
          is-align-items-center
          is-justify-content-center
          p-2"
    >
      {/* <NavigateButton buttonText="Add New Book" direction="/form" /> */}

      <PageHeading />
      <Filter />
    </header>
  );
};

export default Header;
