import "./FilterControl.styles.scss";
import { useContext } from "react";
import { JobFilterContext } from "../../contexts/JobFilter";
import FilterKeyword from "../FilterKeyword/FilterKeyword";
import Container from "../Container/Container";

function FilterControl() {
  const { filteredKeywords, clearKeywords } = useContext(JobFilterContext);

  if (!filteredKeywords.length) return null;

  const keywordComponents = filteredKeywords.map((kw) => {
    return <FilterKeyword key={kw} keyword={kw} />;
  });

  return (
    <Container classes={"filter-control"}>
      <div className="filter-control__keywords">{keywordComponents}</div>
      <button className="filter-control__clear" onClick={clearKeywords}>
        Clear
      </button>
    </Container>
  );
}

export default FilterControl;
