import "./JobList.styles.scss";
import api from "../../utils/api";
import { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";

function JobList() {
  const [jobs, setJobs] = useState([]);

  async function getJobs() {
    const jobs = await api.getJobs();
    setJobs(jobs);
  }

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="job-list">
      <div className="job-list__cards">
        {jobs.length ? (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <div>Loader Placeholder</div>
        )}
      </div>
    </div>
  );
}

export default JobList;
