import Category from "../../../types/Category";
import { InputType } from "../types";

const validateInput = (
  input: string,
  inputType: InputType,
  categories: Category[] | [],
): boolean => {
  let regexPattern;
  const isCategoty = inputType === "category";

  switch (inputType) {
    case "title":
      regexPattern = /^[A-Za-z0-9 .,'-:;"]+$/;
      break;
    case "name":
      regexPattern = /^[A-Za-z .'-]+$/;
      break;
    case "isbn":
      regexPattern = /^\d{3}-\d{10}$/;
      break;
    default:
      regexPattern = /^.*$/;
      break;
  }

  const isNotEmpty = input.trim().length !== 0;
  const isPatternOk = regexPattern.test(input);

  if (isCategoty) {
    const isCategoryExist = categories.some((cat) => cat.name === input);

    return isNotEmpty && isPatternOk && isCategoryExist;
  }

  return isNotEmpty && isPatternOk;
};

export default validateInput