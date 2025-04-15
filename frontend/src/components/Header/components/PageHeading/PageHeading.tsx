import classNames from "classnames";
import { FC } from "react";
import { useLocation } from "react-router-dom";

const PageHeading: FC = () => {
  const { pathname } = useLocation();

  const pageName = pathname.split('/')[1];
  const capitalisedPageName = pageName[0].toUpperCase() + pageName.slice(1)

  return (
    <h2 className={classNames("is-size-1", "has-text-weight-bold", "pb-4")}>
      {capitalisedPageName}
    </h2>
  );
};

export default PageHeading;
