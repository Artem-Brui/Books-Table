import React from "react";
import Book from "../../types/Book";
import getDateToShow from "./utils/getDateToShow";

interface Props {
  book: Book;
}

const BooksTableRow: React.FC<Props> = ({ book }) => {
  const { title, name, category, isbn, isActive, createdAt, editedAt } = book;

  return (
    <tr key={title} className="has-text-centered">
      <td style={{ verticalAlign: "middle" }}>{title}</td>
      <td style={{ verticalAlign: "middle" }}>{name}</td>
      <td style={{ verticalAlign: "middle" }}>{category}</td>
      <td style={{ verticalAlign: "middle" }}>{isbn}</td>
      <td className="date-column" style={{ verticalAlign: "middle" }}>
        {getDateToShow(createdAt)}
      </td>
      <td className="date-column" style={{ verticalAlign: "middle" }}>
        {getDateToShow(editedAt)}
      </td>
      <td className="actions-cell" style={{ verticalAlign: "middle" }}>
        {isActive && (
          <button className="button is-small is-danger is-uppercase">
            Deactivate
          </button>
        )}
        {!isActive && (
          <button className="button is-small is-success is-uppercase">
            Re-Activate
          </button>
        )}
        {isActive && (
          <button className="button is-small is-warning button-edit" />
        )}
        {!isActive && (
          <button className="button is-small is-danger button-delete" />
        )}
      </td>
    </tr>
  );
};

export default BooksTableRow;
