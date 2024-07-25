import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Перетяжка салона и перешив элементов <em>Firma name</em>
          </strong>
          <br />a good service
        </h1>
        <div className="header__text">
          <p>Made with passion.</p>
        </div>
        <a href="/contacts" className="btn" path="/contacts">
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;
