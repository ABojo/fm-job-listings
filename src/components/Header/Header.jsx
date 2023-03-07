import "./Header.styles.scss";
import headerImage from "../../assets/bg-header-desktop.svg";

function Header() {
  return (
    <div
      className="header"
      style={{ backgroundImage: `url(${headerImage})` }}
    ></div>
  );
}

export default Header;
