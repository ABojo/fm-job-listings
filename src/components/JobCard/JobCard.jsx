import "./JobCard.styles.scss";
import JobKeyword from "../JobKeyword/JobKeyword";
import JobBadge from "../JobBadge/JobBadge";
import Container from "../Container/Container";

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
    <Container classes={cardClass}>
      <img src={logoUrl} className="job-card__img" alt={company} />
      <div className="job-card__head">
        <span className="job-card__company">{company}</span>
        {job.new && <JobBadge type="new" />}
        {featured && <JobBadge type="featured" />}
      </div>
      <a href="#" className="job-card__title">
        {position}
      </a>
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
    </Container>
  );
}

export default JobCard;
