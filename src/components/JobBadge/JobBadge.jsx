import "./JobBadge.styles.scss";

function JobBadge({ type }) {
  const baseClass = "job-badge";

  const badgeTypes = {
    new: { class: `${baseClass}--new`, text: "New!" },
    featured: { class: `${baseClass}--featured`, text: "Featured" },
  };

  const badge = badgeTypes[type];

  return <div className={`${baseClass} ${badge.class}`}>{badge.text}</div>;
}

export default JobBadge;
