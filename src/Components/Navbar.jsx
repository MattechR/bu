import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import BurgerIcon from "./Img/burgerIcon2.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link to="/" className="navbar-brand mx-3">
        <img src={BurgerIcon} alt="BurgerIcon" className="burger-icon"></img>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample03"
        aria-controls="navbarsExample03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink to="/menu" className="nav-link">
              Menu
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
          <li className="nav-item dropdown">
            <div className="dropdown-menu" aria-labelledby="dropdown03">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
          <>
            <li className="nav-item">
              <NavLink to="SignUp" className="nav-link active">
                Sign Up
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="SignIn" className="nav-link active">
                Sign In
              </NavLink>
            </li>
          </>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
