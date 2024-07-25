import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css";

const Navbar = () => {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/#" className="logo">
            <strong>Автоателье - перетяжка салона </strong> и перешив элементов
          </NavLink>

          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Servicii
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Contacte
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
