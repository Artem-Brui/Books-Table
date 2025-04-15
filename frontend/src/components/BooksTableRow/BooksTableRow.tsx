import React, { useState } from "react";
import Book from "../../types/Book";
import getDateToShow from "./utils/getDateToShow";
import { useDispatch, useGlobalState } from "../../context/CustomHooks";
import {
  Arguments,
  handleActivationClick,
} from "./utils/handleActivationClick";
import classNames from "classnames";

interface Props {
  book: Book;
}

const BooksTableRow: React.FC<Props> = React.memo(
  ({ book }) => {
    const [isModal, setIsModal] = useState(false);

    const { _id, title, name, category, isbn, isActive, createdAt, editedAt } =
      book;
    const dispatch = useDispatch();
    const state = useGlobalState();

    const changeArguments: Arguments = [_id, dispatch, state.booksList, setIsModal];

    const aligningStyle = { verticalAlign: "middle" };
    const buttonClassName = "button is-small";

    return (
      <tr
        key={title}
        className={"has-text-centered"}
      >
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
            <button className={`${buttonClassName} is-warning button-edit`} />
          )}
          {!isActive && (
            <button className={`${buttonClassName} is-danger button-delete`} />
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
