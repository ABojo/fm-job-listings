import "./Header.styles.scss";

function Header() {
  return (
    <header className="header">
      <picture>
        <source
          srcset="./images/bg-header-mobile.svg"
          media="(max-width: 43.75em)"
        />
        <img srcset="./images/bg-header-desktop.svg" />
      </picture>
    </header>
  );
}

export default Header;
