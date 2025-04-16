import classNames from "classnames";
import { FC } from "react";

interface Props {
  isActive: boolean;
}

const ModalLoader: FC<Props> = ({ isActive }) => {
  return (
    <div
      className={classNames("modal overlay", {
        "is-active": isActive,
      })}
    >
      <div className="modal-content" />
      <div className="loader" />
    </div>
  );
};

export default ModalLoader;
