import "./FilterKeyword.styles.scss";
import { useContext } from "react";
import { JobFilterContext } from "../../contexts/JobFilter";
import { ReactComponent as RemoveIcon } from "../../assets/icon-remove.svg";

function FilterKeyword({ keyword }) {
  const { removeKeyword } = useContext(JobFilterContext);

  return (
    <div className="filter-keyword">
      <span className="filter-keyword__text">{keyword}</span>
      <button
        className="filter-keyword__remove"
        onClick={() => removeKeyword(keyword)}
      >
        <RemoveIcon />
      </button>
    </div>
  );
}

export default FilterKeyword;
