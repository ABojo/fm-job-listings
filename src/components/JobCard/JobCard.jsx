import "./JobCard.styles.scss";
import JobKeyword from "../JobKeyword/JobKeyword";
import JobBadge from "../JobBadge/JobBadge";

function JobCard({ job }) {
  const {
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;

  const logoUrl = `${logo.split(".")[1]}.svg`;
  const keywords = [role, level, ...languages, ...tools];

  let cardClass = `job-card ${job.new && "job-card--new"}`;

  return (
    <div className={cardClass}>
      <img src={logoUrl} className="job-card__img" />
      <div className="job-card__head">
        <span className="job-card__company">{company}</span>
        {job.new && <JobBadge type="new" />}
        {featured && <JobBadge type="featured" />}
      </div>
      <h2 className="job-card__title">{position}</h2>
      <div className="job-card__details">
        <span>{postedAt}</span>
        <span>&#183;</span>
        <span>{contract}</span>
        <span>&#183;</span>
        <span>{location}</span>
      </div>
      <div className="job-card__keywords">
        {keywords.map((keyword) => {
          return <JobKeyword key={keyword} keyword={keyword} />;
        })}
      </div>
    </div>
  );
}

export default JobCard;