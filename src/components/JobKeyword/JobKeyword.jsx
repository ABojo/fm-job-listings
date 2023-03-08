import "./JobKeyword.styles.scss";
import { JobFilterContext } from "../../contexts/JobFilter";
import { useContext } from "react";

function JobKeyword({ keyword }) {
  const { addKeyword } = useContext(JobFilterContext);

  return (
    <button className="job-keyword" onClick={() => addKeyword(keyword)}>
      {keyword}
    </button>
  );
}

export default JobKeyword;
