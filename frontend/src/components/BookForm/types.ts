import { NavigateFunction } from "react-router-dom";
import { Action } from "../../context/types/Action";

export interface FormDataType {
  title: string;
  name: string;
  category: string;
  isbn: string;
}

export type CheckerType = {
  title: boolean;
  name: boolean;
  category: boolean;
  isbn: boolean;
};

export type InputType = "title" | "name" | "category" | "isbn";

export type SubmitArguments = [
  isUpdateForm: boolean,
  updatedBookID: string | null,
  isPossibleSubmit: boolean,
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>,
  formData: FormDataType,
  dispatch: React.Dispatch<Action>,
  navigate: NavigateFunction,
]