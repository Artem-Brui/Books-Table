import {
  faBookOpen,
  faHashtag,
  faList,
  faQuestionCircle,
  faUser,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { InputType } from "../types";

const getInputData = (type: InputType, isCategoriesLoaded?: boolean) => {
  let inputIcon: IconDefinition;
  let placeholder = "";
  let errorMessage = "";

  switch (type) {
    case "title":
      inputIcon = faBookOpen;
      placeholder = "Book Title";
      errorMessage = `Please, add BOOK TITLE (A-Z, a-z, 0-9, ., '-:;")`;
      break;
    case "name":
      inputIcon = faUser;
      placeholder = "Author Name";
      errorMessage = "Please add AUTHOR NAME (A-Z, a-z, . '-)";
      break;
    case "category":
      inputIcon = faList;
      placeholder = "Category";
      errorMessage = isCategoriesLoaded
        ? "Please select a CATEGORY from dropdown"
        : "Ups... Categories weren't loaded. Try later!";
      break;
    case "isbn":
      inputIcon = faHashtag;
      placeholder = "ISBN";
      errorMessage = "Please add ISBN number (XXX-AAABBBCCCD)";
      break;
    default:
      inputIcon = faQuestionCircle;
      break;
  }

  return { inputIcon, placeholder, errorMessage };
};

export default getInputData;
