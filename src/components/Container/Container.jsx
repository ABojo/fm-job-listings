import "./Container.styles.scss";

function Container({ children, classes }) {
  const containerClasses = `container ${classes}`;
  return <div className={containerClasses}>{children}</div>;
}

export default Container;
