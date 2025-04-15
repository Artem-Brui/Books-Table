import { GlobalState } from "../GlobalStateContext";

const getFiltredList = (state: GlobalState) => {
  const { booksList, filter } = state;

  return booksList.filter((book) => {
    return filter === "all"
      ? true
      : book.isActive
      ? filter === "active"
      : filter === "deactivated";
  });
};

export default getFiltredList;
