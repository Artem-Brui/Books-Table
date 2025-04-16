import classNames from "classnames";
import { FC } from "react";
import { useDispatch, useGlobalState } from "../../context/CustomHooks";

const Message: FC = () => {
  const dispatch = useDispatch();
  const { messageType: type } = useGlobalState();

  let messageText = "";
  let colorClass = "";

  switch (type) {
    case "delete":
      messageText = "Book was successfuly deleted!";
      colorClass = "is-danger";
      break;
    case "update":
      messageText = "Book was successfuly updated!";
      colorClass = "is-warning";
      break;
    case "create":
      messageText = "Book was successfuly added!";
      colorClass = "is-success";
      break;
    default:
      break;
  }

  if (messageText.length) {
    setTimeout(() => {
      dispatch({ type: "switchMessageType", payload: null });
    }, 2500);
  } else {
    return null;
  }

  return (
    <div
      className={classNames(
        "notification",
        "is-size-5",
        "pt-5",
        "is-light",
        "message",
        colorClass
      )}
    >
      {messageText}
    </div>
  );
};

export default Message;
