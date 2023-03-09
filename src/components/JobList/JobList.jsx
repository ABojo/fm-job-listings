import "./JobList.styles.scss";
import api from "../../utils/api";
import { useEffect, useState, useContext } from "react";
import JobCard from "../JobCard/JobCard";
import { JobFilterContext } from "../../contexts/JobFilter";
import FilterControl from "../FilterControl/FilterControl";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const { filteredKeywords } = useContext(JobFilterContext);

  //if all filtered keywords are present on the job, return true
  function keywordsMatch(jobKeywords, filteredKeywords) {
    return filteredKeywords.every((kw) => {
      return jobKeywords[kw];
    });
  }

  //filter out the jobs that do not match all the currently filtered keywords
  function filterJobs() {
    if (!filteredKeywords.length) return setFilteredJobs(jobs);

    const filteredJobs = jobs.filter((job) => {
      return keywordsMatch(job.keywords, filteredKeywords);
    });

    setFilteredJobs(filteredJobs);
  }

  //add a keywords property to the objects that can be used during the filter process in constant time
  function buildKeywords(jobs) {
    return jobs.map((job) => {
      const { role, level, languages, tools } = job;
      const keywordList = [role, level, ...languages, ...tools];
      const keywordObj = {};

      keywordList.forEach((kw) => {
        if (kw) keywordObj[kw] = true;
      });

      job.keywords = keywordObj;

      return job;
    });
  }

  async function getJobs() {
    const jobs = await api.getJobs();
    const jobsWithKeywords = buildKeywords(jobs);

    setJobs(jobsWithKeywords);
  }

  useEffect(() => {
    getJobs();
  }, []);

  useEffect(() => {
    filterJobs();
  }, [jobs, filteredKeywords]);

  return (
    <div className="job-list">
      <div className="job-list__cards">
        <FilterControl />
        {filteredJobs.length ? (
          filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <div>Loader Placeholder</div>
        )}
      </div>
    </div>
  );
}

export default JobList;
