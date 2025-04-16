import { client } from "../../../api/fetch";
import { BooksResponseGENERAL } from "../../../api/types/Responses";
import Book from "../../../types/Book";
import { SubmitArguments } from "../types";

const handleSubmitClick = (...args: SubmitArguments) => {
  const [
    isUpdateForm,
    updatedBookID,
    isPossibleSubmit,
    setIsModal,
    formData,
    dispatch,
    navigate
  ] = args;

  if (isUpdateForm) {
    if (isPossibleSubmit) {
      setIsModal(true);

      client
        .patch<BooksResponseGENERAL>(`/books/update/${updatedBookID}`, formData)
        .then((data) => {
          if (typeof data.response !== "string") {
            const updatedBooks: Book[] = data.response;
            dispatch({ type: "updateBooksList", payload: updatedBooks });
            setIsModal(false);
            navigate("/dashboard");
          }
        })
        .finally(() => {});
    }
  } else {
    setIsModal(true);

    client
      .post<BooksResponseGENERAL>(`/books/add`, formData)
      .then((data) => {
        if (typeof data.response !== "string") {
          const updatedBooks: Book[] = data.response;
          dispatch({ type: "updateBooksList", payload: updatedBooks });
          setIsModal(false);
          navigate("/dashboard");
        }
      })
      .finally(() => {});
  }
};

export default handleSubmitClick;
