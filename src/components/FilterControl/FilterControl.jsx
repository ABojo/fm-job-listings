import "./FilterControl.styles.scss";
import { useContext } from "react";
import { JobFilterContext } from "../../contexts/JobFilter";
import FilterKeyword from "../FilterKeyword/FilterKeyword";

function FilterControl() {
  const { filteredKeywords, clearKeywords } = useContext(JobFilterContext);

  if (!filteredKeywords.length) return null;

  return (
    <div className="filter-control">
      <div className="filter-control__keywords">
        {filteredKeywords.map((kw) => {
          return <FilterKeyword key={kw} keyword={kw} />;
        })}
      </div>
      <button className="filter-control__clear" onClick={clearKeywords}>
        Clear
      </button>
    </div>
  );
}

export default FilterControl;
