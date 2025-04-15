import React from "react";
import { useGlobalState } from "../../context/CustomHooks";
import BooksTableHeading from "../BooksTableHeading/BooksTableHeading";
import BooksTableRow from "../BooksTableRow/BooksTableRow";
import Loader from "../Loader";
import getFiltredList from "../../context/utils.ts/getFiltredList";

const BooksTable: React.FC = () => {
  const state = useGlobalState();

  const filtredList = getFiltredList(state);

  if (state.isLoading) {
    return <Loader />;
  }

  return (
    <div
      className="table-container is-size-6 is-size-7-mobile"
      id="table-container"
    >
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth ">
        <BooksTableHeading />

        <tbody>
          {filtredList.map((book) => (
            <BooksTableRow key={book._id} book={book} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
