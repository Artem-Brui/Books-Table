import React, { FC, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import TitleInput from "./components/TitleInput";
import { CheckerType } from "./types";
import { useDispatch, useGlobalState } from "../../context/CustomHooks";
import Book from "../../types/Book";
import { client } from "../../api/fetch";
import { BooksResponseGENERAL } from "../../api/types/Responses";

const BookForm: FC = React.memo(() => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { booksList } = useGlobalState();
  const dispatch = useDispatch();

  const isUpdateForm = searchParams.has("book");
  const updatedBookID = searchParams.get("book");

  const bookForUpdate: Book | undefined | null = isUpdateForm
    ? booksList.find((book) => book._id === updatedBookID)
    : null;

  const initialFormData = {
    title: bookForUpdate ? bookForUpdate.title : "",
    name: bookForUpdate ? bookForUpdate.name : "",
    category: bookForUpdate ? bookForUpdate.category : "",
    isbn: bookForUpdate ? bookForUpdate.isbn : "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [isSuccess, setIsSuccess] = useState<CheckerType>({
    title: isUpdateForm,
    name: isUpdateForm,
    category: isUpdateForm,
    isbn: isUpdateForm,
  });

  const { title, name, category, isbn } = isSuccess;
  const isPossibleSubmit = title && name && category && isbn;

  const handleSubmitClick = () => {
    if (isPossibleSubmit) {
      client
        .patch<BooksResponseGENERAL>(`/books/update/${updatedBookID}`, formData)
        .then(data => {
          if (typeof data.response !== "string") {
            const updatedBooks: Book[] = data.response;
            dispatch({type: 'updateBooksList', payload: updatedBooks})
          }
        })
        .finally(() => {
          navigate("/dashboard");
        });
    }
  };

  return (
    <div
      className="is-flex
      is-flex-direction-column
      mt-6
      form-container
      "
    >
      {(Object.keys(formData) as Array<keyof typeof formData>).map(
        (inputType) => {
          return (
            <TitleInput
              key={inputType}
              type={inputType}
              inputValues={formData}
              setInputValues={setFormData}
              cheker={isSuccess}
              setCheker={setIsSuccess}
            />
          );
        }
      )}

      <div className="field is-grouped is-align-self-center">
        <div className="control">
          <button
            onClick={handleSubmitClick}
            className="button is-link"
            disabled={!isPossibleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
});

export default BookForm;
