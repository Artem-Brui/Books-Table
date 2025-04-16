import { FC, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import TitleInput from "./components/TitleInput";
import { CheckerType, FormDataType, SubmitArguments } from "./types";
import { useDispatch, useGlobalState } from "../../context/CustomHooks";
import Book from "../../types/Book";
import ModalLoader from "../ModalLoader";
import ButtonSubmit from "./components/ButtonSubmit";

const BookForm: FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { booksList } = useGlobalState();
  const dispatch = useDispatch();

  const isUpdateForm = searchParams.has("book");
  const updatedBookID = searchParams.get("book");

  const bookForUpdate: Book | undefined | null = isUpdateForm
    ? booksList.find((book) => book._id === updatedBookID)
    : null;

  const initialFormData: FormDataType = {
    title: bookForUpdate ? bookForUpdate.title : "",
    name: bookForUpdate ? bookForUpdate.name : "",
    category: bookForUpdate ? bookForUpdate.category : "",
    isbn: bookForUpdate ? bookForUpdate.isbn : "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isModal, setIsModal] = useState(false);

  const [isSuccess, setIsSuccess] = useState<CheckerType>({
    title: isUpdateForm,
    name: isUpdateForm,
    category: isUpdateForm,
    isbn: isUpdateForm,
  });

  const { title, name, category, isbn } = isSuccess;
  const isPossibleSubmit = title && name && category && isbn;
  const submitArguments: SubmitArguments = [
    isUpdateForm,
    updatedBookID,
    isPossibleSubmit,
    setIsModal,
    formData,
    dispatch,
    navigate,
  ];

  return (
    <div
      className="is-flex
      is-flex-direction-column
      is-align-self-center
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

      <ButtonSubmit
        isPossibleSubmit={isPossibleSubmit}
        submitArguments={submitArguments}
      />
      <ModalLoader isActive={isModal} />
    </div>
  );
};

export default BookForm;
