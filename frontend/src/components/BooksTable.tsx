import React from "react";
import { useGlobalState } from "../context/CustomHooks";
import { Loader } from "./Loader";
import BooksTableHeading from "./BooksTableHeading";
import BooksTableRow from "./BooksTableRow";

const BooksTable: React.FC = () => {
  const { booksList, isLoading } = useGlobalState();

  if (isLoading) {
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
          {booksList.map((book) => (
            <BooksTableRow key={book._id} book={book} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
