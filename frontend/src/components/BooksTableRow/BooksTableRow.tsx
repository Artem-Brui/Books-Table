import React, { useState } from "react";
import Book from "../../types/Book";
import getDateToShow from "./utils/getDateToShow";
import { useDispatch } from "../../context/CustomHooks";
import {
  Arguments,
  handleActivationClick,
} from "./utils/handleActivationClick";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { client } from "../../api/fetch";
import { BooksResponseGENERAL } from "../../api/types/Responses";

interface Props {
  book: Book;
}

const BooksTableRow: React.FC<Props> = React.memo(
  ({ book }) => {
    const [isModal, setIsModal] = useState(false);
    const navigate = useNavigate();

    const { _id, title, name, category, isbn, isActive, createdAt, editedAt } =
      book;
    const dispatch = useDispatch();

    const changeArguments: Arguments = [
      _id as string,
      dispatch,
      setIsModal,
    ];

    const aligningStyle = { verticalAlign: "middle" };
    const buttonClassName = "button is-small";

    const handleEditClick = () => {
      navigate(`/edit/?book=${_id}`);
    };

    const handleDeleteClick = () => {
      setIsModal(true);
      client
        .delete<BooksResponseGENERAL>(`/books/delete/${_id}`)
        .then((data) => {
          if (typeof data.response !== "string") {
            const updatedBooks: Book[] = data.response;
            dispatch({ type: "updateBooksList", payload: updatedBooks });
          }
        })
        .finally(() => {
          setIsModal(false);
        });
    };

    return (
      <tr key={title} className={"has-text-centered"}>
        <td style={aligningStyle}>{title}</td>
        <td style={aligningStyle}>{name}</td>
        <td style={aligningStyle}>{category}</td>
        <td style={aligningStyle}>{isbn}</td>
        <td className="date-column" style={aligningStyle}>
          {getDateToShow(createdAt)}
        </td>
        <td className="date-column" style={aligningStyle}>
          {getDateToShow(editedAt)}
        </td>
        <td className="actions-cell" style={aligningStyle}>
          {isActive && (
            <button
              onClick={() => handleActivationClick(false, ...changeArguments)}
              className={`${buttonClassName} is-danger is-uppercase`}
            >
              Deactivate
            </button>
          )}
          {!isActive && (
            <button
              onClick={() => handleActivationClick(true, ...changeArguments)}
              className={`${buttonClassName} is-success is-uppercase`}
            >
              Re-Activate
            </button>
          )}
          {isActive && (
            <button
              onClick={handleEditClick}
              className={`${buttonClassName} is-warning button-edit`}
            />
          )}
          {!isActive && (
            <button
              onClick={handleDeleteClick}
              className={`${buttonClassName} is-danger button-delete`}
            />
          )}

          <div
            className={classNames("modal overlay", {
              "is-active": isModal,
            })}
          >
            <div className="modal-content" />
            <div className="loader" />
          </div>
        </td>
      </tr>
    );
  },
  (prevProps, newProps) => {
    return (
      prevProps.book._id === newProps.book._id &&
      prevProps.book.isActive === newProps.book.isActive &&
      prevProps.book.editedAt === newProps.book.editedAt
    );
  }
);

export default BooksTableRow;
