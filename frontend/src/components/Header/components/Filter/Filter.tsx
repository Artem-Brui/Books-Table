import React, { useCallback } from "react";
import { useDispatch, useGlobalState } from "../../../../context/CustomHooks";
import { FilterValue } from "../../../../context/types/Filter";
import getFiltredList from "../../../../context/utils.ts/getFiltredList";

const Filter: React.FC = () => {
  const { filter, booksList } = useGlobalState();
  const dispatch = useDispatch();
  const filtredList = getFiltredList(useGlobalState());

  const handleFilterValueChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "switchFilter", payload: event.target.value as FilterValue })
  }, [dispatch]);

  return (
    <div
        className="is-flex 
      is-align-items-center 
      mb-4"
      >
        <div className="select is-success">
          <select
            defaultValue={filter}
            onChange={handleFilterValueChange}
          >
            <option value="active">Show Active</option>
            <option value="deactivated">Show Deactivated</option>
            <option value="all">Show All</option>
          </select>
        </div>
        <p className="ml-2 has-text-weight-bold">
          {filtredList.length} / {booksList.length}
        </p>
      </div>
  );
};

export default Filter;
