import { FC } from "react";
import handleSubmitClick from "../utils/handleSubmitClick";
import { SubmitArguments } from "../types";

interface Props {
  isPossibleSubmit: boolean
  submitArguments: SubmitArguments;
}

const ButtonSubmit: FC<Props> = ({ isPossibleSubmit, submitArguments }) => {
  return (
    <div className="field is-grouped is-align-self-center">
        <div className="control">
          <button
            onClick={() => handleSubmitClick(...submitArguments)}
            className="button is-link"
            disabled={!isPossibleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
  )
}

export default ButtonSubmit;