import {
  faCheck,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { FC, useEffect, useState } from "react";
import { CheckerType, FormDataType, InputType } from "../types";
import validateInput from "../utils/validateInput";
import getInputData from "../utils/getInputData";
import { client } from "../../../api/fetch";
import Category from "../../../types/Category";
import { CategoriesResponseGET } from "../../../api/types/Responses";

interface Props {
  type: InputType;
  inputValues: FormDataType;
  setInputValues: React.Dispatch<React.SetStateAction<FormDataType>>;
  cheker: CheckerType;
  setCheker: React.Dispatch<React.SetStateAction<CheckerType>>;
}

const TitleInput: FC<Props> = ({
  type,
  inputValues,
  setInputValues,
  cheker,
  setCheker,
}) => {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(cheker[type]);
  const [isCategoriesLoaded, setIsCategoriesLoaded] = useState(true);
  const [categories, setCategories] = useState<Category[] | []>([]);

  const isTypeCategory = type === "category";

  useEffect(() => {
    if (isTypeCategory) {
      client
        .get<CategoriesResponseGET>("/categories")
        .then((data) => {
          if (typeof data.response === "string") {
            setIsError(true);
            setIsCategoriesLoaded(false);
            return;
          }
          const categories: Category[] = data.response;
          setCategories(categories);
        })
        .catch(() => {
          setIsError(true);
          setIsCategoriesLoaded(false);
        });
    }
  }, [isTypeCategory]);

  const { inputIcon, placeholder, errorMessage } = getInputData(
    type,
    isCategoriesLoaded
  );

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const newValue = event.target.value;
    const isValueSuccess = validateInput(newValue, type, categories);

    setIsError(!isValueSuccess);
    setIsSuccess(isValueSuccess);
    setCheker({
      ...cheker,
      [type]: isValueSuccess,
    });
    setInputValues({ ...inputValues, [type]: newValue });
  };

  return (
    <div className="field">
      <div className="control has-icons-left has-icons-right">
        <input
          className={classNames(
            "input",
            { "is-warning": isError },
            { "is-success": isSuccess }
          )}
          type="text"
          name="title"
          value={inputValues[type]}
          placeholder={placeholder}
          list={isTypeCategory ? "autocomplete-suggestions" : ''}
          onChange={handleInputChange}
        />

        <span className="icon is-small is-left">
          <FontAwesomeIcon icon={inputIcon} />
        </span>
        {isSuccess && (
          <span className="icon is-small is-right has-text-success">
            <FontAwesomeIcon icon={faCheck} />
          </span>
        )}
        {isError && (
          <span className="icon is-small is-right has-text-danger">
            <FontAwesomeIcon icon={faExclamationTriangle} />
          </span>
        )}

        {isTypeCategory && (
          <datalist id="autocomplete-suggestions">
            {categories.map((cat) => (
              <option key={cat._id} value={cat.name} />
            ))}
          </datalist>
        )}
      </div>

      <p
        className={classNames("help", "is-danger", {
          "not-visible": !isError,
        })}
      >
        {errorMessage}
      </p>
    </div>
  );
};

export default TitleInput;
