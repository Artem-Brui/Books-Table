import classNames from "classnames";
import { FC } from "react";
import { useLocation } from "react-router-dom";

const PageHeading: FC = () => {
  const { pathname } = useLocation();

  const pageName = pathname.split('/')[1];
  const capitalisedPageName = pageName[0].toUpperCase() + pageName.slice(1)

  const heading = pathname.includes('dashboard') ? capitalisedPageName : `${capitalisedPageName} Book`

  return (
    <h2 className={classNames("is-size-1", "has-text-weight-bold", "pb-4 pt-4")}>
      {heading}
    </h2>
  );
};

export default PageHeading;
